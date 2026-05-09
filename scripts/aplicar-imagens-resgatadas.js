#!/usr/bin/env node
/**
 * aplicar-imagens-resgatadas.js — One-shot.
 *
 * As 5 imagens da ESPN foram baixadas manualmente via Chrome+curl porque
 * a ESPN agora tem AWS WAF bloqueando fetch puro. Este script atualiza
 * content.json e mock-data.js para apontar para os arquivos locais.
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONTENT = join(ROOT, 'lib', 'content.json');
const MOCK = join(ROOT, 'lib', 'mock-data.js');

const slugs = [
  'corinthians-pode-se-classificar-sem-entrar-em-campo',
  'cruzeiro-segura-empate-com-um-a-menos-na-libertadores',
  'conmebol-deve-definir-resultado-de-medellin-x-flamengo-em-uma-semana',
  'jardim-e-boto-relatam-tensao-do-flamengo-em-medellin',
  'wembanyama-arrasa-e-spurs-vencem-timberwolves-nos-playoffs',
];

const content = JSON.parse(readFileSync(CONTENT, 'utf8'));
for (const s of slugs) {
  const path = `/images/noticias/${s}.jpg`;
  for (const b of ['noticias', 'esportes']) {
    if (content[b]?.[s]) {
      content[b][s].imagem = path;
      console.log(`content.json: ${b}/${s} → ${path}`);
    }
  }
}
writeFileSync(CONTENT, JSON.stringify(content, null, 2), 'utf8');

let mock = readFileSync(MOCK, 'utf8');
for (const s of slugs) {
  const slugEsc = s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(slug:\\s*'${slugEsc}'[\\s\\S]{0,800}?imagem:\\s*')([^']*)(')`);
  const before = mock;
  mock = mock.replace(re, (_, a, _b, c) => `${a}/images/noticias/${s}.jpg${c}`);
  console.log(`mock-data.js: ${s} ${before !== mock ? 'OK' : 'NO MATCH'}`);
}
writeFileSync(MOCK, mock, 'utf8');
console.log('Pronto.');
