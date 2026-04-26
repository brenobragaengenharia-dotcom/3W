import { FILMES, SERIES, NOTICIAS, NOTICIAS_ESPORTES, COMICS, HQS_PANINI, LIVROS_PANINI } from '@/lib/mock-data';

const BASE_URL = 'https://3w-entretenimento.com';

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL,                              lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE_URL}/filmes-e-series`,         lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE_URL}/noticias`,                lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE_URL}/comics`,                  lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE_URL}/esportes`,                lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE_URL}/busca`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/sobre`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/contato`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/politica-de-privacidade`, lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/termos-de-uso`,           lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ];

  const filmesPages = FILMES.map(f => ({
    url: `${BASE_URL}/filmes/${f.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const seriesPages = SERIES.map(s => ({
    url: `${BASE_URL}/series/${s.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const todasNoticias = [...NOTICIAS, ...NOTICIAS_ESPORTES];
  const noticiasPages = todasNoticias.map(n => ({
    url: `${BASE_URL}/noticias/${n.slug}`,
    lastModified: n.data ? new Date(n.data) : now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const todosComics = [...COMICS, ...HQS_PANINI, ...LIVROS_PANINI];
  const comicsPages = todosComics.map(c => ({
    url: `${BASE_URL}/comics/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...filmesPages,
    ...seriesPages,
    ...noticiasPages,
    ...comicsPages,
  ];
}
