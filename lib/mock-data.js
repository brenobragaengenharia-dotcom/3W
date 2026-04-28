// Dados do portal 3W Entretenimento
// Baseado nas páginas: @3worlds_entertainment | @3wcomics_ | @3wesports | TikTok @3worlds_entertainment
// Substitua por chamadas à sua API/CMS quando disponível

// ─── REDES SOCIAIS REAIS ──────────────────────────────────────────────────────
export const REDES_SOCIAIS = {
  instagram_principal: 'https://instagram.com/3worlds_ehntertainment',
  instagram_comics:    'https://instagram.com/3wcomics_',
  instagram_esportes:  'https://instagram.com/3wesports',
  tiktok:              'https://www.tiktok.com/@3worlds_entertainment',
};

// ─── FILMES ───────────────────────────────────────────────────────────────────
export const FILMES = [
  { id: 1, slug: 'o-jogo-do-predador', titulo: 'O Jogo do Predador', ano: 2026, nota: 6.5, categoria: 'Thriller', imagem: 'https://image.tmdb.org/t/p/w500/s0ub7FDXEyu8DqGcHKQpaOSem49.jpg' },
  { id: 2, slug: 'super-mario-galaxy-o-filme', titulo: 'Super Mario Galaxy: O Filme', ano: 2026, nota: 6.8, categoria: 'Família', imagem: 'https://image.tmdb.org/t/p/w500/b3WeTp42eJSRuE4UZfyPCOJW4c.jpg' },
  { id: 3, slug: 'um-amor-de-mentiras', titulo: 'Um Amor de Mentiras', ano: 2026, nota: 6.9, categoria: 'Romance', imagem: 'https://image.tmdb.org/t/p/w500/hXNn25hE2SH2kHMPVOLjqDISSxf.jpg' },
  { id: 4, slug: 'michael', titulo: 'Michael', ano: 2026, nota: 7.5, categoria: 'Música', imagem: 'https://image.tmdb.org/t/p/w500/2FYFBgdNVVaUgVfNSh9z5WVTZ9y.jpg' },
  { id: 5, slug: 'devoradores-de-estrelas', titulo: 'Devoradores de Estrelas', ano: 2026, nota: 8.2, categoria: 'Ficção científica', imagem: 'https://image.tmdb.org/t/p/w500/bOzG3SG6gBxHGGHYiq7xXeNb1bG.jpg' },
  { id: 6, slug: 'cara-de-um-focinho-de-outro', titulo: 'Cara de Um, Focinho de Outro', ano: 2026, nota: 7.6, categoria: 'Animação', imagem: 'https://image.tmdb.org/t/p/w500/ftPFJBGbldoWiiPrmesW96zBzdH.jpg' },
  { id: 7, slug: 'missao-refugio', titulo: 'Missão Refúgio', ano: 2026, nota: 6.8, categoria: 'Ação', imagem: 'https://image.tmdb.org/t/p/w500/hSvhZRkbYD9crC4nqy8uCk9EdFH.jpg' },
  { id: 8, slug: 'the-mortuary-assistant', titulo: 'The Mortuary Assistant', ano: 2026, nota: 5.5, categoria: 'Terror', imagem: 'https://image.tmdb.org/t/p/w500/mc3nj2DI1MZeFoAR08zSRDxezzf.jpg' },
  { id: 9, slug: 'caminhos-do-crime', titulo: 'Caminhos do Crime', ano: 2026, nota: 6.9, categoria: 'Crime', imagem: 'https://image.tmdb.org/t/p/w500/3u8Pr8WF9hqMptlnuYL52YXSs8F.jpg' },
  { id: 10, slug: 'um-cabra-bom-de-bola', titulo: 'Um Cabra Bom de Bola', ano: 2026, nota: 7.9, categoria: 'Animação', imagem: 'https://image.tmdb.org/t/p/w500/x0SRTrltSJi1iQiIAUpyvkxnr41.jpg' },
  { id: 11, slug: 'demon-slayer-kimetsu-no-yaiba-castelo-infinito', titulo: 'Demon Slayer: Kimetsu no Yaiba Castelo Infinito', ano: 2025, nota: 7.7, categoria: 'Animação', imagem: 'https://image.tmdb.org/t/p/w500/c55sXCaQBj3vuHqZe62tv90xCQS.jpg' },
  { id: 12, slug: 'o-atirador-sem-nacao', titulo: 'O Atirador: Sem Nação', ano: 2026, nota: 6.3, categoria: 'Ação', imagem: 'https://image.tmdb.org/t/p/w500/gGhjs14pomQA6N8parCw5Bl3qoh.jpg' },
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
  { id: 7, slug: 'the-good-doctor-o-bom-doutor', titulo: 'The Good Doctor: O Bom Doutor', ano: 2017, nota: 8.5, categoria: 'Drama', imagem: 'https://image.tmdb.org/t/p/w500/v9WYk0nigzR9NAEjeSmfI6s4XA2.jpg' },
  { id: 8, slug: 'yellowstone', titulo: 'Yellowstone', ano: 2018, nota: 8.3, categoria: 'Faroeste', imagem: 'https://image.tmdb.org/t/p/w500/rrOYi7Zj2OmBojo1VuuZM129gic.jpg' },
  { id: 9, slug: 'lucifer', titulo: 'Lucifer', ano: 2016, nota: 8.4, categoria: 'Crime', imagem: 'https://image.tmdb.org/t/p/w500/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg' },
  { id: 10, slug: 'better-call-saul', titulo: 'Better Call Saul', ano: 2015, nota: 8.7, categoria: 'Crime', imagem: 'https://image.tmdb.org/t/p/w500/9IPVuAjodjc2FYluWnNvRdOPsCR.jpg' },
  { id: 11, slug: 'reacher', titulo: 'Reacher', ano: 2022, nota: 8.1, categoria: 'Action & Adventure', imagem: 'https://image.tmdb.org/t/p/w500/c9JwFbaBWarL9fwo1NSqsiTj7Zh.jpg' },
  { id: 12, slug: 'jovem-sheldon', titulo: 'Jovem Sheldon', ano: 2017, nota: 8, categoria: 'Comédia', imagem: 'https://image.tmdb.org/t/p/w500/cVz8OISt8MoZ4ioDjcYi2XIKOdn.jpg' },
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
    id: 230, slug: 'igor-thiago-briga-com-haaland-pela-artilharia-da-premier-league', titulo: 'Igor Thiago briga com Haaland pela artilharia da Premier League',
    descricao: 'Brasileiro disputa com o norueguês do City o posto de maior goleador do campeonato inglês na temporada atual.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-04-27',
    imagem: '/images/noticias/brasileirao-2026-rodada-1.jpg', tempo_leitura: 1,
  },
  {
    id: 229, slug: 'hulk-pode-deixar-o-atletico-mg-e-retornar-ao-futebol-carioca', titulo: 'Hulk pode deixar o Atlético-MG e retornar ao futebol carioca',
    descricao: 'Fluminense reabriu negociações com Hulk, que foi cortado do jogo contra o Flamengo neste domingo (26).',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-04-27',
    imagem: '/images/noticias/lebron-james-record-pontos.jpg', tempo_leitura: 1,
  },
  {
    id: 216, slug: 'chelsea-x-manchester-city-final-da-copa-da-inglaterra-marcada', titulo: 'Chelsea x Manchester City: final da Copa da Inglaterra marcada',
    descricao: 'As duas equipes se enfrentam no dia 16 de maio, em Wembley, pela grande final da Copa da Inglaterra.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-04-26',
    imagem: '/images/noticias/chelsea-x-manchester-city-final-da-copa-da-inglaterra-marcada.jpg', tempo_leitura: 1,
  },
  {
    id: 206, slug: 'real-madrid-x-betis-ao-vivo-no-disney-onde-assistir-a-laliga', titulo: 'Real Madrid x Betis ao vivo no Disney+: onde assistir a LALIGA',
    descricao: 'Real Madrid enfrenta o Betis pela 33ª rodada de LALIGA neste sábado, com transmissão ao vivo pelo plano premium do Disney+ às 16h.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-04-25',
    imagem: '/images/noticias/real-madrid-x-betis-ao-vivo-no-disney-onde-assistir-a-laliga.jpg', tempo_leitura: 4,
  },
  {
    id: 201, slug: 'yamal-sofre-lesao-no-tendao-da-coxa-mas-deve-jogar-a-copa-do-mundo', titulo: 'Yamal sofre lesão no tendão da coxa, mas deve jogar a Copa do Mundo',
    descricao: 'Astro do Barcelona e da seleção espanhola passou por exames iniciais após lesão e aguarda diagnóstico mais detalhado nos próximos dias.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-04-23',
    imagem: 'https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0422%2Fr1647717_1296x729_16%2D9.jpg', tempo_leitura: 4,
  },
  {
    id: 202, slug: 'flamengo-bate-vitoria-no-maracana-e-abre-vantagem-na-copa-do-brasil', titulo: 'Flamengo bate Vitória no Maracanã e abre vantagem na Copa do Brasil',
    descricao: 'Com Evertton Araújo quebrando um jejum no ano, o Rubro-Negro saiu na frente na quinta fase da Copa do Brasil diante de sua torcida.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-04-23',
    imagem: 'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0423%2Fr1647816_1236x696_16%2D9.jpg', tempo_leitura: 4,
  },
  {
    id: 203, slug: 'neymar-bate-na-trave-e-santos-empata-sem-gols-com-coritiba-na-copa-do-brasil', titulo: 'Neymar bate na trave e Santos empata sem gols com Coritiba na Copa do Brasil',
    descricao: 'O Santos estreou na Copa do Brasil com empate frustrante em 0 a 0 diante do Coritiba, na Vila Belmiro, chegando ao terceiro jogo seguido sem vencer em casa.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-04-23',
    imagem: 'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0423%2Fr1647773_1296x729_16%2D9.jpg', tempo_leitura: 4,
  },
  {
    id: 1, slug: 'brasileirao-2026-rodada-1', titulo: 'Brasileirão 2026: Resultados e destaques da 1ª rodada',
    descricao: 'Confira todos os gols, lances e análises da abertura do Campeonato Brasileiro.',
    categoria: 'Futebol', autor: 'Redação 3W Esportes', data: '2026-04-13',
    imagem: '/images/noticias/brasileirao-2026-rodada-1.jpg', tempo_leitura: 4,
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
    imagem: '/images/noticias/copa-do-mundo-2026-grupos.jpg', tempo_leitura: 6,
  },
];

export const NOTICIAS_NBA = [
  {
    id: 228, slug: 'rockets-vencem-lakers-e-evitam-varrida-nos-playoffs-da-nba', titulo: 'Rockets vencem Lakers e evitam varrida nos playoffs da NBA',
    descricao: 'Houston vence pela primeira vez na série e se mantém viva na disputa dos playoffs da NBA.',
    categoria: 'NBA', autor: 'Redação 3W', data: '2026-04-27',
    imagem: '/images/noticias/lebron-james-record-pontos.jpg', tempo_leitura: 1,
  },
  {
    id: 205, slug: 'lakers-vencem-rockets-na-prorrogacao-e-abrem-3-a-0-na-serie', titulo: 'Lakers vencem Rockets na prorrogação e abrem 3 a 0 na série',
    descricao: 'Com vitória dramática na prorrogação, o Los Angeles Lakers coloca um pé nas semifinais e pode fechar a série no domingo, em Houston.',
    categoria: 'NBA', autor: 'Redação 3W', data: '2026-04-25',
    imagem: 'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0425%2Fr1648848_1296x729_16%2D9.jpg', tempo_leitura: 4,
  },
  {
    id: 4, slug: 'nba-playoffs-2026-confrontos', titulo: 'NBA Playoffs 2026: Todos os confrontos do primeiro round',
    descricao: 'Celtics, Thunder, Knicks e Lakers lideram os confrontos mais aguardados dos playoffs.',
    categoria: 'NBA', autor: 'Redação 3W Esportes', data: '2026-04-16',
    imagem: '/images/noticias/nba-playoffs-2026-confrontos.jpg', tempo_leitura: 5,
  },
  {
    id: 5, slug: 'lebron-james-record-pontos', titulo: 'LeBron James bate novo recorde histórico nos playoffs',
    descricao: 'O Rei supera mais uma marca histórica e consolida seu legado como o maior da história.',
    categoria: 'NBA', autor: 'Redação 3W Esportes', data: '2026-04-14',
    imagem: '/images/noticias/lebron-james-record-pontos.jpg', tempo_leitura: 4,
  },
];

export const NOTICIAS_F1 = [
  {
    id: 227, slug: 'colapinto-pilota-mercedes-de-fangio-nas-ruas-de-buenos-aires', titulo: 'Colapinto pilota Mercedes de Fangio nas ruas de Buenos Aires',
    descricao: 'O argentino andou com uma réplica da Mercedes W196, usada por Fangio nos títulos de 1954 e 1955, em uma Buenos Aires lotada.',
    categoria: 'Fórmula 1', autor: 'Redação 3W', data: '2026-04-26',
    imagem: '/images/noticias/mercedes-w196-fangio.jpg', tempo_leitura: 1,
  },
  {
    id: 226, slug: 'f4-brasil-2026-mesquita-hahn-e-gentil-vencem-em-interlagos', titulo: 'F4 Brasil 2026: Mesquita, Hahn e Gentil vencem em Interlagos',
    descricao: 'Rodada tripla na abertura do campeonato teve três vencedores diferentes; Bernardo Gentil lidera a temporada.',
    categoria: 'Fórmula 1', autor: 'Redação 3W', data: '2026-04-26',
    imagem: '/images/noticias/fia-motorsport-games-f4.jpg', tempo_leitura: 1,
  },
  {
    id: 213, slug: 'ducati-oscila-no-gp-da-espanha-gloria-com-alex-marquez-e-sombras-na-fabrica', titulo: 'Ducati oscila no GP da Espanha: glória com Álex Márquez e sombras na fábrica',
    descricao: 'Álex Márquez venceu em Jerez, mas a Ducati ainda convive com inconsistência e a Aprilia segue firme no campeonato de 2026.',
    categoria: 'Fórmula 1', autor: 'Redação 3W', data: '2026-04-26',
    imagem: '/images/noticias/bagnaia-ducati-lenovo-2024.jpg', tempo_leitura: 4,
  },
  {
    id: 211, slug: 'maro-engel-vira-o-jogo-e-vence-corrida-2-do-dtm-na-austria', titulo: 'Maro Engel vira o jogo e vence corrida 2 do DTM na Áustria',
    descricao: 'Após perder a vitória no sábado por um pit-stop lento, o alemão da Mercedes largou em quinto e cruzou em primeiro no Red Bull Ring.',
    categoria: 'Fórmula 1', autor: 'Redação 3W', data: '2026-04-26',
    imagem: '/images/noticias/maro-engel-dtm-2017.jpg', tempo_leitura: 4,
  },
  {
    id: 210, slug: 'super-formula-cancela-etapa-de-autopolis-apos-pista-inundada-pela-chuva', titulo: 'Super Fórmula cancela etapa de Autopolis após pista inundada pela chuva',
    descricao: 'A segunda etapa da Super Fórmula em 2026 foi cancelada antes mesmo de começar de verdade: chuva intensa inundou o circuito de Autopolis e encerrou tudo.',
    categoria: 'Fórmula 1', autor: 'Redação 3W', data: '2026-04-26',
    imagem: '/images/noticias/super-formula-autopolis-2018.jpg', tempo_leitura: 4,
  },
  {
    id: 209, slug: 'mclaren-de-olho-nos-sidepods-da-audi-e-na-asa-da-ferrari-para-2026', titulo: 'McLaren de olho nos sidepods da Audi e na asa da Ferrari para 2026',
    descricao: 'Projetista chefe Rob Marshall admite que analisa soluções aerodinâmicas de rivais, mas alerta que copiar sem entender pode ser armadilha.',
    categoria: 'Fórmula 1', autor: 'Redação 3W', data: '2026-04-26',
    imagem: '/images/noticias/mclaren-de-olho-nos-sidepods-da-audi-e-na-asa-da-ferrari-para-2026.jpg', tempo_leitura: 4,
  },
  {
    id: 204, slug: 'fia-anuncia-mudancas-na-duracao-do-tl1-do-gp-de-miami', titulo: 'FIA ANUNCIA MUDANÇAS NA DURAÇÃO DO TL1 DO GP DE MIAMI ',
    descricao: 'Regulamento ',
    categoria: 'Fórmula 1', autor: 'Redação 3W', data: '2026-04-23',
    imagem: '/images/noticias/fia-tl1-miami-2026.jpg', tempo_leitura: 4,
  },
  {
    id: 8, slug: 'fia-regulamento-f1-2026-miami', titulo: 'FIA anuncia mudanças no regulamento da F1 2026 a partir do GP de Miami',
    descricao: 'Pacote de alterações em qualificação, corrida, largadas e pista molhada entra em vigor antes do GP de Miami, em 3 de maio, após votação do WMSC.',
    categoria: 'Fórmula 1', autor: 'Redação 3W Esportes', data: '2026-04-20',
    imagem: '/images/noticias/fia-f1-2026-miami.jpg', tempo_leitura: 7,
  },
  {
    id: 6, slug: 'f1-2026-novas-regras-motores', titulo: 'F1 2026: Novos regulamentos de motor mudam o grid completamente',
    descricao: 'A era dos novos motores híbridos de alta performance chega à Fórmula 1 em 2026.',
    categoria: 'Fórmula 1', autor: 'Redação 3W Esportes', data: '2026-04-12',
    imagem: '/images/noticias/placeholder-f1.jpg', tempo_leitura: 6,
  },
  {
    id: 7, slug: 'verstappen-vs-hamilton-2026', titulo: 'Verstappen vs Hamilton: A batalha que promete dominar 2026',
    descricao: 'Após a mudança de Hamilton para a Ferrari, o duelo mais esperado do esporte a motor.',
    categoria: 'Fórmula 1', autor: 'Redação 3W Esportes', data: '2026-04-08',
    imagem: '/images/noticias/placeholder-f1.jpg', tempo_leitura: 5,
  },
];

// Todas as notícias de esportes juntas
export const NOTICIAS_ESPORTES = [...NOTICIAS_FUTEBOL, ...NOTICIAS_NBA, ...NOTICIAS_F1];

// ─── NOTÍCIAS GERAIS ──────────────────────────────────────────────────────────
export const NOTICIAS = [
  {
    id: 224, slug: 'nicolas-cage-estreia-como-spider-noir-em-maio-no-prime-video', titulo: 'Nicolas Cage estreia como Spider-Noir em maio no Prime Video',
    descricao: 'Trailer da série foi exibido na CCXP México; estreia mundial está marcada para 27 de maio.',
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-04-26',
    imagem: 'https://f.i.uol.com.br/fotografia/2025/12/26/1766790921694f17099e23e_1766790921_3x2_rt.jpg', tempo_leitura: 1,
  },
  {
    id: 223, slug: 'santita-serie-da-netflix-aborda-autodestruicao-emocional', titulo: '\'Santita\': série da Netflix aborda autodestruição emocional',
    descricao: 'Segundo o CinePOP, a produção usa personagens complementares em torno de uma protagonista forte para tratar de um tema complexo.',
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-04-26',
    imagem: 'https://cinepop.com.br/wp-content/uploads/2026/04/santita6.jpg', tempo_leitura: 1,
  },
  {
    id: 222, slug: 'salas-vence-corrida-principal-da-stock-car-em-interlagos-no-seu-aniversario', titulo: 'Salas vence corrida principal da Stock Car em Interlagos no seu aniversário',
    descricao: 'Guilherme Salas largou na pole, segurou Nelsinho Piquet na segunda metade e conquistou sua sétima vitória na Stock Car.',
    categoria: 'Esportes', autor: 'Redação 3W', data: '2026-04-26',
    imagem: '/images/noticias/guilherme-salas-stock-car.jpg', tempo_leitura: 1,
  },
  {
    id: 219, slug: 'o-diabo-veste-prada-chega-ao-brasil-com-claudia-raia-e-myra-ruiz', titulo: 'O Diabo Veste Prada chega ao Brasil com Cláudia Raia e Myra Ruiz',
    descricao: 'Musical de sucesso em Londres, visto por mais de um milhão de pessoas, confirma estreia no Brasil com elenco nacional.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-04-26',
    imagem: 'https://cinepop.com.br/wp-content/uploads/2026/04/o-diabo-veste-prada.jpg', tempo_leitura: 1,
  },
  {
    id: 218, slug: 'filme-michael-estreia-com-recorde-historico-de-bilheteria', titulo: 'Filme \'Michael\' estreia com recorde histórico de bilheteria',
    descricao: 'Cinebiografia sobre Michael Jackson registra os melhores números de estreia já vistos para o gênero nos cinemas americanos.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-04-26',
    imagem: 'https://f.i.uol.com.br/fotografia/2026/04/26/177722403769ee496529f66_1777224037_3x2_rt.jpg', tempo_leitura: 1,
  },
  {
    id: 217, slug: 'sawe-quebra-recorde-e-corre-maratona-oficial-em-menos-de-2-horas', titulo: 'Sawe quebra recorde e corre maratona oficial em menos de 2 horas',
    descricao: 'Sabastian Sawe se tornou a primeira pessoa a completar 42,195 km em menos de duas horas em uma prova oficial.',
    categoria: 'Esportes', autor: 'Redação 3W', data: '2026-04-26',
    imagem: '/images/noticias/sawe-quebra-recorde-e-corre-maratona-oficial-em-menos-de-2-horas.jpg', tempo_leitura: 1,
  },
  {
    id: 215, slug: 'alex-marquez-vence-em-jerez-e-mira-virada-na-motogp-2026', titulo: 'Álex Márquez vence em Jerez e mira virada na MotoGP 2026',
    descricao: 'Piloto da Ducati conquistou sua segunda vitória seguida no circuito espanhol e projeta regularidade até o fim da temporada.',
    categoria: 'Esportes', autor: 'Redação 3W', data: '2026-04-26',
    imagem: '/images/noticias/alex-marquez-gresini-2024.jpg', tempo_leitura: 4,
  },
  {
    id: 212, slug: '10-filmes-dos-anos-80-que-deixaram-fas-esperando-por-sequencias', titulo: '10 filmes dos anos 80 que deixaram fãs esperando por sequências',
    descricao: 'A década de 80 produziu blockbusters tão marcantes que gerações inteiras ficaram esperando por continuações que nunca chegaram — ou chegaram tarde demais.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-04-26',
    imagem: 'https://cinepop.com.br/wp-content/uploads/2022/05/sequels-1-e1777219306383.jpg', tempo_leitura: 4,
  },
  {
    id: 208, slug: 'agius-vence-de-novo-na-moto2-e-intact-domina-gp-da-espanha', titulo: 'Agius vence de novo na Moto2 e Intact domina GP da Espanha',
    descricao: 'O australiano Senna Agius superou o espanhol Manuel González nas últimas voltas e conquistou sua segunda vitória seguida na temporada 2026 da Moto2.',
    categoria: 'Esportes', autor: 'Redação 3W', data: '2026-04-26',
    imagem: '/images/noticias/placeholder-motogp.jpg', tempo_leitura: 4,
  },
  {
    id: 207, slug: 'alcaraz-desiste-do-roland-garros-2026-com-dores-no-pulso', titulo: 'Alcaraz desiste do Roland Garros 2026 com dores no pulso',
    descricao: 'Bicampeão em Paris, o espanhol Carlos Alcaraz confirmou que não vai defender o título em Roland Garros por causa de uma lesão no pulso.',
    categoria: 'Esportes', autor: 'Redação 3W', data: '2026-04-24',
    imagem: 'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0124%2Fr1605042_1296x729_16%2D9.jpg', tempo_leitura: 4,
  },
  {
    id: 1, slug: 'avengers-doomsday-elenco-completo', titulo: 'Avengers: Doomsday revela elenco completo com retornos surpresa',
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
