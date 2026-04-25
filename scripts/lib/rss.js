// scripts/lib/rss.js — parser RSS minimo (sem dependencias externas)
// Quando o feed RSS nao traz imagem (caso ESPN Brasil), busca og:image
// no HTML do artigo automaticamente.

const UA = '3W-Entretenimento NewsBot/1.0 (+https://3w-entretenimento.com)';

function stripCdata(s = '') {
  return String(s)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/\s+/g, ' ')
    .trim();
}

function tag(xml, name) {
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, 'i'));
  return m ? stripCdata(m[1]) : '';
}

function attr(xml, name, attrName) {
  const m = xml.match(new RegExp(`<${name}[^>]*\\b${attrName}=["']([^"']+)["']`, 'i'));
  return m ? m[1] : '';
}

function extractImage(item) {
  let url = attr(item, 'enclosure', 'url');
  if (url) return url;
  url = attr(item, 'media:content', 'url') || attr(item, 'media:thumbnail', 'url');
  if (url) return url;
  const content = tag(item, 'content:encoded') || tag(item, 'description');
  const m = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

// Busca og:image no HTML do artigo quando o RSS nao trouxe imagem.
async function tryOgImage(url, timeoutMs = 5000) {
  if (!url) return null;
  try {
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), timeoutMs);
    const res = await fetch(url, {
      headers: { 'User-Agent': UA, 'Accept': 'text/html,*/*' },
      signal: ac.signal,
      redirect: 'follow',
    });
    clearTimeout(to);
    if (!res.ok) return null;
    const html = (await res.text()).slice(0, 200000);
    const m =
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i) ||
      html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

function parseRss(xml) {
  const items = [];
  const re = /<(item|entry)[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const raw = m[2];
    const link = tag(raw, 'link') || attr(raw, 'link', 'href') || tag(raw, 'guid');
    const pub = tag(raw, 'pubDate') || tag(raw, 'published') || tag(raw, 'updated');
    items.push({
      titulo: tag(raw, 'title'),
      descricao: tag(raw, 'description') || tag(raw, 'summary'),
      corpo_original: tag(raw, 'content:encoded') || tag(raw, 'description') || tag(raw, 'summary'),
      url: link,
      imagem: extractImage(raw),
      data_publicacao: pub || new Date().toISOString(),
      autor_original: tag(raw, 'dc:creator') || tag(raw, 'author'),
    });
  }
  return items;
}

export async function fetchRssFeed(source, timeoutMs = 12000) {
  try {
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), timeoutMs);
    const res = await fetch(source.url, {
      headers: { 'User-Agent': UA, 'Accept': 'application/rss+xml, application/xml, text/xml, */*' },
      signal: ac.signal,
    });
    clearTimeout(to);
    if (!res.ok) {
      console.warn(`[rss] ${source.nome}: HTTP ${res.status}`);
      return [];
    }
    const xml = await res.text();
    let items = parseRss(xml);

    // Para itens sem imagem, busca og:image em paralelo
    const semImagem = items.filter((it) => !it.imagem && it.url);
    if (semImagem.length > 0) {
      const ogResults = await Promise.all(semImagem.map((it) => tryOgImage(it.url)));
      semImagem.forEach((it, i) => { if (ogResults[i]) it.imagem = ogResults[i]; });
    }

    return items.map((it) => ({
      ...it,
      fonte: source.nome,
      fonte_url: source.url,
      categoria_padrao: source.categoria_padrao,
      tags_hint: source.tags_hint || [],
    }));
  } catch (err) {
    console.warn(`[rss] ${source.nome}: ${err.message}`);
    return [];
  }
}

export async function fetchAllRss(sources) {
  const out = await Promise.all(sources.map((s) => fetchRssFeed(s)));
  return out.flat();
}
