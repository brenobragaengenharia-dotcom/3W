#!/usr/bin/env node
/**
 * migrar-og-para-placeholder.js — One-shot migration.
 *
 * Substitui entradas com `imagem: '/api/og?...'` por placeholder apropriado
 * (categórico para motorsport, PLACEHOLDER genérico para o resto). Atualiza
 * tanto lib/content.json quanto lib/mock-data.js.
 *
 * Roda uma vez após o rollback do safe-image.js (caminho A) para limpar o
 * lixo deixado pelo design anterior.
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pickPlaceholder, PLACEHOLDER } from '../lib/safe-image.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONTENT = join(ROOT, 'lib', 'content.json');
const MOCK = join(ROOT, 'lib', 'mock-data.js');

function patchMockData(slug, novaImagem) {
  const src = readFileSync(MOCK, 'utf-8');
  const slugEsc = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(slug:\\s*'${slugEsc}'[\\s\\S]{0,800}?imagem:\\s*')([^']*)(')`);
  const novo = src.replace(re, (_, a, _b, c) => `${a}${novaImagem}${c}`);
  if (novo !== src) {
    writeFileSync(MOCK, novo, 'utf-8');
    return true;
  }
  return false;
}

function main() {
  const content = JSON.parse(readFileSync(CONTENT, 'utf-8'));
  const acoes = [];

  for (const bucket of ['noticias', 'esportes']) {
    for (const [slug, n] of Object.entries(content[bucket] || {})) {
      if (!n.imagem || !n.imagem.startsWith('/api/og')) continue;
      const novo = pickPlaceholder(n.categoria, slug, n.titulo) || PLACEHOLDER;
      acoes.push({ bucket, slug, antes: n.imagem.slice(0, 60), depois: novo });
      content[bucket][slug].imagem = novo;
      patchMockData(slug, novo);
    }
  }

  if (acoes.length === 0) {
    console.log('Nenhuma entrada com /api/og encontrada — nada a migrar.');
    return;
  }

  writeFileSync(CONTENT, JSON.stringify(content, null, 2), 'utf-8');

  console.log(`Migradas ${acoes.length} entradas:`);
  for (const a of acoes) {
    console.log(`  [${a.bucket}] ${a.slug}`);
    console.log(`    antes:  ${a.antes}…`);
    console.log(`    depois: ${a.depois}`);
  }
}

main();
