export default function manifest() {
  return {
    name: '3W Entretenimento',
    short_name: '3W',
    description: 'Seu Universo de Entretenimento — filmes, séries, comics, esportes e eventos.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#0d0d0d',
    theme_color: '#FF6600',
    lang: 'pt-BR',
    categories: ['entertainment', 'news', 'sports'],
    icons: [
      { src: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable any' },
      { src: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable any' },
    ],
    shortcuts: [
      { name: 'Filmes',   short_name: 'Filmes',   url: '/filmes',   description: 'Ver os melhores filmes' },
      { name: 'Séries',   short_name: 'Séries',   url: '/series',   description: 'Acompanhar séries em alta' },
      { name: 'Notícias', short_name: 'Notícias', url: '/noticias', description: 'Últimas notícias' },
    ],
  };
}
