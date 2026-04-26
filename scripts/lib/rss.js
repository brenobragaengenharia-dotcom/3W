// scripts/lib/rss.js — parser RSS minimo (sem dependencias externas)
// Estrategias de imagem em ordem:
//   1. Tags do feed (enclosure / media:content / <img> em content)
//   2. og:image / twitter:image do HTML do artigo
// Cada candidata e validada com HEAD: so aceita 200 + content-type image/*

const UA = '3W-Entretenimento NewsBot/1.0 (+https://3w-entretenimento.com)';

function stripCdata(s = '') {
  return String(s)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/\s+/g, ' ').trim();
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

// og:image fallback — abre HTML do artigo e extrai meta tag.
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

// Etapa 2: validacao HEAD — so aceita URL que retorna 200 + content-type image/*.
// Alguns CDNs nao suportam HEAD; faz GET com Range curto como fallback.
export async function isValidImageUrl(url, timeoutMs = 4000) {
  if (!url) return false;
  try {
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), timeoutMs);
    let res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': UA }, signal: ac.signal, redirect: 'follow' });
    if (!res.ok) {
      res = await fetch(url, { method: 'GET', headers: { 'User-Agent': UA, 'Range': 'bytes=0-1' }, signal: ac.signal, redirect: 'follow' });
    }
    clearTimeout(to);
    if (!res.ok) return false;
    const ct = (res.headers.get('content-type') || '').toLowerCase();
    return ct.startsWith('image/');
  } catch { return false; }
}

async function resolveImagem(rawXml, articleUrl) {
  const fromFeed = extractImage(rawXml);
  if (fromFeed && (await isValidImageUrl(fromFeed))) return fromFeed;
  const og = await tryOgImage(articleUrl);
  if (og && (await isValidImageUrl(og))) return og;
  return null;
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
      _raw: raw,
      titulo: tag(raw, 'title'),
      descricao: tag(raw, 'description') || tag(raw, 'summary'),
      corpo_original: tag(raw, 'content:encoded') || tag(raw, 'description') || tag(raw, 'summary'),
      url: link,
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
    const items = parseRss(xml);

    // Resolve imagem para cada item em paralelo (extracao + og:image + validacao HEAD)
    const imagens = await Promise.all(items.map((it) => resolveImagem(it._raw, it.url)));
    items.forEach((it, i) => { it.imagem = imagens[i]; delete it._raw; });

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
