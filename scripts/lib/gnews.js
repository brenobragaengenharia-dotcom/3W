// scripts/lib/gnews.js — cliente GNews (gnews.io). Pula silenciosamente se GNEWS_API_KEY ausente.
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
      for (const a of json.articles || []) {
        all.push({
          titulo: a.title,
          descricao: a.description,
          corpo_original: a.content || a.description || '',
          url: a.url,
          imagem: a.image,
          data_publicacao: a.publishedAt,
          autor_original: a.source?.name,
          fonte: a.source?.name || 'GNews',
          fonte_url: a.source?.url || null,
          categoria_padrao: q.categoria_padrao,
          tags_hint: [],
        });
      }
    } catch (err) {
      console.warn(`[gnews] "${q.q}": ${err.message}`);
    }
  }
  return all;
}
