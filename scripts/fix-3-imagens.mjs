// Script one-shot: baixa imagens Unsplash temáticas para 3 notícias mais recentes
// e otimiza com sharp (mesmo pipeline do fetch-news.js).

import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import sharp from 'sharp';

const OUT_DIR = resolve('public/images/noticias');
mkdirSync(OUT_DIR, { recursive: true });

// Imagens originais das matérias na ESPN Brasil (extraídas via og:image).
const ALVOS = [
  {
    slug: 'igor-thiago-briga-com-haaland-pela-artilharia-da-premier-league',
    url: 'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0104%2Fr1596634_1296x729_16%2D9.jpg',
    descricao: 'Igor Thiago (Brentford) — ESPN',
  },
  {
    slug: 'hulk-pode-deixar-o-atletico-mg-e-retornar-ao-futebol-carioca',
    url: 'https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0427%2Fr1649823_1296x729_16%2D9.jpg',
    descricao: 'Hulk (Atlético-MG) — ESPN',
  },
  {
    slug: 'rockets-vencem-lakers-e-evitam-varrida-nos-playoffs-da-nba',
    url: 'https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0427%2Fr1649857_1296x729_16%2D9.jpg',
    descricao: 'Rockets x Lakers playoffs — ESPN',
  },
];

async function baixar(url) {
  const ac = new AbortController();
  const to = setTimeout(() => ac.abort(), 20000);
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; 3W-Entretenimento NewsBot/1.0; +https://3w-entretenimento.com)',
      Accept: 'image/webp,image/avif,image/png,image/jpeg,image/*,*/*;q=0.8',
    },
    signal: ac.signal,
    redirect: 'follow',
  });
  clearTimeout(to);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

for (const alvo of ALVOS) {
  process.stdout.write(`→ ${alvo.slug}\n   ${alvo.descricao}\n`);
  try {
    const buf = await baixar(alvo.url);
    const otimizada = await sharp(buf)
      .resize({ width: 1280, withoutEnlargement: true })
      .jpeg({ quality: 85, progressive: true, mozjpeg: true })
      .toBuffer();
    const destino = resolve(OUT_DIR, `${alvo.slug}.jpg`);
    writeFileSync(destino, otimizada);
    process.stdout.write(`   ✅ salvo (${(otimizada.length / 1024).toFixed(1)} KB)\n\n`);
  } catch (e) {
    process.stderr.write(`   ❌ falha: ${e.message}\n\n`);
    process.exitCode = 1;
  }
}
