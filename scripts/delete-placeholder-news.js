#!/usr/bin/env node
/**
 * delete-placeholder-news.js — Remove notícias que não conseguiram imagem real.
 *
 * Política: o site nunca deve mostrar placeholder. Se o pipeline
 * (fetch-news → repair-news-images → enrich-placeholder-images) não
 * conseguiu uma imagem real para a notícia, a notícia é removida em
 * vez de aparecer com o logo "3W Entretenimento" como hero.
 *
 * Roda como último step do workflow diário, depois do enrich.
 *
 * Uso:
 *   node scripts/delete-placeholder-news.js              → remove
 *   node scripts/delete-placeholder-news.js --dry-run    → só lista
 *
 * Critério de "ainda em placeholder":
 *   - n.imagem === undefined
 *   - n.imagem.includes('placeholder')
 *   - n.imagem.startsWith('/api/og')   (se algum legado escapar)
 *
 * O que NÃO é removido:
 *   - Notícias com imagem em /images/noticias/SLUG.jpg que existe no disco.
 *   - Notícias com URL externa http(s) não-bloqueada (se algum dia voltarmos
 *     a hospedar imagens externamente — hoje todas viram local).
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONTENT = join(ROOT, 'lib', 'content.json');
const MOCK = join(ROOT, 'lib', 'mock-data.js');
const PUBLIC_DIR = join(ROOT, 'public');

const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');

// bucket no content.json → array no mock-data.js
const BUCKET_TO_ARRAYS = {
  noticias: ['NOTICIAS'],
  esportes: ['NOTICIAS_FUTEBOL', 'NOTICIAS_NBA', 'NOTICIAS_F1', 'NOTICIAS'],
};

function isPlaceholder(n) {
  if (!n.imagem) return true;
  if (typeof n.imagem !== 'string') return true;
  if (n.imagem.includes('placeholder')) return true;
  if (n.imagem.startsWith('/api/og')) return true;
  // Imagem aponta pra local mas o arquivo não existe → considera órfã.
  if (n.imagem.startsWith('/images/')) {
    return !existsSync(join(PUBLIC_DIR, n.imagem));
  }
  return false;
}

function removeSlugFromMockArray(mockSrc, slug, arrayName) {
  // Encontra o bloco do array e remove o objeto inteiro com esse slug.
  const arrRe = new RegExp(`(export const ${arrayName}\\s*=\\s*\\[)([\\s\\S]*?)(\\];)`);
  const m = mockSrc.match(arrRe);
  if (!m) return mockSrc;
  const inner = m[2];
  // Cada entrada é um objeto { ... } separado por vírgula. Removemos o que
  // contém slug: 'X'.
  const slugEsc = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const objRe = new RegExp(`\\s*\\{[^{}]*?slug:\\s*'${slugEsc}'[\\s\\S]*?\\},?`);
  const newInner = inner.replace(objRe, '');
  if (newInner === inner) return mockSrc;
  return mockSrc.replace(arrRe, `$1${newInner}$3`);
}

function main() {
  const content = JSON.parse(readFileSync(CONTENT, 'utf8'));
  let mock = readFileSync(MOCK, 'utf8');

  const removidos = [];
  for (const bucket of ['noticias', 'esportes']) {
    for (const [slug, n] of Object.entries(content[bucket] || {})) {
      if (isPlaceholder(n)) {
        removidos.push({ bucket, slug, motivo: n.imagem || '(sem imagem)' });
        if (!DRY) {
          delete content[bucket][slug];
          for (const arr of BUCKET_TO_ARRAYS[bucket]) {
            mock = removeSlugFromMockArray(mock, slug, arr);
          }
        }
      }
    }
  }

  if (removidos.length === 0) {
    console.log('Nenhuma notícia em placeholder — nada a remover.');
    return;
  }

  console.log(`${DRY ? '[DRY] ' : ''}Removendo ${removidos.length} notícia(s):`);
  for (const r of removidos) {
    console.log(`  [${r.bucket}] ${r.slug} (imagem: ${r.motivo.slice(0, 60)})`);
  }

  if (!DRY) {
    writeFileSync(CONTENT, JSON.stringify(content, null, 2), 'utf8');
    writeFileSync(MOCK, mock, 'utf8');
    console.log('Arquivos atualizados.');
  }
}

main();
