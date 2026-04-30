import { NextResponse } from 'next/server';
import { makeAdminToken, COOKIE_NAME, TOKEN_TTL_SECONDS } from '@/lib/admin-auth';
import { rateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';

// Compara senhas em tempo constante para evitar timing attacks.
function timingSafeEqualStr(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
}

export async function POST(req) {
  // Rate-limit por IP — 5 tentativas por 15 min para combater brute-force.
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const rl = rateLimit(`admin-login:${ip}`, { max: 5, windowMs: 15 * 60 * 1000 });
  if (!rl.allowed) {
    return NextResponse.json(
      { error: 'Muitas tentativas. Tente novamente em alguns minutos.' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil(rl.retryAfterMs / 1000)) } },
    );
  }

  const { password } = await req.json().catch(() => ({}));
  const secret = process.env.ADMIN_SECRET;

  if (!secret || typeof password !== 'string' || !timingSafeEqualStr(password, secret)) {
    return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
  }

  const token = await makeAdminToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: TOKEN_TTL_SECONDS,
    path: '/',
  });
  return res;
}
