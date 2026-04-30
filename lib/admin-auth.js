// lib/admin-auth.js — geração e validação de tokens de admin.
//
// Formato do token (HMAC-style, self-contained, stateless):
//   base64url(payload).hex(hmac_sha256(payload, ADMIN_SECRET))
//
// payload = { sub: 'admin', iat, exp, jti }
//   - sub:  identificador (sempre "admin")
//   - iat:  issued at (timestamp ms)
//   - exp:  expira em (timestamp ms)
//   - jti:  identificador único (16 bytes random) — rotaciona o token a cada login,
//           evitando que um token vazado seja reutilizável após relogin.
//
// Diferenças vs versão antiga (sha256("admin:SECRET:YYYY-MM-DD")):
//   - Token único por sessão (não é determinístico pelo dia).
//   - Expiração curta embutida (TTL_MS abaixo).
//   - Verificação em tempo constante (timingSafeEqual) — evita timing attacks.
//   - Roda em Edge Runtime (Web Crypto) E em Node — sem dep externa.

const TTL_MS = 4 * 60 * 60 * 1000; // 4 horas
export const COOKIE_NAME = 'admin_token';
export const TOKEN_TTL_SECONDS = Math.floor(TTL_MS / 1000);

function getSecret() {
  const s = process.env.ADMIN_SECRET;
  if (!s) throw new Error('ADMIN_SECRET não configurado');
  return s;
}

// ─── encoding helpers ───────────────────────────────────────────────────────
function bytesToHex(bytes) {
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

function bytesToB64Url(bytes) {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function b64UrlToString(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  return atob(s);
}

// ─── crypto primitives (Web Crypto, funciona em Edge + Node) ────────────────
async function hmac(payload) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(getSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign(
    'HMAC',
    key,
    new TextEncoder().encode(payload),
  );
  return bytesToHex(new Uint8Array(sig));
}

// Comparação tempo-constante para evitar timing attack.
function timingSafeEqualHex(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
}

function randomJti() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return bytesToHex(bytes);
}

// ─── API pública ────────────────────────────────────────────────────────────
export async function makeAdminToken() {
  const now = Date.now();
  const payload = {
    sub: 'admin',
    iat: now,
    exp: now + TTL_MS,
    jti: randomJti(),
  };
  const payloadStr = JSON.stringify(payload);
  const payloadB64 = bytesToB64Url(new TextEncoder().encode(payloadStr));
  const sig = await hmac(payloadB64);
  return `${payloadB64}.${sig}`;
}

export async function isAdminToken(value) {
  if (!value || typeof value !== 'string') return false;
  const dot = value.indexOf('.');
  if (dot <= 0 || dot === value.length - 1) return false;
  const payloadB64 = value.slice(0, dot);
  const sig = value.slice(dot + 1);

  // 1) Verifica assinatura primeiro (não vaza informação sobre o payload).
  let expected;
  try { expected = await hmac(payloadB64); } catch { return false; }
  if (!timingSafeEqualHex(sig, expected)) return false;

  // 2) Decodifica payload e valida exp.
  try {
    const payload = JSON.parse(b64UrlToString(payloadB64));
    if (payload.sub !== 'admin') return false;
    if (typeof payload.exp !== 'number') return false;
    if (Date.now() >= payload.exp) return false;
    return true;
  } catch {
    return false;
  }
}
