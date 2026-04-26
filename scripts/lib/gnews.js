import { resolveOgImage, isValidImageUrl } from './og-image.js';

async function resolveGnewsImagem(feedImage, articleUrl) {
  if (feedImage && (await isValidImageUrl(feedImage))) return feedImage;
  return await resolveOgImage(articleUrl);
}

export async function fetchGnews(config) {
  if (!config?.enabled) return [];
  const key = process.env.GNEWS_API_KEY;
  if (!key) { console.warn('[gnews] GNEWS_API_KEY ausente'); return []; }
  const all = [];
  for (const q of config.queries || []) {
    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(q.q)}&lang=pt&country=br&max=${q.max || 5}&apikey=${key}`;
    try {
      const res = await fetch(url);
      if (!res.ok) { console.warn(`[gnews] "${q.q}" HTTP ${res.status}`); continue; }
      const json = await res.json();
      const articles = json.articles || [];
      const imagens = await Promise.all(articles.map((a) => resolveGnewsImagem(a.image, a.url)));
      articles.forEach((a, i) => { all.push({ titulo: a.title, descricao: a.description, corpo_original: a.content || a.description || '', url: a.url, imagem: imagens[i], data_publicacao: a.publishedAt, autor_original: a.source?.name, fonte: a.source?.name || 'GNews', fonte_url: a.source?.url || null, categoria_padrao: q.categoria_padrao, tags_hint: [] }); });
    } catch (err) { console.warn(`[gnews] "${q.q}": ${err.message}`); }
  }
  return all;
}
