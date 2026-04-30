import { NextResponse } from 'next/server';
import { isAdminToken, COOKIE_NAME } from '@/lib/admin-auth';

// Rotas dentro de /admin e /api/admin que não precisam de admin auth.
// /admin/enviar e /api/admin/submit são forms para redatores submeterem
// notícias — protegidos por TEAM_SECRET próprio + rate-limit (não exigem
// login de admin).
const PUBLIC = new Set([
  '/admin/login',
  '/admin/enviar',
  '/api/admin/login',
  '/api/admin/submit',
]);

async function isAdmin(req) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return isAdminToken(token);
}

export const config = { matcher: ['/admin/:path*', '/api/admin/:path*'] };

export async function middleware(req) {
  const path = req.nextUrl.pathname;
  if (PUBLIC.has(path)) return NextResponse.next();

  if (!(await isAdmin(req))) {
    if (path.startsWith('/api/')) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
  return NextResponse.next();
}
