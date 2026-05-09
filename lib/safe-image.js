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

// safeImage(url, contexto?) — contexto = { categoria, slug, titulo }.
// Cadeia de fallback (rolled back de 4e1f33c — não usar mais /api/og como fallback):
//   1. URL original, se host não estiver bloqueado.
//   2. Placeholder categórico (motogp/stockcar/dtm/f1) baseado no texto.
//   3. PLACEHOLDER estático genérico.
//
// O fallback /api/og foi removido porque a OG dinâmica acabava sendo gravada
// PERMANENTEMENTE em mock-data.js / content.json e renderizada como hero da
// notícia em vez de só preview de share. Agora notícias sem foto real ficam
// com placeholder visivelmente "sem foto", o que é honesto e fácil de detectar
// na revisão (ao invés de parecer um card legítimo).
export function safeImage(url, contexto = {}) {
  const fallback =
    pickPlaceholder(contexto.categoria, contexto.slug, contexto.titulo) || PLACEHOLDER;
  if (!url || typeof url !== 'string') return fallback;
  if (url.startsWith('/')) {
    // Se algum legado ainda passa "/api/og?..." aqui, troca por placeholder.
    if (url.startsWith('/api/og')) return fallback;
    return url;
  }
  try {
    const host = new URL(url).hostname.toLowerCase();
    if (BLOCKED_HOSTS.has(host)) return fallback;
    return url;
  } catch {
    return fallback;
  }
}
