// scripts/lib/og-image.js
// Resolução robusta de og:image com User-Agent de navegador real,
// variações de URL (www/no-www, trailing slash) e múltiplos padrões.

const UA_BROWSER = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

const COMMON_HEADERS = {
  'User-Agent': UA_BROWSER,
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
  'Cache-Control': 'no-cache',
};

export function urlVariations(url) {
  const out = new Set([url]);
  try {
    const u = new URL(url);
    if (u.pathname.endsWith('/')) out.add(u.toString().replace(/\/$/, ''));
    else out.add(u.toString() + '/');
    if (u.hostname.startsWith('www.')) out.add(url.replace('://www.', '://'));
    else out.add(url.replace('://', '://www.'));
  } catch {}
  return [...out];
}

export async function fetchPageHtml(url, timeoutMs = 8000) {
  const ac = new AbortController();
  const to = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const res = await fetch(url, { headers: COMMON_HEADERS, signal: ac.signal, redirect: 'follow' });
    clearTimeout(to);
    if (!res.ok) return null;
    return (await res.text()).slice(0, 500000);
  } catch { return null; }
}

export function extractOgImage(html) {
  if (!html) return null;
  const candidatos = [
    html.match(/<meta[^>]+property=["']og:image:secure_url["'][^>]+content=["']([^"']+)["']/i),
    html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i),
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i),
    html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i),
    html.match(/<meta[^>]+name=["']twitter:image:src["'][^>]+content=["']([^"']+)["']/i),
    html.match(/"image"\s*:\s*"([^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/i),
  ];
  for (const m of candidatos) if (m) return m[1].replace(/&amp;/g, '&');
  return null;
}

export async function isValidImageUrl(url, timeoutMs = 6000) {
  if (!url) return false;
  if (url.startsWith('/')) return true;
  try {
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), timeoutMs);
    let res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': UA_BROWSER }, signal: ac.signal, redirect: 'follow' });
    if (!res.ok) {
      res = await fetch(url, { method: 'GET', headers: { 'User-Agent': UA_BROWSER, 'Range': 'bytes=0-2047' }, signal: ac.signal, redirect: 'follow' });
    }
    clearTimeout(to);
    if (!res.ok && res.status !== 206) return false;
    return (res.headers.get('content-type') || '').toLowerCase().startsWith('image/');
  } catch { return false; }
}

export async function resolveOgImage(articleUrl) {
  if (!articleUrl) return null;
  for (const variant of urlVariations(articleUrl)) {
    const html = await fetchPageHtml(variant);
    if (!html) continue;
    const og = extractOgImage(html);
    if (!og) continue;
    if (await isValidImageUrl(og)) return og;
  }
  return null;
}
