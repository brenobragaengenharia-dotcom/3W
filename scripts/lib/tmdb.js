/**
 * tmdb.js — Cliente para a API do The Movie Database (TMDB)
 * Docs: https://developer.themoviedb.org/docs
 */

const TMDB_BASE = 'https://api.themoviedb.org/3';

function getKey() {
  const key = process.env.TMDB_API_KEY;
  if (!key) throw new Error('TMDB_API_KEY não definida no .env.local');
  return key;
}

async function tmdbFetch(path, params = {}) {
  const url = new URL(`${TMDB_BASE}${path}`);
  url.searchParams.set('api_key', getKey());
  url.searchParams.set('language', 'pt-BR');
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`TMDB ${path} → HTTP ${res.status}`);
  return res.json();
}

// ─── Filmes ──────────────────────────────────────────────────────────────────

export async function fetchNowPlaying(limit = 12) {
  // Busca 2 páginas para garantir filmes suficientes (sem filtro de região para mais resultados)
  const [p1, p2] = await Promise.all([
    tmdbFetch('/movie/now_playing', { page: 1 }),
    tmdbFetch('/movie/now_playing', { page: 2 }),
  ]);
  return [...(p1.results ?? []), ...(p2.results ?? [])].slice(0, limit);
}

export async function fetchPopularSeries(limit = 12) {
  // Usa /discover/tv com filtros de qualidade: nota ≥7, votos ≥2000, estreou em 2015+
  const data = await tmdbFetch('/discover/tv', {
    sort_by:              'popularity.desc',
    'vote_count.gte':     2000,
    'vote_average.gte':   7.0,
    'first_air_date.gte': '2015-01-01',
    with_original_language: 'en',   // foca em produções em inglês (mais conhecidas no BR)
    page: 1,
  });
  return data.results?.slice(0, limit) ?? [];
}

export async function searchMovie(titulo) {
  const data = await tmdbFetch('/search/movie', { query: titulo, include_adult: false });
  return data.results?.[0] ?? null;
}

export async function getMovieDetails(tmdbId) {
  const [details, credits] = await Promise.all([
    tmdbFetch(`/movie/${tmdbId}`, { append_to_response: 'credits' }),
    tmdbFetch(`/movie/${tmdbId}/credits`),
  ]);

  const diretor = credits.crew?.find(p => p.job === 'Director')?.name ?? null;
  const elenco = credits.cast?.slice(0, 8).map(p => ({
    nome: p.name,
    personagem: p.character,
    foto: p.profile_path ? `https://image.tmdb.org/t/p/w185${p.profile_path}` : null,
  })) ?? [];

  return {
    tmdb_id:   details.id,
    titulo:    details.title,
    sinopse:   details.overview,
    nota_tmdb: details.vote_average?.toFixed(1),
    duracao:   details.runtime,
    generos:   details.genres?.map(g => g.name) ?? [],
    backdrop:  details.backdrop_path ? `https://image.tmdb.org/t/p/w1280${details.backdrop_path}` : null,
    poster:    details.poster_path   ? `https://image.tmdb.org/t/p/w500${details.poster_path}`   : null,
    diretor,
    elenco,
    lancamento: details.release_date,
  };
}

// ─── Séries ───────────────────────────────────────────────────────────────────

export async function searchSeries(titulo) {
  const data = await tmdbFetch('/search/tv', { query: titulo, include_adult: false });
  return data.results?.[0] ?? null;
}

export async function getSeriesDetails(tmdbId) {
  const [details, credits] = await Promise.all([
    tmdbFetch(`/tv/${tmdbId}`),
    tmdbFetch(`/tv/${tmdbId}/credits`),
  ]);

  const criadores = details.created_by?.map(p => p.name).join(', ') ?? null;
  const elenco = credits.cast?.slice(0, 8).map(p => ({
    nome: p.name,
    personagem: p.character,
    foto: p.profile_path ? `https://image.tmdb.org/t/p/w185${p.profile_path}` : null,
  })) ?? [];

  return {
    tmdb_id:    details.id,
    titulo:     details.name,
    sinopse:    details.overview,
    nota_tmdb:  details.vote_average?.toFixed(1),
    temporadas: details.number_of_seasons,
    episodios:  details.number_of_episodes,
    generos:    details.genres?.map(g => g.name) ?? [],
    backdrop:   details.backdrop_path ? `https://image.tmdb.org/t/p/w1280${details.backdrop_path}` : null,
    poster:     details.poster_path   ? `https://image.tmdb.org/t/p/w500${details.poster_path}`   : null,
    redes:      details.networks?.map(n => n.name) ?? [],
    status:     details.status,
    criadores,
    elenco,
    estreia: details.first_air_date,
  };
}
