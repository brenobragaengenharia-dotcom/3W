/**
 * claude.js — Gerador de conteúdo editorial usando a API da Anthropic
 * Docs: https://docs.anthropic.com/en/api
 */

const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-sonnet-4-6';

function getKey() {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error('ANTHROPIC_API_KEY não definida no .env.local');
  return key;
}

async function callClaude(prompt) {
  const res = await fetch(ANTHROPIC_API, {
    method: 'POST',
    headers: {
      'x-api-key': getKey(),
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1500,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Claude API → HTTP ${res.status}: ${err}`);
  }

  const data = await res.json();
  const text = data.content?.[0]?.text ?? '';
  // Remove markdown code fences (```json ... ```) when present
  return text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '').trim();
}

// ─── Filmes ──────────────────────────────────────────────────────────────────

export async function generateMovieContent(movie) {
  const prompt = `Você é um crítico de cinema brasileiro do portal 3W Entretenimento.
Com base nos dados abaixo, gere um conteúdo editorial em português do Brasil.

DADOS DO FILME:
- Título: ${movie.titulo}
- Ano: ${movie.lancamento?.slice(0, 4) ?? 'desconhecido'}
- Gêneros: ${movie.generos.join(', ')}
- Diretor: ${movie.diretor ?? 'não informado'}
- Elenco principal: ${movie.elenco.map(e => `${e.nome} como ${e.personagem}`).join('; ')}
- Sinopse TMDB: ${movie.sinopse}
- Nota TMDB: ${movie.nota_tmdb}/10
- Duração: ${movie.duracao} minutos

RETORNE EXATAMENTE neste formato JSON (sem markdown, sem explicações):
{
  "manchete": "frase de impacto de até 12 palavras sobre o filme",
  "sinopse_pt": "sinopse em 2-3 frases em PT-BR, fluida e envolvente",
  "paragrafos_review": [
    "parágrafo 1: análise da proposta e contexto do filme (80-100 palavras)",
    "parágrafo 2: análise de atuações, direção e pontos fortes (80-100 palavras)",
    "parágrafo 3: veredicto final — vale assistir? (60-80 palavras)"
  ],
  "vale_assistir": true,
  "frase_final": "frase curta e marcante de até 15 palavras resumindo a experiência"
}`;

  const raw = await callClaude(prompt);
  return JSON.parse(raw.trim());
}

// ─── Séries ───────────────────────────────────────────────────────────────────

export async function generateSeriesContent(serie) {
  const prompt = `Você é um crítico de séries brasileiro do portal 3W Entretenimento.
Com base nos dados abaixo, gere conteúdo editorial em português do Brasil.

DADOS DA SÉRIE:
- Título: ${serie.titulo}
- Estreia: ${serie.estreia?.slice(0, 4) ?? 'desconhecido'}
- Gêneros: ${serie.generos.join(', ')}
- Criadores: ${serie.criadores ?? 'não informado'}
- Redes/Plataformas: ${serie.redes.join(', ')}
- Temporadas: ${serie.temporadas} | Episódios: ${serie.episodios}
- Status: ${serie.status}
- Elenco: ${serie.elenco.map(e => `${e.nome} como ${e.personagem}`).join('; ')}
- Sinopse TMDB: ${serie.sinopse}
- Nota TMDB: ${serie.nota_tmdb}/10

RETORNE EXATAMENTE neste formato JSON (sem markdown, sem explicações):
{
  "manchete": "frase de impacto de até 12 palavras sobre a série",
  "sinopse_pt": "sinopse em 2-3 frases em PT-BR, fluida e envolvente",
  "paragrafos_review": [
    "parágrafo 1: apresentação da série e seu universo (80-100 palavras)",
    "parágrafo 2: análise de roteiro, atuações e produção (80-100 palavras)",
    "parágrafo 3: veredicto — maratona obrigatória? (60-80 palavras)"
  ],
  "vale_assistir": true,
  "frase_final": "frase curta e marcante de até 15 palavras resumindo a experiência"
}`;

  const raw = await callClaude(prompt);
  return JSON.parse(raw.trim());
}

// ─── Notícias Gerais ──────────────────────────────────────────────────────────

export async function generateNoticiaContent(noticia) {
  const prompt = `Você é um jornalista do portal 3W Entretenimento cobrindo ${noticia.categoria}.
Escreva um artigo completo em português do Brasil sobre a notícia abaixo.

DADOS DA NOTÍCIA:
- Título: ${noticia.titulo}
- Lead/Descrição: ${noticia.descricao}
- Categoria: ${noticia.categoria}
- Data: ${noticia.data}
- Autor: ${noticia.autor}

RETORNE EXATAMENTE neste formato JSON (sem markdown, sem explicações):
{
  "manchete": "título de impacto de até 12 palavras (pode ser igual ou reescrito do original)",
  "paragrafos": [
    "parágrafo 1: contexto e abertura do assunto, expandindo o lead (80-100 palavras)",
    "parágrafo 2: detalhes, dados e desenvolvimento (80-100 palavras)",
    "parágrafo 3: análise ou reação do público/especialistas (70-90 palavras)",
    "parágrafo 4: perspectivas e o que vem por aí (60-80 palavras)"
  ],
  "frase_destaque": "citação ou frase de destaque para pull quote (até 20 palavras)",
  "conclusao": "parágrafo conclusivo resumindo a importância da notícia (50-70 palavras)"
}`;

  const raw = await callClaude(prompt);
  return JSON.parse(raw.trim());
}

// ─── Notícias de Esportes ─────────────────────────────────────────────────────

export async function generateEsporteContent(noticia) {
  const esporteLabel = {
    'Futebol': 'jornalista esportivo especializado em futebol',
    'NBA': 'jornalista especializado em basquete e NBA',
    'Fórmula 1': 'jornalista especializado em automobilismo e Fórmula 1',
  }[noticia.categoria] ?? 'jornalista esportivo';

  const prompt = `Você é um ${esporteLabel} do portal 3W Entretenimento (@3wesports).
Escreva um artigo esportivo completo em português do Brasil.

DADOS DA NOTÍCIA:
- Título: ${noticia.titulo}
- Lead/Descrição: ${noticia.descricao}
- Esporte/Categoria: ${noticia.categoria}
- Data: ${noticia.data}
- Autor: ${noticia.autor}

RETORNE EXATAMENTE neste formato JSON (sem markdown, sem explicações):
{
  "manchete": "título de impacto esportivo de até 12 palavras",
  "paragrafos": [
    "parágrafo 1: abertura com contexto esportivo e relevância do evento (80-100 palavras)",
    "parágrafo 2: detalhes técnicos, estatísticas e desenvolvimento da história (80-100 palavras)",
    "parágrafo 3: reações, análises e impacto no cenário do esporte (70-90 palavras)",
    "parágrafo 4: perspectivas futuras e o que os torcedores podem esperar (60-80 palavras)"
  ],
  "frase_destaque": "frase de impacto esportivo para pull quote (até 20 palavras)",
  "conclusao": "parágrafo conclusivo sobre o significado para o esporte (50-70 palavras)"
}`;

  const raw = await callClaude(prompt);
  return JSON.parse(raw.trim());
}

// ─── Livros ───────────────────────────────────────────────────────────────────

export async function generateLivroContent(livro) {
  const prompt = `Você é um crítico literário brasileiro do portal 3W Entretenimento.
Com base nos dados abaixo, gere uma resenha completa em português do Brasil.

DADOS DO LIVRO:
- Título: ${livro.titulo}
- Autor: ${livro.autor}
- Gênero: ${livro.genero}

RETORNE EXATAMENTE neste formato JSON (sem markdown, sem explicações):
{
  "manchete": "frase de impacto de até 12 palavras sobre o livro",
  "sinopse_pt": "descrição envolvente do livro em 2-3 frases em PT-BR, sem spoilers",
  "paragrafos_review": [
    "parágrafo 1: contexto, importância e lugar do livro na literatura (80-100 palavras)",
    "parágrafo 2: análise de escrita, universo, personagens e pontos fortes (80-100 palavras)",
    "parágrafo 3: para quem é indicado e por que vale a leitura (60-80 palavras)"
  ],
  "vale_ler": true,
  "frase_final": "frase curta e marcante de até 15 palavras resumindo a experiência de leitura"
}`;

  const raw = await callClaude(prompt);
  return JSON.parse(raw.trim());
}

// ─── Comics ───────────────────────────────────────────────────────────────────

export async function generateComicContent(comic) {
  const prompt = `Você é um especialista em quadrinhos brasileiro do portal 3W Entretenimento (@3wcomics_).
Com base nos dados abaixo, gere conteúdo editorial em português do Brasil.

DADOS DA HQ:
- Título: ${comic.titulo}
- Editora: ${comic.editora}
- Ano: ${comic.ano}
- Categoria: ${comic.categoria}

RETORNE EXATAMENTE neste formato JSON (sem markdown, sem explicações):
{
  "manchete": "frase de impacto de até 12 palavras sobre a HQ",
  "sinopse_pt": "descrição envolvente da HQ em 2-3 frases em PT-BR",
  "paragrafos_review": [
    "parágrafo 1: contexto e importância da HQ no universo dos quadrinhos (80-100 palavras)",
    "parágrafo 2: análise de arte, roteiro e personagens (80-100 palavras)",
    "parágrafo 3: para quem é indicado e por quê vale a leitura (60-80 palavras)"
  ],
  "vale_ler": true,
  "frase_final": "frase curta e marcante de até 15 palavras"
}`;

  const raw = await callClaude(prompt);
  return JSON.parse(raw.trim());
}
