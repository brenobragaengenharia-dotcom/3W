import { FILMES, SERIES, MUSICA, JOGOS, NOTICIAS, EVENTOS } from '@/lib/mock-data';

const BASE_URL = 'https://3w-entretenimento.com';

export default function sitemap() {
  const now = new Date();

  // Páginas estáticas
  const staticPages = [
    { url: BASE_URL,              lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE_URL}/filmes`,  lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE_URL}/series`,  lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE_URL}/musica`,  lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE_URL}/jogos`,   lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE_URL}/eventos`, lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/noticias`,lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE_URL}/busca`,   lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/sobre`,   lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/politica-de-privacidade`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Páginas dinâmicas de filmes
  const filmesPages = FILMES.map(f => ({
    url: `${BASE_URL}/filmes/${f.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Páginas dinâmicas de séries
  const seriesPages = SERIES.map(s => ({
    url: `${BASE_URL}/series/${s.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Páginas dinâmicas de notícias
  const noticiasPages = NOTICIAS.map(n => ({
    url: `${BASE_URL}/noticias/${n.slug}`,
    lastModified: new Date(n.data),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Páginas dinâmicas de eventos
  const eventosPages = EVENTOS.map(e => ({
    url: `${BASE_URL}/eventos/${e.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...filmesPages,
    ...seriesPages,
    ...noticiasPages,
    ...eventosPages,
  ];
}
