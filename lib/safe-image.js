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

// Gera URL para o card dinâmico /api/og a partir do título e categoria.
// Usado como fallback quando não há imagem real nem placeholder categórico.
// Resultado: card estilizado com o título da matéria e cor da categoria,
// em vez do placeholder.jpg genérico (apenas a marca "3W Entretenimento").
export function ogCard(titulo, categoria) {
  const t = (titulo || '').toString().slice(0, 110);
  if (!t) return null;
  const c = (categoria || '').toString();
  const params = new URLSearchParams({ title: t });
  if (c) params.set('category', c);
  return `/api/og?${params.toString()}`;
}

// safeImage(url, contexto?) — contexto = { categoria, slug, titulo }.
// Cadeia de fallback: imagem original (se host não estiver bloqueado)
//   → card /api/og com título e categoria (preferência — enricher sempre detecta)
//   → placeholder categórico (motogp/stockcar/dtm/f1, só se não houver título)
//   → PLACEHOLDER estático (último recurso).
// IMPORTANTE: ogCard tem prioridade sobre categorical para que enrich-placeholder-images.js
// possa substituir esses fallbacks via og:image da fonte. Categorical "agarra" agius/intact/jerez
// e bloqueia a substituição automática — então só roda quando ogCard retornar null.
export function safeImage(url, contexto = {}) {
  const categorical = pickPlaceholder(contexto.categoria, contexto.slug, contexto.titulo);
  const dynamic = ogCard(contexto.titulo, contexto.categoria);
  const fallback = dynamic || categorical || PLACEHOLDER;
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
