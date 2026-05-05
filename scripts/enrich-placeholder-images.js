#!/usr/bin/env node
/**
 * enrich-placeholder-images.js — Substitui placeholders por imagens reais.
 *
 * Diferente do repair-news-images.js (que trata "imagem aponta pra arquivo
 * que não existe"), este script trata "imagem aponta pro placeholder" —
 * notícias que não conseguiram baixar imagem na primeira tentativa.
 *
 * Estratégias por ordem (a primeira que funcionar vence):
 *   1. og:image:secure_url
 *   2. og:image
 *   3. twitter:image / twitter:image:src
 *   4. <link rel="image_src">
 *   5. JSON-LD schema.org "image"
 *   6. Primeira <img> grande dentro de <article> ou <main>
 *
 * Usa User-Agent de Chrome desktop. ESPN/CNN/Folha respondem normalmente
 * com esse UA (vários CDNs bloqueiam UA de bot).
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

let sharp;
try { sharp = (await import('sharp')).default; } catch { /* opcional */ }

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT       = join(__dirname, '..');
const MOCK_PATH  = join(ROOT, 'lib', 'mock-data.js');
const CONTENT    = join(ROOT, 'lib', 'content.json');
const IMAGES_DIR = join(ROOT, 'public', 'images', 'noticias');

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const args = process.argv.slice(2);
const DRY  = args.includes('--dry-run');
const SLUG = (args.find(a => a.startsWith('--slug=')) || '').split('=')[1] || null;

function log(emoji, msg) { console.log(`${emoji}  ${msg}`); }

async function fetchHtml(url, timeoutMs = 15000) {
  try {
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), timeoutMs);
    const res = await fetch(url, {
      headers: {
        'User-Agent': UA,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
        'Cache-Control': 'no-cache',
      },
      signal: ac.signal,
      redirect: 'follow',
    });
    clearTimeout(to);
    if (!res.ok) { log('⚠️', `HTTP ${res.status} em ${url.slice(0,80)}`); return null; }
    return await res.text();
  } catch (err) {
    log('⚠️', `fetch falhou: ${err.message}`);
    return null;
  }
}

function findImageInHtml(html) {
  if (!html) return null;
  const candidates = [
    /<meta[^>]+property=["']og:image:secure_url["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image:secure_url["']/i,
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i,
    /<meta[^>]+name=["']twitter:image:src["'][^>]+content=["']([^"']+)["']/i,
    /<link[^>]+rel=["']image_src["'][^>]+href=["']([^"']+)["']/i,
    /"image"\s*:\s*\{[^}]*"url"\s*:\s*"([^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/i,
    /"image"\s*:\s*"([^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/i,
  ];
  for (const re of candidates) {
    const m = html.match(re);
    if (m && m[1]) return m[1].replace(/&amp;/g, '&');
  }
  // Fallback: primeira img grande dentro do article/main
  const articleMatch = html.match(/<(article|main)[\s\S]*?<\/\1>/i);
  const scope = articleMatch ? articleMatch[0] : html;
  const imgs = [...scope.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*?(?:width=["'](\d+)["'])?/gi)];
  for (const m of imgs) {
    const w = m[2] ? parseInt(m[2], 10) : 0;
    const src = m[1];
    const lower = src.toLowerCase();
    if (lower.includes('icon') || lower.includes('logo') || lower.includes('avatar')) continue;
    if (w >= 600 || src.match(/\.(jpg|jpeg|png|webp)/i)) {
      return src.replace(/&amp;/g, '&');
    }
  }
  return null;
}

async function downloadImage(url, slug, timeoutMs = 20000) {
  if (!url || !url.startsWith('http')) return null;
  try {
    mkdirSync(IMAGES_DIR, { recursive: true });
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), timeoutMs);
    const res = await fetch(url, {
      headers: {
        'User-Agent': UA,
        'Accept': 'image/webp,image/avif,image/png,image/jpeg,image/*,*/*;q=0.8',
      },
      signal: ac.signal,
      redirect: 'follow',
    });
    clearTimeout(to);
    if (!res.ok) { log('⚠️', `HTTP ${res.status} baixando ${url.slice(0,80)}`); return null; }
    const ct = (res.headers.get('content-type') || '').toLowerCase();
    if (!ct.startsWith('image/')) { log('⚠️', `content-type ${ct} não é imagem`); return null; }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 1500) { log('⚠️', `arquivo muito pequeno (${buf.length}b)`); return null; }
    const out = join(IMAGES_DIR, `${slug}.jpg`);
    if (sharp) {
      await sharp(buf).resize(1280, null, { withoutEnlargement: true }).jpeg({ quality: 85, progressive: true, mozjpeg: true }).toFile(out);
    } else {
      writeFileSync(out, buf);
    }
    return `/images/noticias/${slug}.jpg`;
  } catch (err) {
    log('⚠️', `download falhou: ${err.message}`);
    return null;
  }
}

function patchMockData(slug, novaImagem) {
  const src = readFileSync(MOCK_PATH, 'utf-8');
  const slugEsc = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(slug:\\s*'${slugEsc}'[\\s\\S]{0,800}?imagem:\\s*')([^']*)(')`, 'g');
  const novo = src.replace(re, (_, a, _b, c) => `${a}${novaImagem}${c}`);
  if (novo !== src) writeFileSync(MOCK_PATH, novo, 'utf-8');
}

async function main() {
  console.log('\n🌟  3W — Enrich placeholder images');
  console.log('─'.repeat(55));
  if (DRY)  log('🧪', 'Dry run — nada será gravado.');
  if (SLUG) log('🎯', `Apenas slug: ${SLUG}`);

  const content = JSON.parse(readFileSync(CONTENT, 'utf-8'));
  const alvos = [];
  for (const bucket of ['noticias', 'esportes']) {
    for (const [slug, n] of Object.entries(content[bucket] || {})) {
      if (SLUG && slug !== SLUG) continue;
      if (n.imagem && (n.imagem.includes('placeholder') || n.imagem.includes('/api/og')) && n.fonte?.url) {
        alvos.push({ slug, bucket, fonte: n.fonte.url, n });
      }
    }
  }
  log('📋', `${alvos.length} notícia(s) com placeholder a enriquecer.`);
  if (!alvos.length) return;

  let ok = 0, falhou = 0;
  for (const a of alvos) {
    console.log(`\n→ ${a.slug} [${a.bucket}]`);
    log('🔎', a.fonte.slice(0, 90) + '…');
    const html = await fetchHtml(a.fonte);
    const img = findImageInHtml(html);
    if (!img) { log('❌', 'sem imagem na página'); falhou++; continue; }
    log('🖼️ ', img.slice(0, 90) + '…');
    if (DRY) { ok++; continue; }
    const local = await downloadImage(img, a.slug);
    if (local) {
      content[a.bucket][a.slug].imagem = local;
      patchMockData(a.slug, local);
      log('✅', `salvo em ${local}`);
      ok++;
    } else {
      falhou++;
    }
    await new Promise(r => setTimeout(r, 500));
  }
  if (!DRY) writeFileSync(CONTENT, JSON.stringify(content, null, 2), 'utf-8');
  console.log('');
  log('🎉', `Sucesso: ${ok} | falhou: ${falhou}`);
}
main().catch(e => { console.error('❌', e.message); process.exit(1); });
