#!/usr/bin/env node
/**
 * fetch-news.js — Ingestão automática diária de notícias para o 3W Entretenimento
 *
 * O que faz:
 *   1. Busca itens em RSS (config/news-sources.json) + GNews (opcional)
 *   2. Dedupe por URL normalizada, filtra idade/tamanho
 *   3. Balanceia por categoria e limita por rodada
 *   4. Para cada selecionada: pede ao Claude para reescrever no tom do portal
 *      e devolver { entrada_mockdata, editorial }
 *   5. Insere a entrada no array apropriado em `lib/mock-data.js`:
 *        - categoria Futebol     → NOTICIAS_FUTEBOL
 *        - categoria NBA         → NOTICIAS_NBA
 *        - categoria Fórmula 1   → NOTICIAS_F1
 *        - demais                → NOTICIAS
 *   6. Insere o corpo editorial em `lib/content.json`:
 *        - esportes (Futebol/NBA/F1)   → content.esportes[slug]
 *        - demais                       → content.noticias[slug]
 *   7. Opcionalmente poda os arrays mantendo só as N mais recentes.
 *
 * Uso:
 *   node scripts/fetch-news.js                 → roda completo
 *   node scripts/fetch-news.js --dry-run       → só lista o que faria
 *   node scripts/fetch-news.js --skip-rewrite  → pula Claude (debug)
 *   node scripts/fetch-news.js --limit=5       → override do limite diário
 *
 * Pré-requisitos:
 *   ANTHROPIC_API_KEY no .env.local (obrigatório, exceto com --skip-rewrite)
 *   GNEWS_API_KEY     no .env.local (opcional — só RSS funciona sem)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { fetchAllRss } from './lib/rss.js';
import { fetchGnews } from './lib/gnews.js';
import { rewriteNoticia } from './lib/news-rewrite.js';
import { safeImage } from '../lib/safe-image.js';

// sharp é opcional — se não estiver instalado, salva o arquivo bruto sem processamento
let sharp;
try { sharp = (await import('sharp')).default; } catch {/* opcional */}

// ─── Anti-mismatch título vs HTML ───────────────────────────────────────────
async function fetchHtmlTitle(url, timeoutMs = 5000) {
  try {
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), timeoutMs);
    const res = await fetch(url, {
      headers: { 'User-Agent': '3W-Entretenimento NewsBot/1.0' },
      signal: ac.signal,
      redirect: 'follow',
    });
    clearTimeout(to);
    if (!res.ok) return null;
    const html = await res.text();
    // Prioriza og:title, depois <title>
    const og = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i)
            || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:title["']/i);
    if (og) return og[1].trim();
    const t = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    return t ? t[1].replace(/\s+/g,' ').trim() : null;
  } catch { return null; }
}

function tokenize(s) {
  return new Set(
    String(s || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length >= 4)
  );
}

function overlapScore(a, b) {
  const A = tokenize(a), B = tokenize(b);
  if (A.size === 0 || B.size === 0) return 0;
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  return inter / Math.min(A.size, B.size);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const MOCK_DATA_PATH = join(ROOT, 'lib', 'mock-data.js');
const CONTENT_PATH   = join(ROOT, 'lib', 'content.json');
const CONFIG_PATH    = join(ROOT, 'config', 'news-sources.json');
const IMAGES_DIR     = join(ROOT, 'public', 'images', 'noticias');

// ─── Download e otimização de imagem ──────────────────────────────────────────
// Baixa a imagem externa, otimiza pra JPG 85%, salva em /public/images/noticias/[slug].jpg.
// Retorna o caminho relativo (`/images/noticias/[slug].jpg`) ou null se falhar.
async function downloadImage(externalUrl, slug, timeoutMs = 12000) {
  if (!externalUrl) return null;
  // Já é local — não precisa baixar
  if (externalUrl.startsWith('/')) return externalUrl;

  try {
    mkdirSync(IMAGES_DIR, { recursive: true });

    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), timeoutMs);
    const res = await fetch(externalUrl, {
      headers: {
        // Alguns CDNs (Wikimedia, ESPN) bloqueiam User-Agent vazio. Pretendo de browser.
        'User-Agent': 'Mozilla/5.0 (compatible; 3W-Entretenimento NewsBot/1.0; +https://3w-entretenimento.com)',
        'Accept': 'image/webp,image/avif,image/png,image/jpeg,image/*,*/*;q=0.8',
      },
      signal: ac.signal,
      redirect: 'follow',
    });
    clearTimeout(to);

    if (!res.ok) {
      console.warn(`  ⚠️  [img] HTTP ${res.status} para ${externalUrl.slice(0, 80)}`);
      return null;
    }
    const contentType = (res.headers.get('content-type') || '').toLowerCase();
    if (!contentType.startsWith('image/')) {
      console.warn(`  ⚠️  [img] content-type ${contentType} não é imagem`);
      return null;
    }

    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 1000) {
      console.warn(`  ⚠️  [img] arquivo muito pequeno (${buf.length} bytes) — provavelmente placeholder`);
      return null;
    }

    const outPath = join(IMAGES_DIR, `${slug}.jpg`);

    if (sharp) {
      // Otimiza: max 1280px largura, JPG 85%, progressivo
      await sharp(buf)
        .resize(1280, null, { withoutEnlargement: true })
        .jpeg({ quality: 85, progressive: true, mozjpeg: true })
        .toFile(outPath);
    } else {
      // Fallback: salva bruto (apenas se for JPG/PNG)
      writeFileSync(outPath, buf);
    }

    return `/images/noticias/${slug}.jpg`;
  } catch (err) {
    console.warn(`  ⚠️  [img] falha download: ${err.message}`);
    return null;
  }
}

// ─── Env (mesmo loader do update-content.js) ──────────────────────────────────
function loadEnv() {
  const envPath = join(ROOT, '.env.local');
  if (!existsSync(envPath)) return; // em CI as envs já vêm do workflow
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const [key, ...rest] = line.split('=');
    if (key?.trim() && !key.startsWith('#')) {
      process.env[key.trim()] = rest.join('=').trim();
    }
  }
}

function log(emoji, msg) { console.log(`${emoji}  ${msg}`); }

// ─── Utils ────────────────────────────────────────────────────────────────────
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

// ─── Lê um array exportado do mock-data.js (mesma técnica do update-content.js) ──
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

// ─── Serializa entrada no formato usado no mock-data.js ───────────────────────
function formatEntry(entry) {
  const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `  {
    id: ${entry.id}, slug: '${esc(entry.slug)}', titulo: '${esc(entry.titulo)}',
    descricao: '${esc(entry.descricao)}',
    categoria: '${esc(entry.categoria)}', autor: '${esc(entry.autor)}', data: '${esc(entry.data)}',
    imagem: '${esc(entry.imagem)}', tempo_leitura: ${entry.tempo_leitura},
  }`;
}

// ─── Reescreve um array dentro de mock-data.js preservando o resto ────────────
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

// ─── Atribui categoria a um array ───────────────────────────────────────────
function arrayKeyForCategory(categoria) {
  if (categoria === 'Futebol')   return { mock: 'NOTICIAS_FUTEBOL', content: 'esportes' };
  if (categoria === 'NBA')       return { mock: 'NOTICIAS_NBA',     content: 'esportes' };
  if (categoria === 'Fórmula 1') return { mock: 'NOTICIAS_F1',      content: 'esportes' };
  if (categoria === 'Esportes')  return { mock: 'NOTICIAS',         content: 'noticias' };
  return { mock: 'NOTICIAS', content: 'noticias' };
}

// ─── Main ─────────────────────────────────────────────────────────────────────
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

  // Filtra os que já estão publicados (pelos slugs atuais nos arrays)
  const slugsExistentes = new Set();
  for (const arr of ['NOTICIAS', 'NOTICIAS_FUTEBOL', 'NOTICIAS_NBA', 'NOTICIAS_F1']) {
    for (const n of extractArrayFromMockData(arr)) slugsExistentes.add(n.slug);
  }
  // Também filtra por URL guardada em content.json (para não repetir quando o slug mudou)
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

  // Descobre próximo ID: maior ID entre todos os arrays + 1
  const todosArrays = ['NOTICIAS', 'NOTICIAS_FUTEBOL', 'NOTICIAS_NBA', 'NOTICIAS_F1']
    .flatMap(extractArrayFromMockData);
  let nextId = (todosArrays.reduce((m, n) => Math.max(m, n.id || 0), 100)) + 1;

  // Dedupe de slug contra os existentes
  function uniqSlug(base) {
    let s = base, i = 2;
    while (slugsExistentes.has(s)) { s = `${base}-${i++}`; }
    slugsExistentes.add(s);
    return s;
  }

  // Agrupa updates por array para só reescrever o mock-data no fim
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
          .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
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
          categoria: raw.categoria_padrao || 'Cinema',
          data: isoDate,
          entrada_mockdata: {
            slug,
            titulo: raw.titulo,
            descricao: raw.descricao || '',
            categoria: raw.categoria_padrao || 'Cinema',
            autor: 'Redação 3W',
            data: isoDate,
            imagem: safeImage(raw.imagem),
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

      // Anti-mismatch: confirma que o título reescrito ainda condiz com o HTML real da fonte
      if (raw.url && !flags.skipRewrite) {
        const htmlTitle = await fetchHtmlTitle(raw.url);
        if (htmlTitle) {
          const score = overlapScore(result.entrada_mockdata.titulo, htmlTitle);
          if (score < 0.25) {
            console.warn(`  ⚠️  [skip-mismatch] score=${score.toFixed(2)}  rewrite="${result.entrada_mockdata.titulo.slice(0,60)}"  htmlTitle="${htmlTitle.slice(0,60)}"`);
            continue;
          }
        }
      }


      const destino = arrayKeyForCategory(result.categoria);
      const entrada = { id: nextId++, ...result.entrada_mockdata };

      // Tenta baixar imagem para hosting local (resiliente contra CDNs caírem)
      const imagemLocal = await downloadImage(entrada.imagem, entrada.slug);
      if (imagemLocal) {
        entrada.imagem = imagemLocal;
        log('🖼️ ', `imagem salva em ${imagemLocal}`);
      } // senão mantém URL externa como fallback

      updates[destino.mock].unshift(entrada); // inserir no topo (mais recente primeiro)

      // Poda o array se ficar muito grande (evita mock-data.js crescer sem fim)
      const limArray = config.limites?.max_por_array ?? 40;
      if (updates[destino.mock].length > limArray) {
        updates[destino.mock] = updates[destino.mock].slice(0, limArray);
      }

      // Content
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

      // Salva content.json incrementalmente (resiliência contra crash no meio)
      writeFileSync(CONTENT_PATH, JSON.stringify(content, null, 2), 'utf-8');

      // Rate limit anti-429
      await new Promise((r) => setTimeout(r, 500));

    } catch (err) {
      console.warn(`  ❌  ${err.message}`);
    }
  }

  // Persiste mock-data.js no fim (uma única reescrita por array)
  if (criadas > 0) {
    for (const arr of Object.keys(updates)) {
      // Só reescreve se houve alguma mudança
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
