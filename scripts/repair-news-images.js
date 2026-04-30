#!/usr/bin/env node
/**
 * repair-news-images.js — Recupera imagens órfãs das notícias.
 *
 * Problema que isso resolve:
 * Quando uma notícia é adicionada com `imagem: '/images/noticias/X.jpg'` no
 * mock-data.js mas o arquivo .jpg não existe em public/images/noticias/, o
 * site mostra a notícia sem imagem (404). Isso aconteceu porque o workflow
 * antigo só commitava lib/mock-data.js e lib/content.json, deixando os jpgs
 * baixados pelo fetch-news.js para trás.
 *
 * O que faz:
 *   1. Lê content.json e descobre todas as notícias publicadas
 *   2. Para cada uma cuja imagem aponta pra /images/noticias/X.jpg local,
 *      verifica se o arquivo existe em public/images/noticias/
 *   3. Se NÃO existir, tenta:
 *        a) baixar a imagem original guardada em content.json antes do hosting local
 *        b) ou (fallback) buscar og:image da fonte original (fonte.url)
 *        c) ou (último recurso) deixar placeholder categórico
 *   4. Salva a imagem otimizada em public/images/noticias/{slug}.jpg
 *   5. Atualiza mock-data.js apontando pra placeholder caso nada funcione.
 *
 * Uso:
 *   node scripts/repair-news-images.js              → repara tudo que estiver quebrado
 *   node scripts/repair-news-images.js --dry-run    → só lista o que repararia
 *   node scripts/repair-news-images.js --slug=foo   → tenta reparar só esse slug
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { resolveOgImage } from './lib/og-image.js';
import { safeImage, PLACEHOLDER } from '../lib/safe-image.js';

let sharp;
try { sharp = (await import('sharp')).default; } catch { /* opcional */ }

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT       = join(__dirname, '..');
const MOCK_PATH  = join(ROOT, 'lib', 'mock-data.js');
const CONTENT    = join(ROOT, 'lib', 'content.json');
const IMAGES_DIR = join(ROOT, 'public', 'images', 'noticias');

const args = process.argv.slice(2);
const DRY    = args.includes('--dry-run');
const SLUG   = (args.find(a => a.startsWith('--slug=')) || '').split('=')[1] || null;

function log(emoji, msg) { console.log(`${emoji}  ${msg}`); }

async function downloadImage(url, slug, timeoutMs = 15000) {
  if (!url || !url.startsWith('http')) return null;
  try {
    mkdirSync(IMAGES_DIR, { recursive: true });
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), timeoutMs);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; 3W-Entretenimento NewsBot/1.0)',
        'Accept': 'image/webp,image/avif,image/png,image/jpeg,image/*,*/*;q=0.8',
      },
      signal: ac.signal,
      redirect: 'follow',
    });
    clearTimeout(to);
    if (!res.ok) { log('⚠️', `HTTP ${res.status} em ${url.slice(0, 80)}`); return null; }
    const ct = (res.headers.get('content-type') || '').toLowerCase();
    if (!ct.startsWith('image/')) { log('⚠️', `content-type ${ct} não é imagem`); return null; }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 1000) { log('⚠️', `arquivo muito pequeno (${buf.length}b)`); return null; }
    const out = join(IMAGES_DIR, `${slug}.jpg`);
    if (sharp) {
      await sharp(buf)
        .resize(1280, null, { withoutEnlargement: true })
        .jpeg({ quality: 85, progressive: true, mozjpeg: true })
        .toFile(out);
    } else {
      writeFileSync(out, buf);
    }
    return `/images/noticias/${slug}.jpg`;
  } catch (err) {
    log('⚠️', `falha download: ${err.message}`);
    return null;
  }
}

function listAllNews(content) {
  const out = [];
  for (const k of ['noticias', 'esportes']) {
    for (const [slug, n] of Object.entries(content[k] || {})) {
      out.push({ slug, bucket: k, ...n });
    }
  }
  return out;
}

function isLocalMissing(imagem) {
  if (!imagem) return true;
  if (!imagem.startsWith('/images/noticias/')) return false;
  const file = join(ROOT, 'public', imagem);
  return !existsSync(file);
}

function patchMockDataImage(slug, novaImagem) {
  const src = readFileSync(MOCK_PATH, 'utf-8');
  // Match generoso: aceita aspas simples, quebras de linha,
  // procura pelo bloco do slug e substitui o campo imagem dele.
  const slugEsc = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(slug:\\s*'${slugEsc}'[\\s\\S]{0,800}?imagem:\\s*')([^']*)(')`, 'g');
  if (!re.test(src)) {
    return false;
  }
  const novo = src.replace(re, (_, a, _b, c) => `${a}${novaImagem}${c}`);
  if (novo === src) return false;
  writeFileSync(MOCK_PATH, novo, 'utf-8');
  return true;
}

function patchContentImage(content, bucket, slug, novaImagem) {
  if (!content[bucket]?.[slug]) return;
  content[bucket][slug].imagem = novaImagem;
}

async function main() {
  console.log('\n🛠️   3W — Reparo de imagens órfãs');
  console.log('─'.repeat(55));
  if (DRY)  log('🧪', 'Dry run — nada será gravado.');
  if (SLUG) log('🎯', `Apenas slug: ${SLUG}`);

  if (!existsSync(CONTENT)) { log('❌', 'content.json não existe.'); process.exit(1); }
  const content = JSON.parse(readFileSync(CONTENT, 'utf-8'));

  const todas = listAllNews(content).filter(n => !SLUG || n.slug === SLUG);
  const orfas = todas.filter(n => isLocalMissing(n.imagem));

  log('📋', `Notícias totais: ${todas.length} | órfãs (sem .jpg local): ${orfas.length}`);
  if (orfas.length === 0) { log('✅', 'Nada a reparar.'); return; }

  let reparadas = 0, fallback = 0;

  for (const n of orfas) {
    console.log(`\n→ ${n.slug}  [${n.bucket}]`);

    // 1ª tentativa: og:image da fonte original (mais confiável)
    let imagemRemota = null;
    if (n.fonte?.url) {
      log('🔎', `og:image em ${n.fonte.url.slice(0, 80)}…`);
      try { imagemRemota = await resolveOgImage(n.fonte.url); } catch (_) {}
    }

    // 2ª tentativa: campo image_original (caso fetch-news guarde a URL bruta antes do hosting)
    if (!imagemRemota && n.imagem_original) imagemRemota = n.imagem_original;

    if (!imagemRemota) {
      log('🪂', 'sem og:image → cai pra placeholder categórico');
      const placeholder = safeImage(null, { categoria: n.categoria, slug: n.slug, titulo: n.titulo }) || PLACEHOLDER;
      if (!DRY) {
        patchContentImage(content, n.bucket, n.slug, placeholder);
        patchMockDataImage(n.slug, placeholder);
      }
      fallback++;
      continue;
    }

    if (DRY) {
      log('🖼️ ', `(dry) baixaria: ${imagemRemota.slice(0, 100)}`);
      continue;
    }

    const local = await downloadImage(imagemRemota, n.slug);
    if (local) {
      patchContentImage(content, n.bucket, n.slug, local);
      patchMockDataImage(n.slug, local);
      log('✅', `salvo em ${local}`);
      reparadas++;
    } else {
      const placeholder = safeImage(null, { categoria: n.categoria, slug: n.slug, titulo: n.titulo }) || PLACEHOLDER;
      patchContentImage(content, n.bucket, n.slug, placeholder);
      patchMockDataImage(n.slug, placeholder);
      log('🪂', `download falhou → ${placeholder}`);
      fallback++;
    }

    // rate-limit anti-429
    await new Promise(r => setTimeout(r, 400));
  }

  if (!DRY) {
    writeFileSync(CONTENT, JSON.stringify(content, null, 2), 'utf-8');
  }

  console.log('');
  log('🎉', `Reparadas com imagem real: ${reparadas} | placeholders aplicados: ${fallback}`);
}

main().catch((e) => { console.error('❌  Erro fatal:', e.message); process.exit(1); });
