// scripts/lib/rss.js — parser RSS mínimo (sem dependências externas)
// Usa DOMParser nativo do Node 22+ via @xmldom/xmldom? Não — aqui regex direto.
// Trade-off: não é um parser XML "de verdade", mas cobre RSS 2.0 e Atom simples
// que é o que todos esses portais usam. Se algum feed quebrar, substituir por rss-parser.

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
  // 1) enclosure
  let url = attr(item, 'enclosure', 'url');
  if (url) return url;
  // 2) media:content / media:thumbnail
  url = attr(item, 'media:content', 'url') || attr(item, 'media:thumbnail', 'url');
  if (url) return url;
  // 3) primeiro <img src=""> dentro do content:encoded ou description
  const content = tag(item, 'content:encoded') || tag(item, 'description');
  const m = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

function parseRss(xml) {
  const items = [];
  // RSS 2.0: <item>...</item>    Atom: <entry>...</entry>
  const re = /<(item|entry)[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const raw = m[2];
    const link =
      tag(raw, 'link') ||
      attr(raw, 'link', 'href') ||
      tag(raw, 'guid');
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
    const items = parseRss(xml);
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
