// scripts/lib/gnews.js — cliente GNews com og:image fallback + HEAD validation
import { isValidImageUrl } from './rss.js';

const UA = '3W-Entretenimento NewsBot/1.0 (+https://3w-entretenimento.com)';

async function tryOgImage(url, timeoutMs = 5000) {
  if (!url) return null;
  try {
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), timeoutMs);
    const res = await fetch(url, {
      headers: { 'User-Agent': UA, 'Accept': 'text/html,*/*' },
      signal: ac.signal, redirect: 'follow',
    });
    clearTimeout(to);
    if (!res.ok) return null;
    const html = (await res.text()).slice(0, 200000);
    const m =
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i) ||
      html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i);
    return m ? m[1] : null;
  } catch { return null; }
}

async function resolveGnewsImagem(feedImage, articleUrl) {
  if (feedImage && (await isValidImageUrl(feedImage))) return feedImage;
  const og = await tryOgImage(articleUrl);
  if (og && (await isValidImageUrl(og))) return og;
  return null;
}

export async function fetchGnews(config) {
  if (!config?.enabled) return [];
  const key = process.env.GNEWS_API_KEY;
  if (!key) {
    console.warn('[gnews] GNEWS_API_KEY ausente — pulando GNews.');
    return [];
  }
  const all = [];
  for (const q of config.queries || []) {
    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(q.q)}&lang=pt&country=br&max=${q.max || 5}&apikey=${key}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`[gnews] "${q.q}" HTTP ${res.status}`);
        continue;
      }
      const json = await res.json();
      const articles = json.articles || [];
      const imagens = await Promise.all(articles.map((a) => resolveGnewsImagem(a.image, a.url)));
      articles.forEach((a, i) => {
        all.push({
          titulo: a.title,
          descricao: a.description,
          corpo_original: a.content || a.description || '',
          url: a.url,
          imagem: imagens[i],
          data_publicacao: a.publishedAt,
          autor_original: a.source?.name,
          fonte: a.source?.name || 'GNews',
          fonte_url: a.source?.url || null,
          categoria_padrao: q.categoria_padrao,
          tags_hint: [],
        });
      });
    } catch (err) {
      console.warn(`[gnews] "${q.q}": ${err.message}`);
    }
  }
  return all;
}
