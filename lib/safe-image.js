// lib/safe-image.js
// Sanitiza URLs de imagem antes de salvar no content.json / mock-data.js.
// Hosts em BLOCKED_HOSTS bloqueiam hotlinking via Referer (Cloudflare 403),
// então mesmo com User-Agent válido o next/image recebe 403 em prod.

export const PLACEHOLDER = '/images/noticias/placeholder.jpg';

export const BLOCKED_HOSTS = new Set([
  'www.grandepremio.com.br',
  'grandepremio.com.br',
]);

const CATEGORY_PLACEHOLDERS = {
  motogp:   '/images/noticias/placeholder-motogp.jpg',
  stockcar: '/images/noticias/placeholder-stockcar.jpg',
  dtm:      '/images/noticias/placeholder-dtm.jpg',
  f1:       '/images/noticias/placeholder-f1.jpg',
};

// Heurística: identifica subcategoria de motorsport por texto (slug+título+categoria).
export function pickPlaceholder(...textos) {
  const blob = textos.filter(Boolean).join(' ').toLowerCase();
  if (/\b(motogp|moto2|moto3|ducati|alex\s+marquez|marc\s+marquez|agius|intact|jerez)\b/.test(blob)) return CATEGORY_PLACEHOLDERS.motogp;
  if (/\bstock\s?car\b/.test(blob)) return CATEGORY_PLACEHOLDERS.stockcar;
  if (/\bdtm\b/.test(blob)) return CATEGORY_PLACEHOLDERS.dtm;
  if (/\b(f1|formula\s+1|fórmula\s+1|f4|super\s+formula|colapinto|fangio|monoposto|single-?seater)\b/.test(blob)) return CATEGORY_PLACEHOLDERS.f1;
  return null;
}

// safeImage(url, contexto?) — contexto = { categoria, slug, titulo } pra escolher placeholder específico.
export function safeImage(url, contexto = {}) {
  const fallback = pickPlaceholder(contexto.categoria, contexto.slug, contexto.titulo) || PLACEHOLDER;
  if (!url || typeof url !== 'string') return fallback;
  if (url.startsWith('/')) return url;
  try {
    const host = new URL(url).hostname.toLowerCase();
    if (BLOCKED_HOSTS.has(host)) return fallback;
    return url;
  } catch {
    return fallback;
  }
}
