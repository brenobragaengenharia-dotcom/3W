import { NextResponse } from 'next/server';
import { makeAdminToken } from '@/lib/admin-auth';

export async function POST(req) {
  const { password } = await req.json();
  if (!process.env.ADMIN_SECRET || password !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
  }
  const token = await makeAdminToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set('admin_token', token, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
    path: '/',
  });
  return res;
}
