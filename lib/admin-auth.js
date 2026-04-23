// lib/admin-auth.js — geração e validação de tokens (Web Crypto, funciona em Edge + Node)
async function sha256hex(msg) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(msg));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const today = () => new Date().toISOString().slice(0, 10);

export async function makeAdminToken() {
  return sha256hex(`admin:${process.env.ADMIN_SECRET ?? ''}:${today()}`);
}

export async function isAdminToken(value) {
  if (!value) return false;
  return value === (await makeAdminToken());
}
