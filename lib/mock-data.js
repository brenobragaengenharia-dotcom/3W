// Dados do portal 3W Entretenimento
// Baseado nas páginas: @3worlds_entertainment | @3wcomics_ | @3wesports | TikTok @3worlds_entertainment
// Substitua por chamadas à sua API/CMS quando disponível

// ─── REDES SOCIAIS REAIS ──────────────────────────────────────────────────────
export const REDES_SOCIAIS = {
  instagram_principal: 'https://instagram.com/3worlds_entertainment',
  instagram_comics:    'https://instagram.com/3wcomics_',
  instagram_esportes:  'https://instagram.com/3wesports',
  tiktok:              'https://www.tiktok.com/@3worlds_entertainment',
};

// ─── FILMES ───────────────────────────────────────────────────────────────────
export const FILMES = [
  { id: 1, slug: 'super-mario-galaxy-o-filme', titulo: 'Super Mario Galaxy: O Filme', ano: 2026, nota: 6.8, categoria: 'Família', imagem: 'https://image.tmdb.org/t/p/w500/b3WeTp42eJSRuE4UZfyPCOJW4c.jpg' },
  { id: 2, slug: 'um-amor-de-mentiras', titulo: 'Um Amor de Mentiras', ano: 2026, nota: 6.9, categoria: 'Romance', imagem: 'https://image.tmdb.org/t/p/w500/hXNn25hE2SH2kHMPVOLjqDISSxf.jpg' },
  { id: 3, slug: 'devoradores-de-estrelas', titulo: 'Devoradores de Estrelas', ano: 2026, nota: 8.2, categoria: 'Ficção científica', imagem: 'https://image.tmdb.org/t/p/w500/bOzG3SG6gBxHGGHYiq7xXeNb1bG.jpg' },
  { id: 4, slug: 'the-mortuary-assistant', titulo: 'The Mortuary Assistant', ano: 2026, nota: 5.5, categoria: 'Terror', imagem: 'https://image.tmdb.org/t/p/w500/mc3nj2DI1MZeFoAR08zSRDxezzf.jpg' },
  { id: 5, slug: 'missao-refugio', titulo: 'Missão Refúgio', ano: 2026, nota: 6.8, categoria: 'Ação', imagem: 'https://image.tmdb.org/t/p/w500/hSvhZRkbYD9crC4nqy8uCk9EdFH.jpg' },
  { id: 6, slug: 'cara-de-um-focinho-de-outro', titulo: 'Cara de Um, Focinho de Outro', ano: 2026, nota: 7.6, categoria: 'Animação', imagem: 'https://image.tmdb.org/t/p/w500/ftPFJBGbldoWiiPrmesW96zBzdH.jpg' },
  { id: 7, slug: 'bola-pra-cima', titulo: 'Bola pra Cima', ano: 2026, nota: 5.7, categoria: 'Comédia', imagem: 'https://image.tmdb.org/t/p/w500/9uMTLWiDPFWYxEwP11G9Sp9cVAk.jpg' },
  { id: 8, slug: 'ataque-brutal', titulo: 'Ataque Brutal', ano: 2026, nota: 6, categoria: 'Terror', imagem: 'https://image.tmdb.org/t/p/w500/349RbnEbWd38iLlqzELTUppjSt2.jpg' },
  { id: 9, slug: 'maldicao-da-mumia', titulo: 'Maldição da Múmia', ano: 2026, nota: 6.9, categoria: 'Terror', imagem: 'https://image.tmdb.org/t/p/w500/ubN87iHY2DyWtwU2JHS0SQ1KqJu.jpg' },
  { id: 10, slug: 'caminhos-do-crime', titulo: 'Caminhos do Crime', ano: 2026, nota: 7, categoria: 'Crime', imagem: 'https://image.tmdb.org/t/p/w500/3u8Pr8WF9hqMptlnuYL52YXSs8F.jpg' },
  { id: 11, slug: 'os-estranhos-capitulo-final', titulo: 'Os Estranhos: Capítulo Final', ano: 2026, nota: 5.7, categoria: 'Terror', imagem: 'https://image.tmdb.org/t/p/w500/yxvbGxB7rOEaO2Oat0GHL5PiSvX.jpg' },
  { id: 12, slug: 'o-atirador-sem-nacao', titulo: 'O Atirador: Sem Nação', ano: 2026, nota: 6.2, categoria: 'Ação', imagem: 'https://image.tmdb.org/t/p/w500/gGhjs14pomQA6N8parCw5Bl3qoh.jpg' },
];

// ─── PARCERIA INGRESSO.COM (via Awin) ────────────────────────────────────────
// Quando o Awin aprovar o programa Ingresso Partners, substituir por:
//   https://www.awin1.com/cread.php?awinmid=XXXXX&awinaffid=YYYYY&ued=https%3A%2F%2Fwww.ingresso.com%2F
// Usar a env NEXT_PUBLIC_INGRESSO_AWIN_URL para não precisar de redeploy manual.
export const INGRESSO_URL =
  process.env.NEXT_PUBLIC_INGRESSO_AWIN_URL || 'https://www.ingresso.com/';

// ─── SÉRIES ───────────────────────────────────────────────────────────────────
export const SERIES = [
  { id: 1, slug: 'origem', titulo: 'Origem', ano: 2022, nota: 8.2, categoria: 'Mistério', imagem: 'https://image.tmdb.org/t/p/w500/j4DJV91VGx7eAIWPeolV0nOtT1G.jpg' },
  { id: 2, slug: 'the-boys', titulo: 'The Boys', ano: 2019, nota: 8.4, categoria: 'Sci-Fi & Fantasy', imagem: 'https://image.tmdb.org/t/p/w500/in1R2dDc421JxsoRWaIIAqVI2KE.jpg' },
  { id: 3, slug: 'euphoria', titulo: 'Euphoria', ano: 2019, nota: 8.3, categoria: 'Drama', imagem: 'https://image.tmdb.org/t/p/w500/aJrG7OkoTMPWG5c8opz8a93AZPY.jpg' },
  { id: 4, slug: 'o-novato', titulo: 'O Novato', ano: 2018, nota: 8.5, categoria: 'Crime', imagem: 'https://image.tmdb.org/t/p/w500/yCPGrd6fzbftuaH97OUS6tUdE4B.jpg' },
  { id: 5, slug: 'invencivel', titulo: 'INVENCÍVEL', ano: 2021, nota: 8.6, categoria: 'Animação', imagem: 'https://image.tmdb.org/t/p/w500/qhb7RWU9ad9a5m3HbeRRXzjaMXf.jpg' },
  { id: 6, slug: 'stranger-things', titulo: 'Stranger Things', ano: 2016, nota: 8.6, categoria: 'Sci-Fi & Fantasy', imagem: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg' },
  { id: 7, slug: 'yellowstone', titulo: 'Yellowstone', ano: 2018, nota: 8.3, categoria: 'Faroeste', imagem: 'https://image.tmdb.org/t/p/w500/rrOYi7Zj2OmBojo1VuuZM129gic.jpg' },
  { id: 8, slug: 'the-good-doctor-o-bom-doutor', titulo: 'The Good Doctor: O Bom Doutor', ano: 2017, nota: 8.5, categoria: 'Drama', imagem: 'https://image.tmdb.org/t/p/w500/v9WYk0nigzR9NAEjeSmfI6s4XA2.jpg' },
  { id: 9, slug: 'lucifer', titulo: 'Lucifer', ano: 2016, nota: 8.4, categoria: 'Crime', imagem: 'https://image.tmdb.org/t/p/w500/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg' },
  { id: 10, slug: 'reacher', titulo: 'Reacher', ano: 2022, nota: 8.1, categoria: 'Action & Adventure', imagem: 'https://image.tmdb.org/t/p/w500/c9JwFbaBWarL9fwo1NSqsiTj7Zh.jpg' },
  { id: 11, slug: 'better-call-saul', titulo: 'Better Call Saul', ano: 2015, nota: 8.7, categoria: 'Crime', imagem: 'https://image.tmdb.org/t/p/w500/9IPVuAjodjc2FYluWnNvRdOPsCR.jpg' },
  { id: 12, slug: '9-1-1', titulo: '9-1-1', ano: 2018, nota: 8.2, categoria: 'Drama', imagem: 'https://image.tmdb.org/t/p/w500/6njUqsd3By2mJsdZm1P0moPLzs3.jpg' },
];

// ─── MÚSICA ───────────────────────────────────────────────────────────────────
export const MUSICA = [
  { id: 1, slug: 'sabrina-carpenter-short-n-sweet', titulo: "Short n' Sweet", artista: 'Sabrina Carpenter', ano: 2024, categoria: 'Pop', imagem: 'https://placehold.co/200x200/1a0a2e/FF6600?text=Short+n+Sweet' },
  { id: 2, slug: 'kendrick-lamar-gnx', titulo: 'GNX', artista: 'Kendrick Lamar', ano: 2024, categoria: 'Hip-Hop', imagem: 'https://placehold.co/200x200/1a0a2e/FF6600?text=GNX' },
  { id: 3, slug: 'charli-xcx-brat', titulo: 'Brat', artista: 'Charli XCX', ano: 2024, categoria: 'Pop', imagem: 'https://placehold.co/200x200/1a0a2e/FF6600?text=Brat' },
  { id: 4, slug: 'beyonce-cowboy-carter', titulo: 'Cowboy Carter', artista: 'Beyoncé', ano: 2024, categoria: 'Country/R&B', imagem: 'https://placehold.co/200x200/1a0a2e/FF6600?text=Cowboy+Carter' },
  { id: 5, slug: 'taylor-swift-tortured-poets', titulo: 'The Tortured Poets Department', artista: 'Taylor Swift', ano: 2024, categoria: 'Pop', imagem: 'https://placehold.co/200x200/1a0a2e/FF6600?text=TTPD' },
  { id: 6, slug: 'lady-gaga-mayhem', titulo: 'MAYHEM', artista: 'Lady Gaga', ano: 2025, categoria: 'Pop', imagem: 'https://placehold.co/200x200/1a0a2e/FF6600?text=MAYHEM' },
];

// ─── JOGOS ────────────────────────────────────────────────────────────────────
export const JOGOS = [
  { id: 1, slug: 'astro-bot', titulo: 'Astro Bot', plataforma: 'PS5', ano: 2024, nota: 9.4, categoria: 'Plataforma', imagem: 'https://placehold.co/200x300/0a1a0a/FF6600?text=Astro+Bot' },
  { id: 2, slug: 'elden-ring-shadow', titulo: 'Elden Ring: Shadow of the Erdtree', plataforma: 'Multi', ano: 2024, nota: 9.1, categoria: 'RPG', imagem: 'https://placehold.co/200x300/0a1a0a/FF6600?text=Elden+Ring' },
  { id: 3, slug: 'gta-vi', titulo: 'GTA VI', plataforma: 'Multi', ano: 2026, nota: null, categoria: 'Ação', imagem: 'https://placehold.co/200x300/0a1a0a/FF6600?text=GTA+VI' },
  { id: 4, slug: 'balatro', titulo: 'Balatro', plataforma: 'Multi', ano: 2024, nota: 9.3, categoria: 'Roguelike', imagem: 'https://placehold.co/200x300/0a1a0a/FF6600?text=Balatro' },
  { id: 5, slug: 'marvel-rivals', titulo: 'Marvel Rivals', plataforma: 'Multi', ano: 2024, nota: 8.2, categoria: 'Ação / Marvel', imagem: 'https://placehold.co/200x300/0a1a0a/FF6600?text=Marvel+Rivals' },
  { id: 6, slug: 'death-stranding-2', titulo: 'Death Stranding 2', plataforma: 'PS5', ano: 2025, nota: 8.8, categoria: 'Aventura', imagem: 'https://placehold.co/200x300/0a1a0a/FF6600?text=Death+Stranding+2' },
];

// ─── COMICS (novo — baseado em @3wcomics_) ────────────────────────────────────
// Foco: Marvel, HQs, livros de recomendação
export const COMICS = [
  { id: 1, slug: 'marvel-guerra-secreta-2025', titulo: 'Marvel: Guerra Secreta 2025', editora: 'Marvel Comics', ano: 2025, categoria: 'Marvel', imagem: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/b0/51dee6dd91671/portrait_uncanny.jpg' },
  { id: 2, slug: 'batman-o-cavaleiro-das-trevas-deluxe', titulo: 'Batman: O Cavaleiro das Trevas', editora: 'DC / Panini', ano: 2024, categoria: 'DC Comics', imagem: 'https://www.coverbrowser.com/image/batman-dark-knight-returns/1-1.jpg' },
  { id: 3, slug: 'saga-vol-12', titulo: 'Saga — Volume 12', editora: 'Image Comics', ano: 2024, categoria: 'HQ Indie', imagem: 'https://cdn.imagecomics.com/assets/i/releases/1101740/saga-tp-vol-12_8477e0a151.jpg' },
  { id: 4, slug: 'vingadores-origens-omnibus', titulo: 'Vingadores: Origens Omnibus', editora: 'Marvel / Panini', ano: 2025, categoria: 'Marvel', imagem: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/70/4ec2b50934674/portrait_uncanny.jpg' },
  { id: 5, slug: 'sandman-edicao-definitiva', titulo: 'Sandman — Edição Definitiva', editora: 'DC / Vertigo', ano: 2024, categoria: 'DC / Vertigo', imagem: 'https://static.dc.com/dc/files/default_images/abs_sandman_v1_5bdb695f4bf592.35400757.jpg' },
  { id: 6, slug: 'invincible-compendio-3', titulo: 'Invincible — Compêndio 3', editora: 'Image Comics', ano: 2024, categoria: 'HQ Indie', imagem: 'https://cdn.imagecomics.com/assets/i/releases/76910/invincible-compendium-vol-3-tp_e13194fc9d.jpg' },
];

export const LIVROS_RECOMENDADOS = [
  { id: 1, slug: 'o-problema-dos-tres-corpos', titulo: 'O Problema dos Três Corpos', autor: 'Liu Cixin', genero: 'Ficção Científica', imagem: 'https://covers.openlibrary.org/b/isbn/9780765382030-L.jpg' },
  { id: 2, slug: 'fundacao', titulo: 'Fundação', autor: 'Isaac Asimov', genero: 'Ficção Científica', imagem: 'https://covers.openlibrary.org/b/isbn/9780553293357-L.jpg' },
  { id: 3, slug: 'duna-o-livro', titulo: 'Duna', autor: 'Frank Herbert', genero: 'Ficção Científica', imagem: 'https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg' },
  { id: 4, slug: 'watchmen', titulo: 'Watchmen', autor: 'Alan Moore', genero: 'HQ / Graphic Novel', imagem: 'https://covers.openlibrary.org/b/isbn/9781779501127-L.jpg' },
];

// ─── ESPORTES (novo — baseado em @3wesports) ──────────────────────────────────
// Foco: Futebol, NBA, Fórmula 1

export const NOTICIAS_FUTEBOL = [
  {
    id: 110, slug: 'brasileirao-2026-rodada-4-lider',
    titulo: 'Brasileirão 2026: Flamengo e Palmeiras lideram após 4ª rodada com 100%',
    descricao: 'Rubro-Negro e Alviverde se mantêm invictos nas primeiras quatro rodadas do Brasileirão e abrem vantagem sobre os perseguidores.',
    categoria: 'Futebol', autor: 'Redação 3W Esportes', data: '2026-04-23',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Palmeiras-atletico-mg-brasileiro-2022.png', tempo_leitura: 4,
  },
  {
    id: 103, slug: 'yamal-sofre-lesao-no-tendao-da-coxa-mas-deve-jogar-a-copa-do-mundo', titulo: 'Yamal sofre lesão no tendão da coxa, mas deve jogar a Copa do Mundo',
    descricao: 'Astro do Barcelona e da seleção espanhola passou por exames iniciais após lesão e aguarda diagnóstico mais detalhado nos próximos dias.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-04-23',
    imagem: 'https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0422%2Fr1647717_1296x729_16%2D9.jpg', tempo_leitura: 4,
  },
  {
    id: 102, slug: 'flamengo-bate-vitoria-no-maracana-e-abre-vantagem-na-copa-do-brasil', titulo: 'Flamengo bate Vitória no Maracanã e abre vantagem na Copa do Brasil',
    descricao: 'Com Evertton Araújo quebrando um jejum no ano, o Rubro-Negro saiu na frente na quinta fase da Copa do Brasil diante de sua torcida.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-04-23',
    imagem: 'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0423%2Fr1647816_1236x696_16%2D9.jpg', tempo_leitura: 4,
  },
  {
    id: 101, slug: 'neymar-bate-na-trave-e-santos-empata-sem-gols-com-coritiba-na-copa-do-brasil', titulo: 'Neymar bate na trave e Santos empata sem gols com Coritiba na Copa do Brasil',
    descricao: 'O Santos estreou na Copa do Brasil com empate frustrante em 0 a 0 diante do Coritiba, na Vila Belmiro, chegando ao terceiro jogo seguido sem vencer em casa.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-04-23',
    imagem: 'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0423%2Fr1647773_1296x729_16%2D9.jpg', tempo_leitura: 4,
  },
  {
    id: 1, slug: 'brasileirao-2026-rodada-1', titulo: 'Brasileirão 2026: Resultados e destaques da 1ª rodada',
    descricao: 'Confira todos os gols, lances e análises da abertura do Campeonato Brasileiro.',
    categoria: 'Futebol', autor: 'Redação 3W Esportes', data: '2026-04-13',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Palmeiras-atletico-mg-brasileiro-2022.png', tempo_leitura: 4,
  },
  {
    id: 2, slug: 'champions-league-semifinais', titulo: 'Champions League: Semifinais definidas após semana de emoção',
    descricao: 'Os quatro clubes que vão disputar as semifinais da maior competição do futebol europeu.',
    categoria: 'Futebol', autor: 'Redação 3W Esportes', data: '2026-04-15',
    imagem: 'https://wallpapercave.com/wp/wp8095099.jpg', tempo_leitura: 5,
  },
  {
    id: 3, slug: 'copa-do-mundo-2026-grupos', titulo: 'Copa do Mundo 2026: Brasil no Grupo A com adversários definidos',
    descricao: 'A seleção brasileira conhece seus adversários na fase de grupos do Mundial.',
    categoria: 'Futebol', autor: 'Redação 3W Esportes', data: '2026-04-10',
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/d/d7/Logo_copa_2026.png', tempo_leitura: 6,
  },
];

export const NOTICIAS_NBA = [
  {
    id: 111, slug: 'thunder-elimina-lakers-playoffs-2026',
    titulo: 'Thunder elimina Lakers nos playoffs e avança às semifinais da Conferência Oeste',
    descricao: 'Oklahoma City Thunder despacha os Lakers em cinco jogos e confirma que é o time mais sólido do Oeste nesta temporada de playoffs.',
    categoria: 'NBA', autor: 'Redação 3W Esportes', data: '2026-04-23',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Bulls_Pacers_2011_playoffs_game_1_jump_ball.jpg', tempo_leitura: 4,
  },
  {
    id: 4, slug: 'nba-playoffs-2026-confrontos', titulo: 'NBA Playoffs 2026: Todos os confrontos do primeiro round',
    descricao: 'Celtics, Thunder, Knicks e Lakers lideram os confrontos mais aguardados dos playoffs.',
    categoria: 'NBA', autor: 'Redação 3W Esportes', data: '2026-04-16',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Bulls_Pacers_2011_playoffs_game_1_jump_ball.jpg', tempo_leitura: 5,
  },
  {
    id: 5, slug: 'lebron-james-record-pontos', titulo: 'LeBron James bate novo recorde histórico nos playoffs',
    descricao: 'O Rei supera mais uma marca histórica e consolida seu legado como o maior da história.',
    categoria: 'NBA', autor: 'Redação 3W Esportes', data: '2026-04-14',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/2/23/LeBron_James%2C_Paris_2024.jpg', tempo_leitura: 4,
  },
];

export const NOTICIAS_F1 = [
  {
    id: 8, slug: 'fia-regulamento-f1-2026-miami', titulo: 'FIA anuncia mudanças no regulamento da F1 2026 a partir do GP de Miami',
    descricao: 'Pacote de alterações em qualificação, corrida, largadas e pista molhada entra em vigor antes do GP de Miami, em 3 de maio, após votação do WMSC.',
    categoria: 'Fórmula 1', autor: 'Redação 3W Esportes', data: '2026-04-20',
    imagem: '/images/noticias/fia-f1-2026-miami.jpg', tempo_leitura: 7, destaque: true,
  },
  {
    id: 6, slug: 'f1-2026-novas-regras-motores', titulo: 'F1 2026: Novos regulamentos de motor mudam o grid completamente',
    descricao: 'A era dos novos motores híbridos de alta performance chega à Fórmula 1 em 2026.',
    categoria: 'Fórmula 1', autor: 'Redação 3W Esportes', data: '2026-04-12',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/2025_Japan_GP_-_Safety_Car_-_Race.jpg', tempo_leitura: 6,
  },
  {
    id: 7, slug: 'verstappen-vs-hamilton-2026', titulo: 'Verstappen vs Hamilton: A batalha que promete dominar 2026',
    descricao: 'Após a mudança de Hamilton para a Ferrari, o duelo mais esperado do esporte a motor.',
    categoria: 'Fórmula 1', autor: 'Redação 3W Esportes', data: '2026-04-08',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Max_Verstappen_overtaking_Lewis_Hamilton_2017_Malaysia_2.jpg', tempo_leitura: 5,
  },
];

// Todas as notícias de esportes juntas
export const NOTICIAS_ESPORTES = [...NOTICIAS_FUTEBOL, ...NOTICIAS_NBA, ...NOTICIAS_F1];

// ─── NOTÍCIAS GERAIS ──────────────────────────────────────────────────────────
export const NOTICIAS = [
  {
    id: 101, slug: 'gta-vi-data-lancamento-confirmada',
    titulo: 'GTA VI: Rockstar confirma data de lançamento e mostra novo trailer',
    descricao: 'A Rockstar Games revelou oficialmente quando GTA VI chega às plataformas e divulgou imagens inéditas do open world mais ambicioso da história.',
    categoria: 'Games', autor: 'Redação 3W', data: '2026-04-23',
    imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2547050/header.jpg', tempo_leitura: 4,
  },
  {
    id: 102, slug: 'stranger-things-5-data-estreia-netflix',
    titulo: 'Stranger Things 5: Netflix confirma data de estreia e divulga primeiro teaser',
    descricao: 'A última temporada de Stranger Things tem data marcada e o teaser já entregou o tom sombrio que os fãs esperavam para o capítulo final.',
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-04-23',
    imagem: 'https://image.tmdb.org/t/p/w780/twfKp60THrcOIep9sjHODOOfO8d.jpg', tempo_leitura: 3,
  },
  {
    id: 103, slug: 'x-men-97-temporada-2-confirmada',
    titulo: "X-Men '97 T2: Marvel confirma produção e revela nova ameaça para os mutantes",
    descricao: "A animação que revigorou o universo dos X-Men terá segunda temporada confirmada, com a Marvel entregando detalhes sobre o arco principal.",
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-04-22',
    imagem: 'https://image.tmdb.org/t/p/w780/yozcBJDEpPpDWFovsMGvPjQfHRY.jpg', tempo_leitura: 3,
  },
  {
    id: 104, slug: 'avengers-doomsday-trailer-final',
    titulo: 'Avengers: Doomsday ganha trailer final com cenas inéditas do Doutor Destino',
    descricao: 'O trailer definitivo de Doomsday entrega o visual completo do Doutor Destino em ação e confirma o maior crossover da Marvel desde Endgame.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-04-22',
    imagem: 'https://image.tmdb.org/t/p/w1280/3eOINbgRs8WiWfQfViXeuZ3enrs.jpg', tempo_leitura: 4,
  },
  {
    id: 1, slug: 'avengers-doomsday-elenco-completo',
    titulo: 'Avengers: Doomsday revela elenco completo com retornos surpresa',
    descricao: 'A Marvel Studios divulgou o elenco definitivo do filme mais aguardado de 2026, com retornos que vão chocar os fãs.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-04-15',
    imagem: 'https://image.tmdb.org/t/p/w1280/3eOINbgRs8WiWfQfViXeuZ3enrs.jpg', tempo_leitura: 5,
  },
  {
    id: 2, slug: 'the-last-of-us-s2-estreia', titulo: 'The Last of Us T2: Estreia quebra recordes na HBO e Max',
    descricao: 'O primeiro episódio da segunda temporada bate todos os recordes de audiência da plataforma.',
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-04-13',
    imagem: 'https://image.tmdb.org/t/p/w780/lY2DhbA7Hy44fAKddr06UrXWWaQ.jpg', tempo_leitura: 3,
  },
  {
    id: 3, slug: 'daredevil-born-again-review', titulo: 'Review: Daredevil Born Again é o melhor da Marvel no streaming',
    descricao: 'A série que ressuscita o Demolidor é uma obra-prima de violência elegante e drama humano.',
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-04-10',
    imagem: 'https://image.tmdb.org/t/p/w780/qrTAc0ZtQ859Qu5O8cixJzNJpQs.jpg', tempo_leitura: 7,
  },
  {
    id: 4, slug: 'copa-do-mundo-2026-brasil', titulo: 'Copa do Mundo 2026: Brasil no Grupo A — análise completa',
    descricao: 'Analisamos os adversários do Brasil e as chances da seleção na Copa sediada em EUA, México e Canadá.',
    categoria: 'Esportes', autor: 'Redação 3W', data: '2026-04-10',
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/d/d7/Logo_copa_2026.png', tempo_leitura: 6,
  },
  {
    id: 5, slug: 'marvel-guerra-secreta-review', titulo: 'Marvel: Guerra Secreta 2025 — a HQ que vai mudar tudo',
    descricao: 'O crossover mais ambicioso da Marvel em anos redefine o universo e prepara o terreno para o cinema.',
    categoria: 'Comics', autor: 'Redação 3W', data: '2026-04-08',
    imagem: 'https://images.thedirect.com/media/article_full/avengers-2026-m.jpg', tempo_leitura: 5,
  },
];

// ─── PARCERIA NETSHOES ────────────────────────────────────────────────────────
export const NETSHOES_AFFILIATE_URL = 'https://apretailer.com.br/click/69e18b542bfa814d6914f012/182430/358556/3W/Entretenimento';

export const PRODUTOS_NETSHOES = [
  // Futebol — Chuteiras
  { id: 1,  titulo: 'Chuteira Nike Mercurial Vapor 15 Club Futsal',          categoria: 'Chuteira',  imagem: 'https://static.netshoes.com.br/produtos/chuteira-nike-mercurial-vapor-15-club-futsal/26/JD8-1387-026/JD8-1387-026_zoom1.jpg?ts=1772717681', link_compra: NETSHOES_AFFILIATE_URL },
  { id: 2,  titulo: 'Chuteira Adidas Predator Artilheira 24 Society',        categoria: 'Chuteira',  imagem: 'https://static.netshoes.com.br/produtos/chuteira-society-adidas-predator-artilheira-24-unissex/74/FB9-4075-274/FB9-4075-274_zoom1.jpg?ts=1776399401', link_compra: NETSHOES_AFFILIATE_URL },
  { id: 3,  titulo: 'Chuteira Adidas Predator 24 Club Society',              categoria: 'Chuteira',  imagem: 'https://static.netshoes.com.br/produtos/chuteira-society-adidas-predator-24-club-unissex/26/FB9-4108-026/FB9-4108-026_zoom1.jpg?ts=1774449082', link_compra: NETSHOES_AFFILIATE_URL },
  { id: 4,  titulo: 'Chuteira Mizuno Morelia Club Society',                  categoria: 'Chuteira',  imagem: 'https://static.netshoes.com.br/produtos/chuteira-society-mizuno-morelia-club-unissex/26/2FU-8376-026/2FU-8376-026_zoom1.jpg?ts=1776483701', link_compra: NETSHOES_AFFILIATE_URL },
  // Futebol — Bola & Camisas
  { id: 5,  titulo: 'Bola Adidas Trionda Copa do Mundo 2026',                categoria: 'Futebol',   imagem: 'https://static.netshoes.com.br/produtos/bola-de-futebol-campo-adidas-trionda-copa-do-mundo-2026-club/14/FBA-7868-014/FBA-7868-014_zoom1.jpg?ts=1776483831', link_compra: NETSHOES_AFFILIATE_URL },
  { id: 6,  titulo: 'Camisa Flamengo II 25/26 Torcedor Adidas',             categoria: 'Futebol',   imagem: 'https://static.netshoes.com.br/produtos/camisa-flamengo-ii-2526-sn-torcedor-adidas-masculina/14/FBA-3568-014/FBA-3568-014_zoom1.jpg?ts=1776482687', link_compra: NETSHOES_AFFILIATE_URL },
  { id: 7,  titulo: 'Camisa Nike Corinthians I 2025/26 Jogador',            categoria: 'Futebol',   imagem: 'https://static.netshoes.com.br/produtos/camisa-nike-corinthians-i-202526-jogador-masculina/28/SGL-0184-028/SGL-0184-028_zoom1.jpg?ts=1773313268', link_compra: NETSHOES_AFFILIATE_URL },
  // Basquete — Tênis
  { id: 8,  titulo: 'Tênis Nike Precision 7 Basquete Masculino',            categoria: 'Basquete',  imagem: 'https://static.netshoes.com.br/produtos/tenis-nike-precision-7-masculino/58/SGL-0202-158/SGL-0202-158_zoom1.jpg?ts=1775963901', link_compra: NETSHOES_AFFILIATE_URL },
  { id: 9,  titulo: 'Tênis Adidas AE 1 Low Basquete',                       categoria: 'Basquete',  imagem: 'https://static.netshoes.com.br/produtos/tenis-adidas-ae-1-low/06/FBA-0926-006/FBA-0926-006_zoom1.jpg?ts=1772075324', link_compra: NETSHOES_AFFILIATE_URL },
  { id: 10, titulo: 'Tênis Nike GT Jump Academy Basquete Masculino',        categoria: 'Basquete',  imagem: 'https://static.netshoes.com.br/produtos/tenis-nike-gt-jump-academy-maculino/84/JD8-9808-384/JD8-9808-384_zoom1.jpg?ts=1773976835', link_compra: NETSHOES_AFFILIATE_URL },
  // Corrida — Tênis
  { id: 11, titulo: 'Tênis Adidas Response Runner Corrida',                 categoria: 'Corrida',   imagem: 'https://static.netshoes.com.br/produtos/tenis-adidas-response-runner/26/FBA-2902-026/FBA-2902-026_zoom1.jpg?ts=1776483056', link_compra: NETSHOES_AFFILIATE_URL },
  { id: 12, titulo: 'Tênis Nike Revolution 7 Masculino Corrida',            categoria: 'Corrida',   imagem: 'https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-masculino/06/JD8-6364-006/JD8-6364-006_zoom1.jpg?ts=1774153689', link_compra: NETSHOES_AFFILIATE_URL },
];

// ─── PARCERIA PANINI ──────────────────────────────────────────────────────────
export const PANINI_AFFILIATE_URL = 'https://apretailer.com.br/click/69e18b542bfa814d5d693cca/151159/358556/3W/Entretenimento';

// 12 HQs (Marvel + DC) disponíveis na Panini
export const HQS_PANINI = [
  { id: 1,  slug: 'homem-aranha-kraven-panini',           titulo: 'Homem-Aranha: A Última Caçada do Kraven', editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/12794300-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 2,  slug: 'x-men-dias-futuro-esquecido-panini',   titulo: 'X-Men: Dias de Um Futuro Esquecido',      editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/535973-L.jpg',  link_compra: PANINI_AFFILIATE_URL },
  { id: 3,  slug: 'demolidor-nascido-de-novo-panini',     titulo: 'Demolidor: Nascido de Novo',              editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/7591097-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 4,  slug: 'capitao-america-soldado-invernal-pan', titulo: 'Capitão América: O Soldado Invernal',     editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/7637873-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 5,  slug: 'vingadores-gauntlet-infinito-panini',  titulo: 'Vingadores: O Gauntlet do Infinito',      editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/8796628-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 6,  slug: 'pantera-negra-nacao-panini',           titulo: 'Pantera Negra: Uma Nação Sob Nossos Pés', editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/8185377-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 7,  slug: 'batman-piada-mortal-panini',           titulo: 'Batman: A Piada Mortal',                  editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/2737891-L.jpg',  link_compra: PANINI_AFFILIATE_URL },
  { id: 8,  slug: 'batman-asilo-arkham-panini',           titulo: 'Batman: Asilo Arkham',                    editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://books.google.com/books/content?id=8KhEEAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api', link_compra: PANINI_AFFILIATE_URL },
  { id: 9,  slug: 'liga-da-justica-origem-panini',        titulo: 'Liga da Justiça: Origem',                 editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/15157667-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 10, slug: 'mulher-maravilha-sangue-panini',       titulo: 'Mulher-Maravilha: Sangue',                editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/7861362-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 11, slug: 'superman-morte-retorno-panini',        titulo: 'Superman: Morte e Retorno',               editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/1729506-L.jpg',  link_compra: PANINI_AFFILIATE_URL },
  { id: 12, slug: 'flash-correndo-infinito-panini',       titulo: 'Flash: Flashpoint',                       editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/11883036-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 13, slug: 'watchmen-panini',                      titulo: 'Watchmen',                                editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/11571982-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 14, slug: 'batman-longo-halloween-panini',         titulo: 'Batman: O Longo Halloween',               editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/798282-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 15, slug: 'batman-ano-um-panini',                  titulo: 'Batman: Ano Um',                          editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/749311-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 16, slug: 'v-de-vinganca-panini',                  titulo: 'V de Vingança',                           editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/12293384-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 17, slug: 'sandman-preludio-panini',               titulo: 'Sandman: Prelúdios e Noturnos',           editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/13500635-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 18, slug: 'crise-infinitas-terras-panini',         titulo: 'Crise nas Infinitas Terras',              editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/877104-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 19, slug: 'lanterna-verde-renascimento-panini',    titulo: 'Lanterna Verde: Renascimento',            editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/749102-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 20, slug: 'superman-terra-um-panini',              titulo: 'Superman: Terra Um Vol. 1',               editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/6666053-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 21, slug: 'esquadrao-suicida-panini',              titulo: 'Esquadrão Suicida: Missão Suicida',       editora: 'DC/Panini',     ano: 2024, categoria: 'DC Comics', imagem: 'https://covers.openlibrary.org/b/id/7436710-L.jpg',           link_compra: PANINI_AFFILIATE_URL },
  { id: 22, slug: 'homem-aranha-azul-panini',              titulo: 'Homem-Aranha: Azul',                      editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/535727-L.jpg',            link_compra: PANINI_AFFILIATE_URL },
  { id: 23, slug: 'guardioes-galaxia-vol1-panini',         titulo: 'Guardiões da Galáxia Vol. 1',             editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/14603155-L.jpg',          link_compra: PANINI_AFFILIATE_URL },
  { id: 24, slug: 'thor-assassino-deuses-panini',          titulo: 'Thor: O Assassino dos Deuses',            editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/8459964-L.jpg',           link_compra: PANINI_AFFILIATE_URL },
  { id: 25, slug: 'homem-ferro-extremis-panini',           titulo: 'Homem de Ferro: Extremis',                editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/8459565-L.jpg',           link_compra: PANINI_AFFILIATE_URL },
  { id: 26, slug: 'jessica-jones-alias-panini',            titulo: 'Jessica Jones: Alias Vol. 1',             editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/535613-L.jpg',            link_compra: PANINI_AFFILIATE_URL },
  { id: 27, slug: 'venom-carnificina-panini',              titulo: 'Venom: Carnificina Absoluta',             editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/12649895-L.jpg',          link_compra: PANINI_AFFILIATE_URL },
  { id: 28, slug: 'demolidor-sem-medo-panini',             titulo: 'Demolidor: O Homem sem Medo',             editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/7474172-L.jpg',           link_compra: PANINI_AFFILIATE_URL },
  { id: 29, slug: 'doutor-estranho-loucura-panini',        titulo: 'Doutor Estranho: O Caminho da Loucura',   editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/9137226-L.jpg',           link_compra: PANINI_AFFILIATE_URL },
  { id: 30, slug: 'spider-verse-panini',                   titulo: 'Homem-Aranha: Spider-Verse',              editora: 'Marvel/Panini', ano: 2024, categoria: 'Marvel',    imagem: 'https://covers.openlibrary.org/b/id/12581771-L.jpg',          link_compra: PANINI_AFFILIATE_URL },
];

// 12 Mangás publicados pela Panini no Brasil
export const LIVROS_PANINI = [
  { id: 1,  slug: 'dragon-ball-super-vol-1-panini',    titulo: 'Dragon Ball Super — Vol. 1',      autor: 'Akira Toriyama',    genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/14859007-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 2,  slug: 'naruto-vol-1-panini',               titulo: 'Naruto — Vol. 1',                 autor: 'Masashi Kishimoto', genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/1041545-L.jpg',  link_compra: PANINI_AFFILIATE_URL },
  { id: 3,  slug: 'one-piece-vol-1-panini',            titulo: 'One Piece — Vol. 1',              autor: 'Eiichiro Oda',      genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/15173127-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 4,  slug: 'ataque-dos-titas-vol-1-panini',     titulo: 'Ataque dos Titãs — Vol. 1',       autor: 'Hajime Isayama',    genero: 'Mangá Seinen',   imagem: 'https://covers.openlibrary.org/b/id/7471058-L.jpg',  link_compra: PANINI_AFFILIATE_URL },
  { id: 5,  slug: 'demon-slayer-vol-1-panini',         titulo: 'Demon Slayer — Vol. 1',           autor: 'Koyoharu Gotouge',  genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/8798152-L.jpg',  link_compra: PANINI_AFFILIATE_URL },
  { id: 6,  slug: 'my-hero-academia-vol-1-panini',     titulo: 'My Hero Academia — Vol. 1',       autor: 'Kohei Horikoshi',   genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/8457826-L.jpg',  link_compra: PANINI_AFFILIATE_URL },
  { id: 7,  slug: 'fullmetal-alchemist-vol-1-panini',  titulo: 'Fullmetal Alchemist — Vol. 1',    autor: 'Hiromu Arakawa',    genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/isbn/9781591169208-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 8,  slug: 'death-note-vol-1-panini',           titulo: 'Death Note — Vol. 1',             autor: 'Tsugumi Ohba',      genero: 'Mangá Thriller', imagem: 'https://covers.openlibrary.org/b/id/7962067-L.jpg',  link_compra: PANINI_AFFILIATE_URL },
  { id: 9,  slug: 'tokyo-ghoul-vol-1-panini',          titulo: 'Tokyo Ghoul — Vol. 1',            autor: 'Sui Ishida',        genero: 'Mangá Seinen',   imagem: 'https://covers.openlibrary.org/b/id/7900452-L.jpg',  link_compra: PANINI_AFFILIATE_URL },
  { id: 10, slug: 'bleach-vol-1-panini',               titulo: 'Bleach — Vol. 1',                 autor: 'Tite Kubo',         genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/isbn/9781591162377-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 11, slug: 'jujutsu-kaisen-vol-1-panini',       titulo: 'Jujutsu Kaisen — Vol. 1',         autor: 'Gege Akutami',      genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/9270022-L.jpg',  link_compra: PANINI_AFFILIATE_URL },
  { id: 12, slug: 'one-punch-man-vol-1-panini',        titulo: 'One-Punch Man — Vol. 1',          autor: 'ONE / Yusuke Murata', genero: 'Mangá Shonen',   imagem: 'https://books.google.com/books/content?id=uInMAgAAQBAJ&printsec=frontcover&img=1&zoom=3&source=gbs_api', link_compra: PANINI_AFFILIATE_URL },
  { id: 13, slug: 'chainsaw-man-vol-1-panini',         titulo: 'Chainsaw Man — Vol. 1',           autor: 'Tatsuki Fujimoto',    genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/12794650-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 14, slug: 'hunter-x-hunter-vol-1-panini',      titulo: 'Hunter x Hunter — Vol. 1',        autor: 'Yoshihiro Togashi',   genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/863552-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 15, slug: 'dragon-ball-vol-1-panini',           titulo: 'Dragon Ball — Vol. 1',            autor: 'Akira Toriyama',      genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/14650976-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 16, slug: 'black-clover-vol-1-panini',          titulo: 'Black Clover — Vol. 1',           autor: 'Yūki Tabata',         genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/14624686-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 17, slug: 'fairy-tail-vol-1-panini',            titulo: 'Fairy Tail — Vol. 1',             autor: 'Hiro Mashima',        genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/2405586-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 18, slug: 'vinland-saga-vol-1-panini',          titulo: 'Vinland Saga — Vol. 1',           autor: 'Makoto Yukimura',     genero: 'Mangá Seinen',   imagem: 'https://covers.openlibrary.org/b/id/15135694-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 19, slug: 'spy-x-family-vol-1-panini',          titulo: 'Spy x Family — Vol. 1',           autor: 'Tatsuya Endo',        genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/14582895-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 20, slug: 'berserk-vol-1-panini',               titulo: 'Berserk — Vol. 1',                autor: 'Kentaro Miura',       genero: 'Mangá Seinen',   imagem: 'https://covers.openlibrary.org/b/id/14857363-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 21, slug: 'mob-psycho-vol-1-panini',            titulo: 'Mob Psycho 100 — Vol. 1',         autor: 'ONE',                 genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/13755201-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 22, slug: 'boruto-vol-1-panini',                titulo: 'Boruto — Vol. 1',                 autor: 'Mikio Ikemoto',       genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/10152424-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 23, slug: 'blue-exorcist-vol-1-panini',         titulo: 'Blue Exorcist — Vol. 1',          autor: 'Kazue Kato',          genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/7575031-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 24, slug: 'yu-yu-hakusho-vol-1-panini',         titulo: 'Yu Yu Hakusho — Vol. 1',          autor: 'Yoshihiro Togashi',   genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/13480919-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 25, slug: 'rurouni-kenshin-vol-1-panini',       titulo: 'Rurouni Kenshin — Vol. 1',        autor: 'Nobuhiro Watsuki',    genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/1813482-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 26, slug: 'inuyasha-vol-1-panini',              titulo: 'Inuyasha — Vol. 1',               autor: 'Rumiko Takahashi',    genero: 'Mangá Shonen',   imagem: 'https://covers.openlibrary.org/b/id/2806278-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 27, slug: 'evangelion-vol-1-panini',            titulo: 'Neon Genesis Evangelion — Vol. 1', autor: 'Yoshiyuki Sadamoto', genero: 'Mangá Seinen',   imagem: 'https://covers.openlibrary.org/b/id/813533-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 28, slug: 'sword-art-online-vol-1-panini',      titulo: 'Sword Art Online — Vol. 1',       autor: 'Reki Kawahara / abec', genero: 'Mangá Shonen',  imagem: 'https://covers.openlibrary.org/b/id/8402710-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 29, slug: 'dai-aventura-vol-1-panini',          titulo: 'A Grande Aventura de Dai — Vol. 1', autor: 'Riku Sanjo / Koji Inada', genero: 'Mangá Shonen', imagem: 'https://covers.openlibrary.org/b/id/12727258-L.jpg', link_compra: PANINI_AFFILIATE_URL },
  { id: 30, slug: 'sword-art-online-progressive-vol-1-panini', titulo: 'SAO Progressive — Vol. 1', autor: 'Reki Kawahara / Kiseki Himura', genero: 'Mangá Shonen', imagem: 'https://covers.openlibrary.org/b/id/14626410-L.jpg', link_compra: PANINI_AFFILIATE_URL },
];

// ─── EVENTOS ──────────────────────────────────────────────────────────────────
export const EVENTOS = [
  { id: 1, slug: 'rock-in-rio-2026', titulo: 'Rock in Rio 2026', data: '2026-09-17', local: 'Cidade do Rock, Rio de Janeiro', categoria: 'Festival', imagem: 'https://placehold.co/400x250/1a0a2e/FF6600?text=Rock+in+Rio' },
  { id: 2, slug: 'ccxp-2026', titulo: 'CCXP 2026', data: '2026-12-04', local: 'Expo São Paulo, São Paulo', categoria: 'Cultura Pop', imagem: 'https://placehold.co/400x250/1a1a2e/FF6600?text=CCXP+2026' },
  { id: 3, slug: 'copa-do-mundo-abertura', titulo: 'Copa do Mundo 2026 — Abertura', data: '2026-06-11', local: 'MetLife Stadium, Nova Jersey / EUA', categoria: 'Futebol', imagem: 'https://placehold.co/400x250/0a1a0a/FF6600?text=Copa+2026' },
  { id: 4, slug: 'tomorrowland-brasil-2026', titulo: 'Tomorrowland Brasil 2026', data: '2026-10-03', local: 'Parque Maeda, Itu/SP', categoria: 'Festival', imagem: 'https://placehold.co/400x250/1a0a2e/FF6600?text=Tomorrowland' },
];

// ─── TRENDING ─────────────────────────────────────────────────────────────────
export const TRENDING = [
  { posicao: 1, titulo: 'F1 2026: FIA muda regulamento no GP de Miami', tipo: 'F1',      url: '/noticias/fia-regulamento-f1-2026-miami',      imagem: '/images/noticias/fia-f1-2026-miami.jpg' },
  { posicao: 2, titulo: 'Avengers: Doomsday',    tipo: 'Filme',   url: '/noticias/avengers-doomsday-elenco-completo', imagem: 'https://image.tmdb.org/t/p/w500/8HkIe2i4ScpCkcX9SzZ9IPasqWV.jpg' },
  { posicao: 3, titulo: 'Copa do Mundo 2026',    tipo: 'Esporte', url: '/noticias/copa-do-mundo-2026-brasil',         imagem: 'https://static.sambafoot.com/wp/sites/2/Captura-de-tela-2025-11-19-141636-768x425.webp' },
  { posicao: 4, titulo: 'The Last of Us T2',     tipo: 'Série',   url: '/noticias/the-last-of-us-s2-estreia',         imagem: 'https://image.tmdb.org/t/p/w500/2TpP0oApo9M7dKF2MkoYKOxRbb.jpg' },
  { posicao: 5, titulo: 'Daredevil: Born Again', tipo: 'Série',   url: '/noticias/daredevil-born-again-review',       imagem: 'https://image.tmdb.org/t/p/w500/xDUoAsU8lQHOOoRkFiBuarmACDN.jpg' },
];

// ─── CATEGORIAS (menu e grid da home) ────────────────────────────────────────
export const CATEGORIAS = [
  { slug: 'filmes-e-series', titulo: 'Filmes e Séries', icone: '🎬', descricao: 'Filmes e maratonas imperdíveis', cor: 'from-red-900 to-blue-700' },
  { slug: 'comics',   titulo: 'Comics',   icone: '📚', descricao: 'Marvel, HQs e livros',              cor: 'from-yellow-900 to-yellow-700' },
  { slug: 'esportes', titulo: 'Esportes', icone: '⚽', descricao: 'Futebol, NBA e F1',                 cor: 'from-green-900 to-green-700' },
  { slug: 'noticias', titulo: 'Notícias', icone: '📰', descricao: 'Últimas do entretenimento',         cor: 'from-zinc-800 to-zinc-600' },
];
