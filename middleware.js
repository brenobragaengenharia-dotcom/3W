import { NextResponse } from 'next/server';

// Rotas dentro de /admin e /api/admin que não precisam de auth
const PUBLIC = new Set([
  '/admin/login',
  '/admin/enviar',
  '/api/admin/login',
  '/api/admin/submit',
]);

async function sha256hex(msg) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(msg));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function isAdmin(req) {
  const token = req.cookies.get('admin_token')?.value;
  if (!token || !process.env.ADMIN_SECRET) return false;
  const day = new Date().toISOString().slice(0, 10);
  const expected = await sha256hex(`admin:${process.env.ADMIN_SECRET}:${day}`);
  return token === expected;
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
