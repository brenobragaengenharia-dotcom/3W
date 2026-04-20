#!/usr/bin/env node
/**
 * update-content.js — Agente de automação do 3W Entretenimento
 *
 * O que faz:
 *   1. Lê a lista de filmes, séries e comics do mock-data.js
 *   2. Para cada item sem conteúdo gerado (ou com --force), busca dados no TMDB
 *   3. Usa a API do Claude para gerar review, sinopse e manchete em PT-BR
 *   4. Salva o resultado em lib/content.json
 *   5. Exibe um resumo do que foi gerado
 *
 * Uso:
 *   node scripts/update-content.js           → gera apenas itens novos
 *   node scripts/update-content.js --force   → regenera tudo
 *   node scripts/update-content.js --item filmes/avengers-doomsday → regenera 1 item
 *
 * Pré-requisitos:
 *   TMDB_API_KEY e ANTHROPIC_API_KEY no arquivo .env.local
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ─── Carregar .env.local ──────────────────────────────────────────────────────
function loadEnv() {
  const envPath = join(ROOT, '.env.local');
  if (!existsSync(envPath)) {
    console.error('❌  Arquivo .env.local não encontrado.');
    console.error('   Copie .env.local.example para .env.local e preencha suas chaves.');
    process.exit(1);
  }
  const lines = readFileSync(envPath, 'utf-8').split('\n');
  for (const line of lines) {
    const [key, ...rest] = line.split('=');
    if (key?.trim() && !key.startsWith('#')) {
      process.env[key.trim()] = rest.join('=').trim();
    }
  }
}

// ─── Imports dinâmicos dos helpers ───────────────────────────────────────────
const { fetchNowPlaying, fetchPopularSeries, searchMovie, getMovieDetails, searchSeries, getSeriesDetails } =
  await import('./lib/tmdb.js');
const { generateMovieContent, generateSeriesContent, generateComicContent,
        generateLivroContent, generateNoticiaContent, generateEsporteContent } =
  await import('./lib/claude.js');

// ─── Caminhos ─────────────────────────────────────────────────────────────────
const MOCK_DATA_PATH   = join(ROOT, 'lib', 'mock-data.js');
const CONTENT_PATH     = join(ROOT, 'lib', 'content.json');

// ─── Utilitários ──────────────────────────────────────────────────────────────
function loadContent() {
  if (!existsSync(CONTENT_PATH)) return { filmes: {}, series: {}, comics: {} };
  return JSON.parse(readFileSync(CONTENT_PATH, 'utf-8'));
}

function saveContent(content) {
  writeFileSync(CONTENT_PATH, JSON.stringify(content, null, 2), 'utf-8');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function log(emoji, msg) {
  console.log(`${emoji}  ${msg}`);
}

// ─── Leitura do mock-data via regex (sem import dinâmico do JS do Next) ───────
function extractArrayFromMockData(varName) {
  const src = readFileSync(MOCK_DATA_PATH, 'utf-8');

  // Extrai constantes de string simples para o contexto do eval
  // (ex: PANINI_AFFILIATE_URL usada nos arrays de Panini)
  const strConsts = [];
  for (const m of src.matchAll(/^export const (\w+)\s*=\s*'([^']*?)';/gm)) {
    strConsts.push(`const ${m[1]} = '${m[2]}';`);
  }

  const regex = new RegExp(`export const ${varName}\\s*=\\s*(\\[[\\s\\S]*?\\]);`);
  const match = src.match(regex);
  if (!match) return [];
  // eslint-disable-next-line no-eval
  return eval(`${strConsts.join('\n')}\n${match[1]}`);
}

// ─── Slugify ──────────────────────────────────────────────────────────────────
function slugify(str, fallbackId = '') {
  const slug = str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // remove acentos
    .replace(/[^\w\s-]/g, '')          // remove caracteres especiais
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  // Se o título não tem caracteres latinos (ex: japonês, chinês), usa o ID como fallback
  return slug || (fallbackId ? `titulo-${fallbackId}` : '');
}

// ─── Sincronização de filmes em cartaz (TMDB now_playing → mock-data.js) ──────
async function syncFilmesEmCartaz() {
  log('🎬', 'Buscando filmes em cartaz no Brasil via TMDB (now_playing, region=BR)...');

  const nowPlaying = await fetchNowPlaying(12);
  if (!nowPlaying.length) {
    log('⚠️ ', 'TMDB não retornou filmes. Verifique a chave e a conexão.');
    return 0;
  }

  const filmes = [];
  for (let i = 0; i < nowPlaying.length; i++) {
    const movie = nowPlaying[i];
    log('🔍', `[${i + 1}/${nowPlaying.length}] Detalhes: ${movie.title}...`);
    try {
      const details = await getMovieDetails(movie.id);
      await sleep(300);

      const titulo    = details.titulo || movie.title;
      const slug      = slugify(titulo, movie.id);
      const categoria = details.generos?.[0] ?? 'Filme';
      const nota      = parseFloat(details.nota_tmdb) || 0;

      filmes.push({
        id:        i + 1,
        slug,
        titulo,
        ano:       parseInt((details.lancamento ?? '').slice(0, 4)) || new Date().getFullYear(),
        nota:      Math.round(nota * 10) / 10,
        categoria,
        imagem:    details.poster ?? '',
      });
    } catch (err) {
      log('❌', `Erro ao buscar detalhes de "${movie.title}": ${err.message}`);
    }
  }

  if (!filmes.length) {
    log('⚠️ ', 'Nenhum filme processado. mock-data.js não foi alterado.');
    return 0;
  }

  // Reescreve somente o bloco FILMES no mock-data.js
  const mockPath = join(ROOT, 'lib', 'mock-data.js');
  const src = readFileSync(mockPath, 'utf-8');

  const linhas = filmes.map(f => {
    const t = f.titulo.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    const c = f.categoria.replace(/'/g, "\\'");
    return `  { id: ${f.id}, slug: '${f.slug}', titulo: '${t}', ano: ${f.ano}, nota: ${f.nota}, categoria: '${c}', imagem: '${f.imagem}' }`;
  });

  const blocoNovo = `export const FILMES = [\n${linhas.join(',\n')},\n];`;
  const regex = /export const FILMES\s*=\s*\[[\s\S]*?\];/;

  if (!regex.test(src)) {
    log('⚠️ ', 'Bloco FILMES não localizado em mock-data.js — nenhuma alteração feita.');
    return 0;
  }

  const newSrc = src.replace(regex, blocoNovo);
  writeFileSync(mockPath, newSrc, 'utf-8');
  log('✅', `mock-data.js atualizado com ${filmes.length} filmes em cartaz:`);
  filmes.forEach(f => log('   →', `${f.titulo} (${f.ano}) — slug: ${f.slug}`));
  return filmes.length;
}

// ─── Sincronização de séries em destaque (TMDB popular → mock-data.js) ───────
async function syncSeriesEmDestaque() {
  log('📺', 'Buscando séries populares via TMDB (popular, region=BR)...');

  const popular = await fetchPopularSeries(12);
  if (!popular.length) {
    log('⚠️ ', 'TMDB não retornou séries. Verifique a chave e a conexão.');
    return 0;
  }

  const series = [];
  for (let i = 0; i < popular.length; i++) {
    const tv = popular[i];
    log('🔍', `[${i + 1}/${popular.length}] Detalhes: ${tv.name}...`);
    try {
      const details = await getSeriesDetails(tv.id);
      await sleep(300);

      const titulo    = details.titulo || tv.name;
      const slug      = slugify(titulo, tv.id);
      const categoria = details.generos?.[0] ?? 'Série';
      const nota      = parseFloat(details.nota_tmdb) || 0;

      series.push({
        id:        i + 1,
        slug,
        titulo,
        ano:       parseInt((details.estreia ?? '').slice(0, 4)) || new Date().getFullYear(),
        nota:      Math.round(nota * 10) / 10,
        categoria,
        imagem:    details.poster ?? '',
      });
    } catch (err) {
      log('❌', `Erro ao buscar detalhes de "${tv.name}": ${err.message}`);
    }
  }

  if (!series.length) {
    log('⚠️ ', 'Nenhuma série processada. mock-data.js não foi alterado.');
    return 0;
  }

  // Reescreve somente o bloco SERIES no mock-data.js
  const mockPath = join(ROOT, 'lib', 'mock-data.js');
  const src = readFileSync(mockPath, 'utf-8');

  const linhas = series.map(s => {
    const t = s.titulo.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    const c = s.categoria.replace(/'/g, "\\'");
    return `  { id: ${s.id}, slug: '${s.slug}', titulo: '${t}', ano: ${s.ano}, nota: ${s.nota}, categoria: '${c}', imagem: '${s.imagem}' }`;
  });

  const blocoNovo = `export const SERIES = [\n${linhas.join(',\n')},\n];`;
  const regex = /export const SERIES\s*=\s*\[[\s\S]*?\];/;

  if (!regex.test(src)) {
    log('⚠️ ', 'Bloco SERIES não localizado em mock-data.js — nenhuma alteração feita.');
    return 0;
  }

  const newSrc = src.replace(regex, blocoNovo);
  writeFileSync(mockPath, newSrc, 'utf-8');
  log('✅', `mock-data.js atualizado com ${series.length} séries em destaque:`);
  series.forEach(s => log('   →', `${s.titulo} (${s.ano}) — slug: ${s.slug}`));
  return series.length;
}

// ─── Processamento de filmes ──────────────────────────────────────────────────
async function processFilmes(content, force, targetSlug) {
  const filmes = extractArrayFromMockData('FILMES');
  let gerados = 0;

  for (const filme of filmes) {
    if (targetSlug && targetSlug !== `filmes/${filme.slug}`) continue;
    if (!force && content.filmes[filme.slug]) {
      log('⏭️ ', `Filme já gerado: ${filme.titulo}`);
      continue;
    }

    log('🎬', `Processando filme: ${filme.titulo}...`);

    try {
      // Busca no TMDB
      const tmdbResult = await searchMovie(filme.titulo);
      if (!tmdbResult) {
        log('⚠️ ', `Filme não encontrado no TMDB: ${filme.titulo}`);
        continue;
      }

      const details = await getMovieDetails(tmdbResult.id);
      await sleep(300); // respeita rate limit do TMDB

      // Gera conteúdo com Claude
      log('✍️ ', `Gerando review com Claude: ${filme.titulo}...`);
      const editorial = await generateMovieContent(details);
      await sleep(500); // respeita rate limit da Anthropic

      content.filmes[filme.slug] = {
        ...details,
        ...editorial,
        gerado_em: new Date().toISOString(),
      };

      saveContent(content);
      log('✅', `${filme.titulo} → salvo`);
      gerados++;

    } catch (err) {
      log('❌', `Erro em ${filme.titulo}: ${err.message}`);
    }
  }

  return gerados;
}

// ─── Processamento de séries ──────────────────────────────────────────────────
// Remove sufixos de temporada do título antes de buscar no TMDB
// Ex: "The Last of Us — T2" → "The Last of Us"
function cleanTitle(titulo) {
  return titulo
    .replace(/\s*[—–-]\s*T\d+\s*$/i, '')   // remove "— T2", "- T2"
    .replace(/\s*[—–-]\s*Temporada\s*\d+/i, '') // remove "— Temporada 2"
    .replace(/\s*Season\s*\d+/i, '')         // remove "Season 2"
    .trim();
}

async function processSeries(content, force, targetSlug) {
  const series = extractArrayFromMockData('SERIES');
  let gerados = 0;

  for (const serie of series) {
    if (targetSlug && targetSlug !== `series/${serie.slug}`) continue;
    if (!force && content.series[serie.slug]) {
      log('⏭️ ', `Série já gerada: ${serie.titulo}`);
      continue;
    }

    log('📺', `Processando série: ${serie.titulo}...`);

    try {
      const tituloBusca = cleanTitle(serie.titulo);
      const tmdbResult = await searchSeries(tituloBusca);
      if (!tmdbResult) {
        log('⚠️ ', `Série não encontrada no TMDB: ${tituloBusca}`);
        continue;
      }

      const details = await getSeriesDetails(tmdbResult.id);
      await sleep(300);

      log('✍️ ', `Gerando review com Claude: ${serie.titulo}...`);
      const editorial = await generateSeriesContent(details);
      await sleep(500);

      content.series[serie.slug] = {
        ...details,
        ...editorial,
        gerado_em: new Date().toISOString(),
      };

      saveContent(content);
      log('✅', `${serie.titulo} → salvo`);
      gerados++;

    } catch (err) {
      log('❌', `Erro em ${serie.titulo}: ${err.message}`);
    }
  }

  return gerados;
}

// ─── Processamento de comics ──────────────────────────────────────────────────
async function processComics(content, force, targetSlug) {
  const comics = extractArrayFromMockData('COMICS');
  let gerados = 0;

  for (const comic of comics) {
    if (targetSlug && targetSlug !== `comics/${comic.slug}`) continue;
    if (!force && content.comics[comic.slug]) {
      log('⏭️ ', `Comic já gerado: ${comic.titulo}`);
      continue;
    }

    log('📚', `Processando comic: ${comic.titulo}...`);

    try {
      log('✍️ ', `Gerando review com Claude: ${comic.titulo}...`);
      const editorial = await generateComicContent(comic);
      await sleep(500);

      content.comics[comic.slug] = {
        titulo:    comic.titulo,
        editora:   comic.editora,
        ano:       comic.ano,
        categoria: comic.categoria,
        imagem:    comic.imagem,
        ...editorial,
        gerado_em: new Date().toISOString(),
      };

      saveContent(content);
      log('✅', `${comic.titulo} → salvo`);
      gerados++;

    } catch (err) {
      log('❌', `Erro em ${comic.titulo}: ${err.message}`);
    }
  }

  return gerados;
}

// ─── Processamento de livros recomendados ────────────────────────────────────
async function processLivros(content, force, targetSlug) {
  const livros = extractArrayFromMockData('LIVROS_RECOMENDADOS');
  let gerados = 0;

  for (const livro of livros) {
    if (targetSlug && targetSlug !== `comics/${livro.slug}`) continue;
    if (!force && content.comics[livro.slug]) {
      log('⏭️ ', `Livro já gerado: ${livro.titulo}`);
      continue;
    }

    log('📖', `Processando livro: ${livro.titulo}...`);

    try {
      log('✍️ ', `Gerando resenha com Claude: ${livro.titulo}...`);
      const editorial = await generateLivroContent(livro);
      await sleep(500);

      content.comics[livro.slug] = {
        titulo:  livro.titulo,
        autor:   livro.autor,
        genero:  livro.genero,
        imagem:  livro.imagem,
        tipo:    'livro',
        ...editorial,
        gerado_em: new Date().toISOString(),
      };

      saveContent(content);
      log('✅', `${livro.titulo} → salvo`);
      gerados++;

    } catch (err) {
      log('❌', `Erro em ${livro.titulo}: ${err.message}`);
    }
  }

  return gerados;
}

// ─── Processamento de HQs Panini ─────────────────────────────────────────────
async function processHqsPanini(content, force, targetSlug) {
  const hqs = extractArrayFromMockData('HQS_PANINI');
  let gerados = 0;

  for (const hq of hqs) {
    if (targetSlug && targetSlug !== `comics/${hq.slug}`) continue;
    if (!force && content.comics[hq.slug]) {
      log('⏭️ ', `HQ Panini já gerada: ${hq.titulo}`);
      continue;
    }

    log('📕', `Processando HQ Panini: ${hq.titulo}...`);
    try {
      log('✍️ ', `Gerando review com Claude: ${hq.titulo}...`);
      const editorial = await generateComicContent(hq);
      await sleep(500);

      content.comics[hq.slug] = {
        titulo:     hq.titulo,
        editora:    hq.editora,
        ano:        hq.ano,
        categoria:  hq.categoria,
        imagem:     hq.imagem,
        link_compra: hq.link_compra,
        ...editorial,
        gerado_em: new Date().toISOString(),
      };

      saveContent(content);
      log('✅', `${hq.titulo} → salvo`);
      gerados++;
    } catch (err) {
      log('❌', `Erro em ${hq.titulo}: ${err.message}`);
    }
  }
  return gerados;
}

// ─── Processamento de Mangás/Livros Panini ───────────────────────────────────
async function processLivrosPanini(content, force, targetSlug) {
  const livros = extractArrayFromMockData('LIVROS_PANINI');
  let gerados = 0;

  for (const livro of livros) {
    if (targetSlug && targetSlug !== `comics/${livro.slug}`) continue;
    if (!force && content.comics[livro.slug]) {
      log('⏭️ ', `Mangá Panini já gerado: ${livro.titulo}`);
      continue;
    }

    log('🎌', `Processando mangá Panini: ${livro.titulo}...`);
    try {
      log('✍️ ', `Gerando resenha com Claude: ${livro.titulo}...`);
      const editorial = await generateLivroContent(livro);
      await sleep(500);

      content.comics[livro.slug] = {
        titulo:     livro.titulo,
        autor:      livro.autor,
        genero:     livro.genero,
        imagem:     livro.imagem,
        link_compra: livro.link_compra,
        tipo:       'manga',
        ...editorial,
        gerado_em: new Date().toISOString(),
      };

      saveContent(content);
      log('✅', `${livro.titulo} → salvo`);
      gerados++;
    } catch (err) {
      log('❌', `Erro em ${livro.titulo}: ${err.message}`);
    }
  }
  return gerados;
}

// ─── Processamento de notícias gerais ────────────────────────────────────────
async function processNoticias(content, force, targetSlug) {
  const noticias = extractArrayFromMockData('NOTICIAS');
  let gerados = 0;

  if (!content.noticias) content.noticias = {};

  for (const noticia of noticias) {
    if (targetSlug && targetSlug !== `noticias/${noticia.slug}`) continue;
    if (!force && content.noticias[noticia.slug]) {
      log('⏭️ ', `Notícia já gerada: ${noticia.titulo}`);
      continue;
    }

    log('📰', `Processando notícia: ${noticia.titulo}...`);

    try {
      log('✍️ ', `Gerando artigo com Claude: ${noticia.titulo}...`);
      const editorial = await generateNoticiaContent(noticia);
      await sleep(500);

      content.noticias[noticia.slug] = {
        titulo:       noticia.titulo,
        descricao:    noticia.descricao,
        categoria:    noticia.categoria,
        autor:        noticia.autor,
        data:         noticia.data,
        imagem:       noticia.imagem,
        tempo_leitura: noticia.tempo_leitura,
        ...editorial,
        gerado_em: new Date().toISOString(),
      };

      saveContent(content);
      log('✅', `${noticia.titulo} → salvo`);
      gerados++;

    } catch (err) {
      log('❌', `Erro em ${noticia.titulo}: ${err.message}`);
    }
  }

  return gerados;
}

// ─── Processamento de notícias de esportes ───────────────────────────────────
async function processEsportes(content, force, targetSlug) {
  const futebol = extractArrayFromMockData('NOTICIAS_FUTEBOL');
  const nba     = extractArrayFromMockData('NOTICIAS_NBA');
  const f1      = extractArrayFromMockData('NOTICIAS_F1');
  const todas   = [...futebol, ...nba, ...f1];
  let gerados = 0;

  if (!content.esportes) content.esportes = {};

  for (const noticia of todas) {
    if (targetSlug && targetSlug !== `esportes/${noticia.slug}`) continue;
    if (!force && content.esportes[noticia.slug]) {
      log('⏭️ ', `Esporte já gerado: ${noticia.titulo}`);
      continue;
    }

    log('⚽', `Processando esporte: ${noticia.titulo}...`);

    try {
      log('✍️ ', `Gerando artigo com Claude: ${noticia.titulo}...`);
      const editorial = await generateEsporteContent(noticia);
      await sleep(500);

      content.esportes[noticia.slug] = {
        titulo:       noticia.titulo,
        descricao:    noticia.descricao,
        categoria:    noticia.categoria,
        autor:        noticia.autor,
        data:         noticia.data,
        imagem:       noticia.imagem,
        tempo_leitura: noticia.tempo_leitura,
        ...editorial,
        gerado_em: new Date().toISOString(),
      };

      saveContent(content);
      log('✅', `${noticia.titulo} → salvo`);
      gerados++;

    } catch (err) {
      log('❌', `Erro em ${noticia.titulo}: ${err.message}`);
    }
  }

  return gerados;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  loadEnv();

  const args        = process.argv.slice(2);
  const force       = args.includes('--force');
  const syncCartaz  = args.includes('--sync-cartaz');
  const syncSeries  = args.includes('--sync-series');
  const itemArg     = args.find(a => !a.startsWith('--'));

  console.log('\n🚀  3W Entretenimento — Agente de Atualização de Conteúdo');
  console.log('─'.repeat(55));
  if (force)      log('⚡', 'Modo --force: regenerando todo o conteúdo');
  if (syncCartaz) log('🔄', 'Modo --sync-cartaz: atualizando filmes em cartaz via TMDB');
  if (syncSeries) log('🔄', 'Modo --sync-series: atualizando séries populares via TMDB');
  if (itemArg)    log('🎯', `Modo item único: ${itemArg}`);
  console.log('');

  // Sync de filmes em cartaz (reescreve FILMES no mock-data.js)
  if (syncCartaz) {
    await syncFilmesEmCartaz();
    console.log('');
  }

  // Sync de séries populares (reescreve SERIES no mock-data.js)
  if (syncSeries) {
    await syncSeriesEmDestaque();
    console.log('');
  }

  const content = loadContent();
  let total = 0;

  total += await processFilmes(content, force, itemArg);
  total += await processSeries(content, force, itemArg);
  total += await processComics(content, force, itemArg);
  total += await processLivros(content, force, itemArg);
  total += await processHqsPanini(content, force, itemArg);
  total += await processLivrosPanini(content, force, itemArg);
  total += await processNoticias(content, force, itemArg);
  total += await processEsportes(content, force, itemArg);

  console.log('');
  console.log('─'.repeat(55));
  log('🎉', `Concluído! ${total} item(ns) gerado(s)/atualizado(s).`);
  log('📄', `Conteúdo salvo em: lib/content.json`);
  console.log('');
  console.log('   Próximo passo: npm run build && vercel --prod --yes');
  console.log('');
}

main().catch(err => {
  console.error('\n❌  Erro fatal:', err.message);
  process.exit(1);
});
