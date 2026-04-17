// Dados mock — substitua por chamadas à sua API/CMS

export const FILMES = [
  { id: 1, slug: 'duna-parte-dois', titulo: 'Duna: Parte Dois', ano: 2024, nota: 8.5, categoria: 'Ficção Científica', imagem: 'https://placehold.co/200x300/1a1a2e/e50914?text=Duna+2' },
  { id: 2, slug: 'oppenheimer', titulo: 'Oppenheimer', ano: 2023, nota: 8.9, categoria: 'Drama', imagem: 'https://placehold.co/200x300/1a1a2e/e50914?text=Oppenheimer' },
  { id: 3, slug: 'pobres-criaturas', titulo: 'Pobres Criaturas', ano: 2023, nota: 8.0, categoria: 'Fantasia', imagem: 'https://placehold.co/200x300/1a1a2e/e50914?text=Pobres+Criaturas' },
  { id: 4, slug: 'zona-de-interesse', titulo: 'A Zona de Interesse', ano: 2023, nota: 7.8, categoria: 'Drama', imagem: 'https://placehold.co/200x300/1a1a2e/e50914?text=Zona+de+Interesse' },
  { id: 5, slug: 'furiosa', titulo: 'Furiosa', ano: 2024, nota: 7.5, categoria: 'Ação', imagem: 'https://placehold.co/200x300/1a1a2e/e50914?text=Furiosa' },
  { id: 6, slug: 'alien-romulus', titulo: 'Alien: Romulus', ano: 2024, nota: 7.3, categoria: 'Terror', imagem: 'https://placehold.co/200x300/1a1a2e/e50914?text=Alien+Romulus' },
];

export const SERIES = [
  { id: 1, slug: 'the-last-of-us-s2', titulo: 'The Last of Us — T2', ano: 2025, nota: 9.2, categoria: 'Drama', imagem: 'https://placehold.co/200x300/0d1117/e50914?text=The+Last+of+Us' },
  { id: 2, slug: 'severance-s2', titulo: 'Severance — T2', ano: 2025, nota: 9.0, categoria: 'Thriller', imagem: 'https://placehold.co/200x300/0d1117/e50914?text=Severance' },
  { id: 3, slug: 'andor-s2', titulo: 'Andor — T2', ano: 2025, nota: 8.8, categoria: 'Ficção Científica', imagem: 'https://placehold.co/200x300/0d1117/e50914?text=Andor' },
  { id: 4, slug: 'the-bear-s3', titulo: 'The Bear — T3', ano: 2024, nota: 8.7, categoria: 'Drama', imagem: 'https://placehold.co/200x300/0d1117/e50914?text=The+Bear' },
  { id: 5, slug: 'stranger-things-s5', titulo: 'Stranger Things — T5', ano: 2025, nota: 8.9, categoria: 'Terror', imagem: 'https://placehold.co/200x300/0d1117/e50914?text=Stranger+Things' },
  { id: 6, slug: 'house-of-dragon-s3', titulo: 'House of the Dragon — T3', ano: 2025, nota: 8.4, categoria: 'Fantasia', imagem: 'https://placehold.co/200x300/0d1117/e50914?text=HotD' },
];

export const MUSICA = [
  { id: 1, slug: 'sabrina-carpenter-short-n-sweet', titulo: 'Short n\' Sweet', artista: 'Sabrina Carpenter', ano: 2024, categoria: 'Pop', imagem: 'https://placehold.co/200x200/1a0a2e/e50914?text=Short+n+Sweet' },
  { id: 2, slug: 'kendrick-lamar-gnx', titulo: 'GNX', artista: 'Kendrick Lamar', ano: 2024, categoria: 'Hip-Hop', imagem: 'https://placehold.co/200x200/1a0a2e/e50914?text=GNX' },
  { id: 3, slug: 'charli-xcx-brat', titulo: 'Brat', artista: 'Charli XCX', ano: 2024, categoria: 'Pop', imagem: 'https://placehold.co/200x200/1a0a2e/e50914?text=Brat' },
  { id: 4, slug: 'beyonce-cowboy-carter', titulo: 'Cowboy Carter', artista: 'Beyoncé', ano: 2024, categoria: 'Country/R&B', imagem: 'https://placehold.co/200x200/1a0a2e/e50914?text=Cowboy+Carter' },
  { id: 5, slug: 'taylor-swift-tortured-poets', titulo: 'The Tortured Poets Department', artista: 'Taylor Swift', ano: 2024, categoria: 'Pop', imagem: 'https://placehold.co/200x200/1a0a2e/e50914?text=TTPD' },
  { id: 6, slug: 'childish-gambino-bando-stone', titulo: 'Bando Stone and The New World', artista: 'Childish Gambino', ano: 2024, categoria: 'Hip-Hop/Soul', imagem: 'https://placehold.co/200x200/1a0a2e/e50914?text=Bando+Stone' },
];

export const JOGOS = [
  { id: 1, slug: 'astro-bot', titulo: 'Astro Bot', plataforma: 'PS5', ano: 2024, nota: 9.4, categoria: 'Plataforma', imagem: 'https://placehold.co/200x300/0a1a0a/e50914?text=Astro+Bot' },
  { id: 2, slug: 'elden-ring-shadow', titulo: 'Elden Ring: Shadow of the Erdtree', plataforma: 'Multi', ano: 2024, nota: 9.1, categoria: 'RPG', imagem: 'https://placehold.co/200x300/0a1a0a/e50914?text=Elden+Ring' },
  { id: 3, slug: 'black-myth-wukong', titulo: 'Black Myth: Wukong', plataforma: 'Multi', ano: 2024, nota: 8.7, categoria: 'Ação/RPG', imagem: 'https://placehold.co/200x300/0a1a0a/e50914?text=Black+Myth' },
  { id: 4, slug: 'balatro', titulo: 'Balatro', plataforma: 'Multi', ano: 2024, nota: 9.3, categoria: 'Roguelike', imagem: 'https://placehold.co/200x300/0a1a0a/e50914?text=Balatro' },
  { id: 5, slug: 'animal-well', titulo: 'Animal Well', plataforma: 'Multi', ano: 2024, nota: 8.8, categoria: 'Metroidvania', imagem: 'https://placehold.co/200x300/0a1a0a/e50914?text=Animal+Well' },
  { id: 6, slug: 'dragon-age-veilguard', titulo: 'Dragon Age: The Veilguard', plataforma: 'Multi', ano: 2024, nota: 7.9, categoria: 'RPG', imagem: 'https://placehold.co/200x300/0a1a0a/e50914?text=Dragon+Age' },
];

export const NOTICIAS = [
  {
    id: 1,
    slug: 'oscar-2026-indicados',
    titulo: 'Oscar 2026: Confira todos os indicados às principais categorias',
    descricao: 'A Academia divulgou hoje a lista completa dos indicados ao prêmio mais importante do cinema mundial.',
    categoria: 'Cinema',
    autor: 'Redação 3W',
    data: '2026-01-17',
    imagem: 'https://placehold.co/600x400/1a1a2e/e50914?text=Oscar+2026',
    tempo_leitura: 5,
  },
  {
    id: 2,
    slug: 'stranger-things-s5-data',
    titulo: 'Stranger Things: Netflix confirma data de estreia da última temporada',
    descricao: 'A plataforma anunciou oficialmente quando os fãs poderão assistir ao desfecho da série.',
    categoria: 'Séries',
    autor: 'Redação 3W',
    data: '2026-02-10',
    imagem: 'https://placehold.co/600x400/0d1117/e50914?text=Stranger+Things',
    tempo_leitura: 3,
  },
  {
    id: 3,
    slug: 'lollapalooza-brasil-2026',
    titulo: 'Lollapalooza Brasil 2026: Line-up completo divulgado com surpresas',
    descricao: 'O festival anuncia os headliners e artistas do line-up completo da edição 2026.',
    categoria: 'Eventos',
    autor: 'Redação 3W',
    data: '2026-03-01',
    imagem: 'https://placehold.co/600x400/1a0a2e/e50914?text=Lolla+2026',
    tempo_leitura: 4,
  },
  {
    id: 4,
    slug: 'gta-vi-trailer',
    titulo: 'GTA VI: Novo trailer mostra gameplay inédito e data de lançamento',
    descricao: 'Rockstar Games surpreende fãs com trailer detalhado mostrando o novo mapa de Vice City.',
    categoria: 'Jogos',
    autor: 'Redação 3W',
    data: '2026-03-15',
    imagem: 'https://placehold.co/600x400/0a1a0a/e50914?text=GTA+VI',
    tempo_leitura: 6,
  },
  {
    id: 5,
    slug: 'beyonce-turnê-brasil',
    titulo: 'Beyoncé anuncia shows no Brasil pela primeira vez em 10 anos',
    descricao: 'A cantora divulga datas para São Paulo e Rio de Janeiro como parte de sua nova turnê mundial.',
    categoria: 'Música',
    autor: 'Redação 3W',
    data: '2026-04-01',
    imagem: 'https://placehold.co/600x400/1a0a2e/e50914?text=Beyonce+Brasil',
    tempo_leitura: 4,
  },
  {
    id: 6,
    slug: 'avatar-3-confirmado',
    titulo: 'Avatar 3: James Cameron confirma subtítulo e teasers do novo filme',
    descricao: 'O diretor revelou detalhes inéditos sobre o terceiro filme da franquia em entrevista exclusiva.',
    categoria: 'Cinema',
    autor: 'Redação 3W',
    data: '2026-04-10',
    imagem: 'https://placehold.co/600x400/1a1a2e/e50914?text=Avatar+3',
    tempo_leitura: 5,
  },
];

export const EVENTOS = [
  { id: 1, slug: 'rock-in-rio-2026', titulo: 'Rock in Rio 2026', data: '2026-09-17', local: 'Cidade do Rock, Rio de Janeiro', categoria: 'Festival', imagem: 'https://placehold.co/400x250/1a0a2e/e50914?text=Rock+in+Rio' },
  { id: 2, slug: 'ccxp-2026', titulo: 'CCXP 2026', data: '2026-12-04', local: 'Expo São Paulo, São Paulo', categoria: 'Cultura Pop', imagem: 'https://placehold.co/400x250/1a1a2e/e50914?text=CCXP+2026' },
  { id: 3, slug: 'tomorrowland-brasil-2026', titulo: 'Tomorrowland Brasil 2026', data: '2026-10-03', local: 'Parque Maeda, Itu/SP', categoria: 'Festival', imagem: 'https://placehold.co/400x250/1a0a2e/e50914?text=Tomorrowland' },
];

export const TRENDING = [
  { posicao: 1, titulo: 'The Last of Us T2', tipo: 'Série', url: '/series/the-last-of-us-s2' },
  { posicao: 2, titulo: 'Duna: Parte Dois', tipo: 'Filme', url: '/filmes/duna-parte-dois' },
  { posicao: 3, titulo: 'Oscar 2026: Indicados', tipo: 'Notícia', url: '/noticias/oscar-2026-indicados' },
  { posicao: 4, titulo: 'Balatro', tipo: 'Jogo', url: '/jogos/balatro' },
  { posicao: 5, titulo: 'Beyoncé no Brasil', tipo: 'Notícia', url: '/noticias/beyonce-turnê-brasil' },
];

export const CATEGORIAS = [
  { slug: 'filmes',  titulo: 'Filmes',   icone: '🎬', descricao: 'Lançamentos e clássicos', cor: 'from-red-900 to-red-700' },
  { slug: 'series',  titulo: 'Séries',   icone: '📺', descricao: 'Maratonas imperdíveis',   cor: 'from-blue-900 to-blue-700' },
  { slug: 'musica',  titulo: 'Música',   icone: '🎵', descricao: 'Álbuns e artistas',       cor: 'from-purple-900 to-purple-700' },
  { slug: 'jogos',   titulo: 'Jogos',    icone: '🎮', descricao: 'Reviews e novidades',     cor: 'from-green-900 to-green-700' },
  { slug: 'eventos', titulo: 'Eventos',  icone: '🎪', descricao: 'Shows e festivais',       cor: 'from-yellow-900 to-yellow-700' },
  { slug: 'noticias',titulo: 'Notícias', icone: '📰', descricao: 'Últimas do entretenimento', cor: 'from-zinc-800 to-zinc-600' },
];
