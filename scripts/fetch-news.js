#!/usr/bin/env node
/**
 * fetch-news.js — Ingestão automática diária de notícias para o 3W Entretenimento
 *
 * Uso:
 *   node scripts/fetch-news.js                 → roda completo
 *   node scripts/fetch-news.js --dry-run       → só lista o que faria
 *   node scripts/fetch-news.js --skip-rewrite  → pula Claude (debug)
 *   node scripts/fetch-news.js --limit=5       → override do limite diário
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { fetchAllRss } from './lib/rss.js';
import { fetchGnews } from './lib/gnews.js';
import { rewriteNoticia } from './lib/news-rewrite.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const MOCK_DATA_PATH = join(ROOT, 'lib', 'mock-data.js');
const CONTENT_PATH   = join(ROOT, 'lib', 'content.json');
const CONFIG_PATH    = join(ROOT, 'config', 'news-sources.json');

function loadEnv() {
  const envPath = join(ROOT, '.env.local');
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const [key, ...rest] = line.split('=');
    if (key?.trim() && !key.startsWith('#')) {
      process.env[key.trim()] = rest.join('=').trim();
    }
  }
}

function log(emoji, msg) { console.log(`${emoji}  ${msg}`); }

function normalizeUrl(u) {
  if (!u) return '';
  try {
    const url = new URL(u);
    ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid','gclid']
      .forEach((p) => url.searchParams.delete(p));
    url.hash = '';
    return url.toString().replace(/\/$/, '');
  } catch { return u; }
}

function dedupeByUrl(items) {
  const seen = new Map();
  for (const it of items) {
    const k = normalizeUrl(it.url);
    if (!k) continue;
    if (!seen.has(k)) seen.set(k, it);
  }
  return [...seen.values()];
}

function byAge(items, horas) {
  if (!horas) return items;
  const cutoff = Date.now() - horas * 3600 * 1000;
  return items.filter((it) => {
    const t = Date.parse(it.data_publicacao);
    return isNaN(t) ? true : t >= cutoff;
  });
}

function byMinBody(items, min) {
  if (!min) return items;
  return items.filter((it) => {
    const txt = `${it.descricao || ''} ${it.corpo_original || ''}`.trim();
    return txt.split(/\s+/).length >= min;
  });
}

function balanceByCategory(items, maxPorCat, maxTotal) {
  const sorted = [...items].sort((a, b) => Date.parse(b.data_publicacao) - Date.parse(a.data_publicacao));
  const counts = new Map();
  const out = [];
  for (const it of sorted) {
    const cat = it.categoria_padrao || 'Geral';
    const c = counts.get(cat) || 0;
    if (maxPorCat && c >= maxPorCat) continue;
    out.push(it);
    counts.set(cat, c + 1);
    if (maxTotal && out.length >= maxTotal) break;
  }
  return out;
}

function extractArrayFromMockData(varName) {
  const src = readFileSync(MOCK_DATA_PATH, 'utf-8');
  const strConsts = [];
  for (const m of src.matchAll(/^export const (\w+)\s*=\s*'([^']*?)';/gm)) {
    strConsts.push(`const ${m[1]} = '${m[2]}';`);
  }
  const re = new RegExp(`export const ${varName}\\s*=\\s*(\\[[\\s\\S]*?\\]);`);
  const match = src.match(re);
  if (!match) return [];
  // eslint-disable-next-line no-eval
  return eval(`${strConsts.join('\n')}\n${match[1]}`);
}

function formatEntry(entry) {
  const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `  {
    id: ${entry.id}, slug: '${esc(entry.slug)}', titulo: '${esc(entry.titulo)}',
    descricao: '${esc(entry.descricao)}',
    categoria: '${esc(entry.categoria)}', autor: '${esc(entry.autor)}', data: '${esc(entry.data)}',
    imagem: '${esc(entry.imagem)}', tempo_leitura: ${entry.tempo_leitura},
  }`;
}

function updateMockDataArray(varName, novoArray) {
  const src = readFileSync(MOCK_DATA_PATH, 'utf-8');
  const linhas = novoArray.map(formatEntry);
  const blocoNovo = `export const ${varName} = [\n${linhas.join(',\n')},\n];`;
  const re = new RegExp(`export const ${varName}\\s*=\\s*\\[[\\s\\S]*?\\];`);
  if (!re.test(src)) {
    throw new Error(`Bloco ${varName} não encontrado em mock-data.js`);
  }
  const novoSrc = src.replace(re, blocoNovo);
  writeFileSync(MOCK_DATA_PATH, novoSrc, 'utf-8');
}

function arrayKeyForCategory(categoria) {
  if (categoria === 'Futebol')   return { mock: 'NOTICIAS_FUTEBOL', content: 'esportes' };
  if (categoria === 'NBA')       return { mock: 'NOTICIAS_NBA',     content: 'esportes' };
  if (categoria === 'Fórmula 1') return { mock: 'NOTICIAS_F1',      content: 'esportes' };
  return { mock: 'NOTICIAS', content: 'noticias' };
}

async function main() {
  loadEnv();

  const args = process.argv.slice(2);
  const flags = {
    dryRun: args.includes('--dry-run'),
    skipRewrite: args.includes('--skip-rewrite'),
    limit: (() => {
      const a = args.find((x) => x.startsWith('--limit='));
      return a ? parseInt(a.split('=')[1], 10) : null;
    })(),
  };

  console.log('\n📰  3W — Fetch News');
  console.log('─'.repeat(55));
  if (flags.dryRun)      log('🧪', 'Dry run — nada será escrito.');
  if (flags.skipRewrite) log('⏩', 'Skip rewrite — não chama Claude.');
  console.log('');

  const config = JSON.parse(readFileSync(CONFIG_PATH, 'utf-8'));

  log('🔎', 'Buscando RSS + GNews...');
  const [rss, gnews] = await Promise.all([
    fetchAllRss(config.rss || []),
    fetchGnews(config.gnews || config.newsapi),
  ]);
  log('📥', `rss=${rss.length}  gnews=${gnews.length}`);

  let itens = dedupeByUrl([...rss, ...gnews]);
  log('♻️ ', `após dedupe: ${itens.length}`);

  const slugsExistentes = new Set();
  for (const arr of ['NOTICIAS', 'NOTICIAS_FUTEBOL', 'NOTICIAS_NBA', 'NOTICIAS_F1']) {
    for (const n of extractArrayFromMockData(arr)) slugsExistentes.add(n.slug);
  }
  let content = { filmes: {}, series: {}, comics: {}, noticias: {}, esportes: {} };
  if (existsSync(CONTENT_PATH)) {
    content = { ...content, ...JSON.parse(readFileSync(CONTENT_PATH, 'utf-8')) };
  }
  const urlsPublicadas = new Set();
  for (const k of ['noticias', 'esportes']) {
    for (const slug of Object.keys(content[k] || {})) {
      const url = content[k][slug]?.fonte?.url;
      if (url) urlsPublicadas.add(normalizeUrl(url));
    }
  }
  itens = itens.filter((it) => !urlsPublicadas.has(normalizeUrl(it.url)));
  log('🆕', `ainda não publicadas: ${itens.length}`);

  itens = byAge(itens, config.limites?.idade_maxima_horas);
  itens = byMinBody(itens, config.limites?.min_palavras_corpo_original);
  log('🧹', `após filtros idade/corpo: ${itens.length}`);

  const lim = flags.limit ?? config.limites?.max_noticias_por_rodada ?? 8;
  const selecionadas = balanceByCategory(itens, config.limites?.max_por_categoria ?? 3, lim);
  log('🎯', `selecionadas: ${selecionadas.length}`);

  if (flags.dryRun) {
    console.log('');
    selecionadas.forEach((it, i) => {
      console.log(`  ${String(i+1).padStart(2)}. [${it.categoria_padrao}] ${it.titulo.slice(0, 70)}`);
      console.log(`      ← ${it.fonte}`);
    });
    console.log('');
    return;
  }

  const todosArrays = ['NOTICIAS', 'NOTICIAS_FUTEBOL', 'NOTICIAS_NBA', 'NOTICIAS_F1']
    .flatMap(extractArrayFromMockData);
  let nextId = (todosArrays.reduce((m, n) => Math.max(m, n.id || 0), 100)) + 1;

  function uniqSlug(base) {
    let s = base, i = 2;
    while (slugsExistentes.has(s)) { s = `${base}-${i++}`; }
    slugsExistentes.add(s);
    return s;
  }

  const updates = { NOTICIAS: [], NOTICIAS_FUTEBOL: [], NOTICIAS_NBA: [], NOTICIAS_F1: [] };
  for (const arr of Object.keys(updates)) {
    updates[arr] = extractArrayFromMockData(arr);
  }

  let criadas = 0;
  for (const raw of selecionadas) {
    try {
      log('✍️ ', `Reescrevendo: ${raw.titulo.slice(0, 60)}...`);

      let result;
      if (flags.skipRewrite) {
        const slugBase = raw.titulo
          .toLowerCase()
          .normalize('NFD').replace(/[̀-ͯ]/g,'')
          .replace(/[^\w\s-]/g,'').trim()
          .replace(/\s+/g,'-').replace(/-+/g,'-')
          .slice(0,60)
          .replace(/^-+|-+$/g,'');
        const slug = uniqSlug(slugBase || `noticia-${nextId}`);
        const isoDate = (() => {
          const t = new Date(raw.data_publicacao);
          return isNaN(t.getTime()) ? new Date().toISOString().slice(0,10) : t.toISOString().slice(0,10);
        })();
        result = {
          slug,
          categoria: raw.categoria_padrao || 'Cultura Pop',
          data: isoDate,
          entrada_mockdata: {
            slug,
            titulo: raw.titulo,
            descricao: raw.descricao || '',
            categoria: raw.categoria_padrao || 'Cultura Pop',
            autor: 'Redação 3W',
            data: isoDate,
            imagem: raw.imagem || '/images/noticias/placeholder.jpg',
            tempo_leitura: 4,
          },
          editorial: {
            manchete: raw.titulo,
            paragrafos: [raw.descricao || raw.corpo_original || ''],
            frase_destaque: '',
            conclusao: '',
            fonte: { nome: raw.fonte, url: raw.url },
          },
        };
      } else {
        result = await rewriteNoticia(raw);
        result.slug = uniqSlug(result.slug);
        result.entrada_mockdata.slug = result.slug;
      }

      const destino = arrayKeyForCategory(result.categoria);
      const entrada = { id: nextId++, ...result.entrada_mockdata };
      updates[destino.mock].unshift(entrada);

      const limArray = config.limites?.max_por_array ?? 40;
      if (updates[destino.mock].length > limArray) {
        updates[destino.mock] = updates[destino.mock].slice(0, limArray);
      }

      content[destino.content] ||= {};
      content[destino.content][entrada.slug] = {
        titulo: entrada.titulo,
        descricao: entrada.descricao,
        categoria: entrada.categoria,
        autor: entrada.autor,
        data: entrada.data,
        imagem: entrada.imagem,
        tempo_leitura: entrada.tempo_leitura,
        ...result.editorial,
        gerado_em: new Date().toISOString(),
      };

      criadas++;
      log('✅', `${entrada.categoria} → ${entrada.slug}`);

      writeFileSync(CONTENT_PATH, JSON.stringify(content, null, 2), 'utf-8');

      await new Promise((r) => setTimeout(r, 500));

    } catch (err) {
      console.warn(`  ❌  ${err.message}`);
    }
  }

  if (criadas > 0) {
    for (const arr of Object.keys(updates)) {
      const atual = extractArrayFromMockData(arr);
      if (JSON.stringify(atual) !== JSON.stringify(updates[arr])) {
        updateMockDataArray(arr, updates[arr]);
        log('📝', `mock-data.js: ${arr} reescrito (${updates[arr].length} itens).`);
      }
    }
  }

  console.log('');
  log('🎉', `${criadas} notícia(s) adicionada(s) ao portal.`);
}

main().catch((err) => {
  console.error('\n❌  Erro fatal:', err.message);
  process.exit(1);
});
