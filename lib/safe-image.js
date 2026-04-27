// scripts/lib/safe-image.js
// Sanitiza URLs de imagem antes de salvar no content.json / mock-data.js.
// Hosts em BLOCKED_HOSTS bloqueiam hotlinking via Referer (Cloudflare 403),
// então mesmo com User-Agent válido o next/image recebe 403 em prod.

export const PLACEHOLDER = '/images/noticias/placeholder.jpg';

export const BLOCKED_HOSTS = new Set([
  'www.grandepremio.com.br',
  'grandepremio.com.br',
]);

export function safeImage(url) {
  if (!url || typeof url !== 'string') return PLACEHOLDER;
  if (url.startsWith('/')) return url;
  try {
    const host = new URL(url).hostname.toLowerCase();
    if (BLOCKED_HOSTS.has(host)) return PLACEHOLDER;
    return url;
  } catch {
    return PLACEHOLDER;
  }
}
