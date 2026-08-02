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
  { id: 1, slug: 'homem-aranha-um-novo-dia', titulo: 'Homem-Aranha: Um Novo Dia', ano: 2026, nota: 8, categoria: 'Ficção científica', imagem: 'https://image.tmdb.org/t/p/w500/x0nvYzQpyJc5pdT9lMnkMuYAg0O.jpg' },
  { id: 2, slug: 'a-odisseia', titulo: 'A Odisseia', ano: 2026, nota: 7.9, categoria: 'Aventura', imagem: 'https://image.tmdb.org/t/p/w500/muMwJAiMtReEHLKpKMWt2rMkYF7.jpg' },
  { id: 3, slug: 'supergirl', titulo: 'Supergirl', ano: 2026, nota: 6.8, categoria: 'Ação', imagem: 'https://image.tmdb.org/t/p/w500/qhXfLI1gDWaahzfHT0cb2CH61hO.jpg' },
  { id: 4, slug: 'obsessao', titulo: 'Obsessão', ano: 2026, nota: 8.3, categoria: 'Terror', imagem: 'https://image.tmdb.org/t/p/w500/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg' },
  { id: 5, slug: 'moana', titulo: 'Moana', ano: 2026, nota: 5.9, categoria: 'Família', imagem: 'https://image.tmdb.org/t/p/w500/eEsiTi19EYBluPQliS3CMnBgqTj.jpg' },
  { id: 6, slug: 'a-morte-de-robin-hood', titulo: 'A Morte de Robin Hood', ano: 2026, nota: 6.6, categoria: 'Aventura', imagem: 'https://image.tmdb.org/t/p/w500/o0QndnepFPWget2kdKpzh26RBYt.jpg' },
  { id: 7, slug: 'avatar-aang-o-ultimo-mestre-do-ar', titulo: 'Avatar Aang: O Último Mestre do Ar', ano: 2026, nota: 9.4, categoria: 'Animação', imagem: 'https://image.tmdb.org/t/p/w500/h0jCyR6FTvp6ULcPokfoXvV1t3O.jpg' },
  { id: 8, slug: 'toy-story-5', titulo: 'Toy Story 5', ano: 2026, nota: 7.4, categoria: 'Animação', imagem: 'https://image.tmdb.org/t/p/w500/sssrBhdvDcczgMQYDc8oCoSuFEJ.jpg' },
  { id: 9, slug: 'homem-aranha-sem-volta-para-casa', titulo: 'Homem-Aranha: Sem Volta Para Casa', ano: 2021, nota: 7.9, categoria: 'Ação', imagem: 'https://image.tmdb.org/t/p/w500/xaKydnMw6wR1MBAjS5seGPVusbs.jpg' },
  { id: 10, slug: 'backrooms-um-nao-lugar', titulo: 'Backrooms: Um Não-Lugar', ano: 2026, nota: 7.1, categoria: 'Terror', imagem: 'https://image.tmdb.org/t/p/w500/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg' },
  { id: 11, slug: 'minions-monstros', titulo: 'Minions & Monstros', ano: 2026, nota: 6.4, categoria: 'Aventura', imagem: 'https://image.tmdb.org/t/p/w500/hTowtXrkCY7FJyoj4p91JckrJSE.jpg' },
  { id: 12, slug: 'a-boca-do-diabo', titulo: 'A Boca do Diabo', ano: 2026, nota: 6.8, categoria: 'Terror', imagem: 'https://image.tmdb.org/t/p/w500/2CZecxLrTSmzngWqIGganSMg6gK.jpg' },
];

// ─── PARCERIA INGRESSO.COM (via Awin) ────────────────────────────────────────
// Quando o Awin aprovar o programa Ingresso Partners, substituir por:
//   https://www.awin1.com/cread.php?awinmid=XXXXX&awinaffid=YYYYY&ued=https%3A%2F%2Fwww.ingresso.com%2F
// Usar a env NEXT_PUBLIC_INGRESSO_AWIN_URL para não precisar de redeploy manual.
export const INGRESSO_URL =
  process.env.NEXT_PUBLIC_INGRESSO_AWIN_URL || 'https://www.ingresso.com/';

// ─── SÉRIES ───────────────────────────────────────────────────────────────────
export const SERIES = [
  { id: 1, slug: 'a-casa-do-dragao', titulo: 'A Casa do Dragão', ano: 2022, nota: 8.4, categoria: 'Sci-Fi & Fantasy', imagem: 'https://image.tmdb.org/t/p/w500/oKJDm4QCKbp6mR4FnxXrFlPJP8Y.jpg' },
  { id: 2, slug: 'o-novato', titulo: 'O Novato', ano: 2018, nota: 8.5, categoria: 'Crime', imagem: 'https://image.tmdb.org/t/p/w500/yCPGrd6fzbftuaH97OUS6tUdE4B.jpg' },
  { id: 3, slug: 'silo', titulo: 'Silo', ano: 2023, nota: 8.2, categoria: 'Sci-Fi & Fantasy', imagem: 'https://image.tmdb.org/t/p/w500/tVR4q9FazxJuCEpaYxiCijUlvM3.jpg' },
  { id: 4, slug: 'origem', titulo: 'Origem', ano: 2022, nota: 8.5, categoria: 'Mistério', imagem: 'https://image.tmdb.org/t/p/w500/eK9ZDIq7gPFRJ0GGaWvgrXLZgXX.jpg' },
  { id: 5, slug: 'reacher', titulo: 'Reacher', ano: 2022, nota: 8.1, categoria: 'Action & Adventure', imagem: 'https://image.tmdb.org/t/p/w500/f1VCQIG2iCyOookdgOzwtUpwWC0.jpg' },
  { id: 6, slug: 'stranger-things', titulo: 'Stranger Things', ano: 2016, nota: 8.6, categoria: 'Action & Adventure', imagem: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg' },
  { id: 7, slug: 'the-boys', titulo: 'The Boys', ano: 2019, nota: 8.4, categoria: 'Sci-Fi & Fantasy', imagem: 'https://image.tmdb.org/t/p/w500/in1R2dDc421JxsoRWaIIAqVI2KE.jpg' },
  { id: 8, slug: 'yellowstone', titulo: 'Yellowstone', ano: 2018, nota: 8.3, categoria: 'Faroeste', imagem: 'https://image.tmdb.org/t/p/w500/rrOYi7Zj2OmBojo1VuuZM129gic.jpg' },
  { id: 9, slug: '9-1-1', titulo: '9-1-1', ano: 2018, nota: 8.2, categoria: 'Drama', imagem: 'https://image.tmdb.org/t/p/w500/6njUqsd3By2mJsdZm1P0moPLzs3.jpg' },
  { id: 10, slug: 'the-good-doctor-o-bom-doutor', titulo: 'The Good Doctor: O Bom Doutor', ano: 2017, nota: 8.5, categoria: 'Drama', imagem: 'https://image.tmdb.org/t/p/w500/v9WYk0nigzR9NAEjeSmfI6s4XA2.jpg' },
  { id: 11, slug: 'lucifer', titulo: 'Lucifer', ano: 2016, nota: 8.4, categoria: 'Crime', imagem: 'https://image.tmdb.org/t/p/w500/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg' },
  { id: 12, slug: 'euphoria', titulo: 'Euphoria', ano: 2019, nota: 8.3, categoria: 'Drama', imagem: 'https://image.tmdb.org/t/p/w500/cQMOyNLS1RsQIMlmVR6MEk2fvii.jpg' },
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
    id: 371, slug: 'brasil-impressiona-em-estreias-de-copa-ultima-derrota-tem-quase-100-anos', titulo: 'Brasil impressiona em estreias de Copa; última derrota tem quase 100 anos',
    descricao: 'Seleção abre o Mundial contra Marrocos com histórico positivo nas estreias e clima de confiança no grupo.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-06-10',
    imagem: '/images/noticias/brasil-impressiona-em-estreias-de-copa-ultima-derrota-tem-quase-100-anos.jpg', tempo_leitura: 1,
  },
  {
    id: 365, slug: 'copa-2026-datas-horarios-e-onde-ver-os-jogos-do-brasil', titulo: 'Copa 2026: datas, horários e onde ver os jogos do Brasil',
    descricao: 'A Seleção Brasileira estreia no dia 13 de junho contra Marrocos e disputa o Grupo C sob o comando de Carlo Ancelotti.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-06-09',
    imagem: '/images/noticias/copa-2026-datas-horarios-e-onde-ver-os-jogos-do-brasil.jpg', tempo_leitura: 2,
  },
  {
    id: 353, slug: 'brasil-x-egito-reune-torcedores-brasileiros-no-meio-oeste-dos-eua', titulo: 'Brasil x Egito reúne torcedores brasileiros no meio-oeste dos EUA',
    descricao: 'Sem cidade-sede na região, brasileiros de Ohio e Michigan aproveitam amistoso em Cleveland para ver a Seleção antes da Copa.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-06-05',
    imagem: '/images/noticias/brasil-x-egito-reune-torcedores-brasileiros-no-meio-oeste-dos-eua.jpg', tempo_leitura: 1,
  },
  {
    id: 349, slug: 'ancelotti-testa-mudancas-em-treino-da-selecao-brasileira-nos-eua', titulo: 'Ancelotti testa mudanças em treino da seleção brasileira nos EUA',
    descricao: 'Técnico italiano promoveu alterações no segundo treino do Brasil em solo norte-americano, com presença de torcedores.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-06-03',
    imagem: '/images/noticias/ancelotti-testa-mudancas-em-treino-da-selecao-brasileira-nos-eua.jpg', tempo_leitura: 1,
  },
  {
    id: 348, slug: 'entrada-de-casemiro-em-endrick-no-treino-vira-assunto', titulo: 'Entrada de Casemiro em Endrick no treino vira assunto',
    descricao: 'Jogada forte do volante contra o jovem atacante durante preparação para amistoso contra o Egito gerou repercussão nas redes sociais.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-06-03',
    imagem: '/images/noticias/entrada-de-casemiro-em-endrick-no-treino-vira-assunto.jpg', tempo_leitura: 1,
  },
  {
    id: 347, slug: 'tnt-sports-retorna-a-tv-paga-apos-oito-anos-para-a-copa-do-mundo', titulo: 'TNT Sports retorna à TV paga após oito anos para a Copa do Mundo',
    descricao: 'Canal da Warner volta às operadoras de forma independente, mas apenas durante o período da Copa do Mundo, a partir desta segunda (8).',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-06-04',
    imagem: '/images/noticias/tnt-sports-retorna-a-tv-paga-apos-oito-anos-para-a-copa-do-mundo.jpg', tempo_leitura: 1,
  },
  {
    id: 345, slug: 'neymar-vira-atracao-nos-bastidores-antes-da-viagem-a-copa', titulo: 'Neymar vira atração nos bastidores antes da viagem à Copa',
    descricao: 'Antes do embarque da Seleção Brasileira rumo à Copa do Mundo, Neymar protagonizou cenas inusitadas com enfermeiras e torcedores na sede da CBF.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-06-02',
    imagem: '/images/noticias/neymar-vira-atracao-nos-bastidores-antes-da-viagem-a-copa.jpg', tempo_leitura: 1,
  },
  {
    id: 344, slug: 'brasileirao-bate-recorde-de-convocados-para-a-copa-do-mundo', titulo: 'Brasileirão bate recorde de convocados para a Copa do Mundo',
    descricao: 'Com 32 jogadores chamados, o campeonato brasileiro superou marca que durava 52 anos, incluindo sete convocados à seleção brasileira.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-06-02',
    imagem: '/images/noticias/brasileirao-bate-recorde-de-convocados-para-a-copa-do-mundo.jpg', tempo_leitura: 1,
  },
  {
    id: 338, slug: 'neymar-volta-a-usar-a-camisa-10-do-brasil-na-copa-2026', titulo: 'Neymar volta a usar a camisa 10 do Brasil na Copa 2026',
    descricao: 'CBF divulgou neste sábado (30) a numeração oficial da Seleção Brasileira para a Copa do Mundo de 2026.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-30',
    imagem: '/images/noticias/neymar-volta-a-usar-a-camisa-10-do-brasil-na-copa-2026.jpg', tempo_leitura: 1,
  },
  {
    id: 337, slug: 'gremio-usa-goleiro-de-17-anos-apos-expulsao-contra-o-corinthians', titulo: 'Grêmio usa goleiro de 17 anos após expulsão contra o Corinthians',
    descricao: 'Gabriel Menegon entrou em campo depois que Thiago Beltrame foi expulso no segundo tempo, com os titulares indisponíveis.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-30',
    imagem: '/images/noticias/gremio-usa-goleiro-de-17-anos-apos-expulsao-contra-o-corinthians.jpg', tempo_leitura: 1,
  },
  {
    id: 336, slug: 'selecao-brasileira-chega-ao-rio-com-festa-da-torcida', titulo: 'Seleção Brasileira chega ao Rio com festa da torcida',
    descricao: 'Centenas de torcedores receberam o Brasil no Hilton Barra da Tijuca, onde a equipe fica concentrada antes do amistoso contra o Panamá.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-30',
    imagem: '/images/noticias/selecao-brasileira-chega-ao-rio-com-festa-da-torcida.jpg', tempo_leitura: 1,
  },
  {
    id: 333, slug: 'libertadores-fecha-grupos-e-define-sorteio-das-oitavas', titulo: 'Libertadores fecha grupos e define sorteio das oitavas',
    descricao: 'Universidad Católica, Cruzeiro, Cerro Porteño e Palmeiras completam o quadro de classificados para o sorteio desta sexta.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-29',
    imagem: '/images/noticias/libertadores-fecha-grupos-e-define-sorteio-das-oitavas.jpg', tempo_leitura: 1,
  },
  {
    id: 329, slug: 'gremio-empata-com-torque-e-vai-aos-playoffs-da-sul-americana', titulo: 'Grêmio empata com Torque e vai aos playoffs da Sul-Americana',
    descricao: 'Placar de 2 a 2 na Arena impediu o Tricho de assumir a liderança do Grupo F e forçou a disputa dos playoffs.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-27',
    imagem: '/images/noticias/gremio-empata-com-torque-e-vai-aos-playoffs-da-sul-americana.jpg', tempo_leitura: 1,
  },
  {
    id: 328, slug: 'goleiro-e-a-grande-duvida-do-brasil-para-a-copa-do-mundo', titulo: 'Goleiro é a grande dúvida do Brasil para a Copa do Mundo',
    descricao: 'Entre lesão, inconstância e possíveis surpresas, a posição de goleiro na seleção brasileira ainda não está definida antes da estreia.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-27',
    imagem: '/images/noticias/goleiro-e-a-grande-duvida-do-brasil-para-a-copa-do-mundo.jpg', tempo_leitura: 1,
  },
  {
    id: 315, slug: 'convocacao-da-selecao-vira-sucesso-de-audiencia-no-sbt-e-n-sports', titulo: 'Convocação da Seleção vira sucesso de audiência no SBT e N Sports',
    descricao: 'Transmissão ao vivo da lista de convocados para a Copa 2026 atingiu pico de 468 mil usuários simultâneos nas plataformas do consórcio.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-20',
    imagem: '/images/noticias/convocacao-da-selecao-vira-sucesso-de-audiencia-no-sbt-e-n-sports.jpg', tempo_leitura: 1,
  },
  {
    id: 314, slug: 'selecao-tera-visitas-restritas-a-familiares-na-copa-do-mundo', titulo: 'Seleção terá visitas restritas a familiares na Copa do Mundo',
    descricao: 'CBF confirmou regras mais rígidas para acesso de familiares e amigos ao hotel da Seleção Brasileira durante o Mundial.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-21',
    imagem: '/images/noticias/selecao-tera-visitas-restritas-a-familiares-na-copa-do-mundo.jpg', tempo_leitura: 1,
  },
  {
    id: 310, slug: 'southampton-e-expulso-dos-playoffs-por-caso-de-espionagem', titulo: 'Southampton é expulso dos playoffs por caso de espionagem',
    descricao: 'Membro da comissão técnica foi flagrado gravando treino do Middlesbrough antes da semifinal; vitória foi revertida.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-19',
    imagem: '/images/noticias/southampton-e-expulso-dos-playoffs-por-caso-de-espionagem.jpg', tempo_leitura: 1,
  },
  {
    id: 301, slug: 'taffarel-minimiza-falha-de-bento-e-aposta-em-alisson-para-2026', titulo: 'Taffarel minimiza falha de Bento e aposta em Alisson para 2026',
    descricao: 'Preparador de goleiros da seleção brasileira falou sobre os dois arqueiros em evento em São Paulo.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-15',
    imagem: '/images/noticias/taffarel-minimiza-falha-de-bento-e-aposta-em-alisson-para-2026.jpg', tempo_leitura: 1,
  },
  {
    id: 296, slug: 'arte-vascaina-vai-estampar-onibus-da-selecao-na-copa-2026', titulo: 'Arte vascaína vai estampar ônibus da Seleção na Copa 2026',
    descricao: 'Léo Silveira, de 12 anos, venceu concurso com desenho inspirado no mosaico da torcida do Vasco que acompanhará o Brasil no Mundial.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-14',
    imagem: '/images/noticias/arte-vascaina-vai-estampar-onibus-da-selecao-na-copa-2026.jpg', tempo_leitura: 1,
  },
  {
    id: 294, slug: 'bamor-se-une-ao-mva-e-estara-na-copa-do-mundo-de-2026', titulo: 'Bamor se une ao MVA e estará na Copa do Mundo de 2026',
    descricao: 'Torcida organizada do Bahia é incluída no Movimento Verde Amarelo para a Copa do Mundo de 2026, ao lado da TUI, do Vitória.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-13',
    imagem: '/images/noticias/bamor-se-une-ao-mva-e-estara-na-copa-do-mundo-de-2026.jpg', tempo_leitura: 1,
  },
  {
    id: 293, slug: 'casemiro-aponta-gareth-bale-como-jogador-mais-completo-da-carreira', titulo: 'Casemiro aponta Gareth Bale como jogador mais completo da carreira',
    descricao: 'Meio-campista do Manchester United surpreende ao deixar CR7 e Neymar de fora da escolha em entrevista ao Rio Meets.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-13',
    imagem: '/images/noticias/casemiro-aponta-gareth-bale-como-jogador-mais-completo-da-carreira.jpg', tempo_leitura: 1,
  },
  {
    id: 292, slug: 'luciano-juba-celebra-pre-lista-da-selecao-e-projeta-bahia-na-copa-do-brasil', titulo: 'Luciano Juba celebra pré-lista da Seleção e projeta Bahia na Copa do Brasil',
    descricao: 'Lateral fala sobre momento histórico como artilheiro do clube no Brasileirão e o duelo contra o Remo pelo torneio nacional.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-12',
    imagem: '/images/noticias/luciano-juba-celebra-pre-lista-da-selecao-e-projeta-bahia-na-copa-do-brasil.jpg', tempo_leitura: 1,
  },
  {
    id: 291, slug: 'ancelotti-fala-sobre-decisao-de-convocar-neymar-para-a-copa', titulo: 'Ancelotti fala sobre decisão de convocar Neymar para a Copa',
    descricao: 'Técnico da seleção brasileira diz que a questão não é simples, mas garante postura 100% profissional na escolha.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-12',
    imagem: '/images/noticias/ancelotti-fala-sobre-decisao-de-convocar-neymar-para-a-copa.jpg', tempo_leitura: 1,
  },
  {
    id: 290, slug: 'casemiro-elege-o-jogador-mais-completo-do-real-madrid', titulo: 'Casemiro elege o jogador mais completo do Real Madrid',
    descricao: 'Em entrevista ao ex-zagueiro Rio Ferdinand, o brasileiro relembrou sua passagem pelo clube espanhol e falou da Seleção.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-12',
    imagem: '/images/noticias/casemiro-elege-o-jogador-mais-completo-do-real-madrid.jpg', tempo_leitura: 1,
  },
  {
    id: 286, slug: 'estadio-azteca-afunda-e-preocupa-a-31-dias-da-copa-do-mundo', titulo: 'Estádio Azteca afunda e preocupa a 31 dias da Copa do Mundo',
    descricao: 'Rachaduras no piso recém-reformado do estádio mexicano colocam autoridades locais e até a Nasa em alerta.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-11',
    imagem: '/images/noticias/estadio-azteca-afunda-e-preocupa-a-31-dias-da-copa-do-mundo.jpg', tempo_leitura: 1,
  },
  {
    id: 284, slug: 'paramount-perto-de-renovar-direitos-da-libertadores-ate-2030', titulo: 'Paramount perto de renovar direitos da Libertadores até 2030',
    descricao: 'Contrato entre Paramount, Conmebol e agência IMG para transmissão do torneio de 2027 a 2030 deve ser assinado nos próximos dias.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-12',
    imagem: '/images/noticias/paramount-perto-de-renovar-direitos-da-libertadores-ate-2030.jpg', tempo_leitura: 1,
  },
  {
    id: 274, slug: 'jardim-e-boto-relatam-tensao-do-flamengo-em-medellin', titulo: 'Jardim e Boto relatam tensão do Flamengo em Medellín',
    descricao: 'Técnico e diretor do Flamengo falaram sobre momentos tensos vividos pelo clube na Libertadores, na Colômbia.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-09',
    imagem: '/images/noticias/jardim-e-boto-relatam-tensao-do-flamengo-em-medellin.jpg', tempo_leitura: 1,
  },
  {
    id: 273, slug: 'conmebol-deve-definir-resultado-de-medellin-x-flamengo-em-uma-semana', titulo: 'Conmebol deve definir resultado de Medellín x Flamengo em uma semana',
    descricao: 'Entidade espera ter uma decisão final sobre o jogo entre Independiente Medellín e Flamengo, pela Libertadores, no prazo de uma semana.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-09',
    imagem: '/images/noticias/conmebol-deve-definir-resultado-de-medellin-x-flamengo-em-uma-semana.jpg', tempo_leitura: 1,
  },
  {
    id: 270, slug: 'cruzeiro-segura-empate-com-um-a-menos-na-libertadores', titulo: 'Cruzeiro segura empate com um a menos na Libertadores',
    descricao: 'Com um jogador a menos no segundo tempo, o Cruzeiro ficou no 0 a 0 com a Universidad Católica e segue na zona de classificação.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-07',
    imagem: '/images/noticias/cruzeiro-segura-empate-com-um-a-menos-na-libertadores.jpg', tempo_leitura: 1,
  },
  {
    id: 269, slug: 'corinthians-pode-se-classificar-sem-entrar-em-campo', titulo: 'Corinthians pode se classificar sem entrar em campo',
    descricao: 'O Timão avança antecipadamente na Libertadores se o Peñarol não vencer o Platense nesta quinta-feira (7).',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-07',
    imagem: '/images/noticias/corinthians-pode-se-classificar-sem-entrar-em-campo.jpg', tempo_leitura: 1,
  },
  {
    id: 268, slug: 'casemiro-defende-neymar-e-diz-que-ele-aceitaria-ser-reserva', titulo: 'Casemiro defende Neymar e diz que ele aceitaria ser reserva',
    descricao: 'Volante saiu em defesa do atacante e afirmou que Neymar não precisa provar nada para ninguém.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-05',
    imagem: '/images/noticias/casemiro-defende-neymar-e-diz-que-ele-aceitaria-ser-reserva.jpg', tempo_leitura: 1,
  },
  {
    id: 258, slug: 'neymar-tem-quatro-jogos-para-mostrar-servico-antes-da-lista-de-ancelotti', titulo: 'Neymar tem quatro jogos para mostrar serviço antes da lista de Ancelotti',
    descricao: 'Fora do clássico contra o Palmeiras, camisa 10 do Santos foca nos próximos compromissos antes da convocação para a Copa de 2026.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-03',
    imagem: '/images/noticias/neymar-tem-quatro-jogos-para-mostrar-servico-antes-da-lista-de-ancelotti.jpg', tempo_leitura: 1,
  },
  {
    id: 255, slug: 'remo-vira-no-acrescimo-e-derrota-o-botafogo-no-nilton-santos', titulo: 'Remo vira no acréscimo e derrota o Botafogo no Nilton Santos',
    descricao: 'De virada, o Remo venceu o Botafogo por 2 a 1 no Nilton Santos e respirou no Brasileirão 2026.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-02',
    imagem: '/images/noticias/remo-vira-no-acrescimo-e-derrota-o-botafogo-no-nilton-santos.jpg', tempo_leitura: 1,
  },
  {
    id: 254, slug: 'barcelona-vence-osasuna-e-pressiona-por-titulo-da-laliga', titulo: 'Barcelona vence Osasuna e pressiona por título da LaLiga',
    descricao: 'Jogando fora de casa, o Barça superou o Osasuna e pode ser campeão espanhol já neste domingo (3).',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-03',
    imagem: '/images/noticias/barcelona-vence-osasuna-e-pressiona-por-titulo-da-laliga.jpg', tempo_leitura: 1,
  },
  {
    id: 253, slug: 'palmeiras-empata-com-santos-e-ve-lideranca-ameacada', titulo: 'Palmeiras empata com Santos e vê liderança ameaçada',
    descricao: 'Com gol anulado no fim e na volta de Paulinho, Palmeiras e Santos empataram por 1 a 1 na 14ª rodada do Brasileirão.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-03',
    imagem: '/images/noticias/palmeiras-empata-com-santos-e-ve-lideranca-ameacada.jpg', tempo_leitura: 1,
  },
  {
    id: 251, slug: 'ancelotti-vai-ao-maracana-observar-jogadores-antes-de-convocar-a-selecao', titulo: 'Ancelotti vai ao Maracanã observar jogadores antes de convocar a Seleção',
    descricao: 'Técnico da Seleção Brasileira estará no clássico Flamengo x Vasco no domingo (3), pela 14ª rodada do Brasileirão.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-05-01',
    imagem: '/images/noticias/ancelotti-vai-ao-maracana-observar-jogadores-antes-de-convocar-a-selecao.jpg', tempo_leitura: 1,
  },
  {
    id: 244, slug: 'bidu-fala-sobre-diniz-defesa-zerada-e-sonho-na-selecao', titulo: 'Bidu fala sobre Diniz, defesa zerada e sonho na Seleção',
    descricao: 'Lateral do Corinthians concedeu entrevista à ESPN antes do duelo contra o Peñarol pela Libertadores.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-04-30',
    imagem: '/images/noticias/bidu-fala-sobre-diniz-defesa-zerada-e-sonho-na-selecao.jpg', tempo_leitura: 1,
  },
  {
    id: 243, slug: 'corinthians-x-penarol-historia-de-demissao-e-cobica-une-os-clubes', titulo: 'Corinthians x Peñarol: história de demissão e cobiça une os clubes',
    descricao: 'Os dois times se enfrentam nesta quinta-feira pela 3ª rodada da fase de grupos da Libertadores.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-04-30',
    imagem: '/images/noticias/corinthians-x-penarol-historia-de-demissao-e-cobica-une-os-clubes.jpg', tempo_leitura: 1,
  },
  {
    id: 242, slug: 'campo-do-cerro-porteno-estava-dentro-das-regras-da-conmebol', titulo: 'Campo do Cerro Porteño estava dentro das regras da Conmebol',
    descricao: 'ESPN apurou que o gramado do La Nueva Olla respeitava as medidas permitidas pelo regulamento da Conmebol no jogo contra o Palmeiras.',
    categoria: 'Futebol', autor: 'Redação 3W', data: '2026-04-30',
    imagem: '/images/noticias/campo-do-cerro-porteno-estava-dentro-das-regras-da-conmebol.jpg', tempo_leitura: 1,
  },
];

export const NOTICIAS_NBA = [
  {
    id: 367, slug: 'trump-e-vaiado-na-sua-primeira-visita-as-finais-da-nba', titulo: 'Trump é vaiado na sua primeira visita às finais da NBA',
    descricao: 'Presidente dos EUA marcou presença no Game 3 entre Knicks e Spurs no Madison Square Garden, tornando-se o primeiro em exercício a ir ao evento.',
    categoria: 'NBA', autor: 'Redação 3W', data: '2026-06-08',
    imagem: '/images/noticias/trump-e-vaiado-na-sua-primeira-visita-as-finais-da-nba.jpg', tempo_leitura: 1,
  },
  {
    id: 366, slug: 'final-da-nba-visita-de-trump-gera-fila-e-seguranca-de-aeroporto', titulo: 'Final da NBA: visita de Trump gera fila e segurança de aeroporto',
    descricao: 'Torcedores enfrentaram filas de dois quarteirões e revista reforçada no Madison Square Garden antes do jogo 1.',
    categoria: 'NBA', autor: 'Redação 3W', data: '2026-06-08',
    imagem: '/images/noticias/final-da-nba-visita-de-trump-gera-fila-e-seguranca-de-aeroporto.jpg', tempo_leitura: 1,
  },
  {
    id: 342, slug: 'knicks-x-spurs-datas-confirmadas-para-a-final-da-nba-202526', titulo: 'Knicks x Spurs: datas confirmadas para a final da NBA 2025/26',
    descricao: 'San Antonio e Nova York se enfrentam na decisão da temporada 2025/26, repetindo a final histórica de 1999.',
    categoria: 'NBA', autor: 'Redação 3W', data: '2026-05-31',
    imagem: '/images/noticias/knicks-x-spurs-datas-confirmadas-para-a-final-da-nba-202526.jpg', tempo_leitura: 1,
  },
  {
    id: 275, slug: 'wembanyama-arrasa-e-spurs-vencem-timberwolves-nos-playoffs', titulo: 'Wembanyama arrasa e Spurs vencem Timberwolves nos playoffs',
    descricao: 'Francês marcou 39 pontos, 15 rebotes e 5 bloqueios, tornando-se o quarto jogador na história com esses números em um jogo de playoffs.',
    categoria: 'NBA', autor: 'Redação 3W', data: '2026-05-09',
    imagem: '/images/noticias/wembanyama-arrasa-e-spurs-vencem-timberwolves-nos-playoffs.jpg', tempo_leitura: 1,
  },
  {
    id: 257, slug: 'pistons-vencem-jogo-7-e-avancam-as-semis-do-leste-na-nba', titulo: 'Pistons vencem jogo 7 e avançam às semis do Leste na NBA',
    descricao: 'Detroit bateu o Orlando Magic por 116 a 94 neste domingo (3) e garantiu vaga nas semifinais da Conferência Leste.',
    categoria: 'NBA', autor: 'Redação 3W', data: '2026-05-03',
    imagem: '/images/noticias/pistons-vencem-jogo-7-e-avancam-as-semis-do-leste-na-nba.jpg', tempo_leitura: 1,
  },
  {
    id: 252, slug: '76ers-viram-serie-contra-os-celtics-e-avancam-nos-playoffs', titulo: '76ers viram série contra os Celtics e avançam nos playoffs',
    descricao: 'Com noite de gala de Joel Embiid, Philadelphia completa virada histórica saindo de 1 a 3 para avançar nos playoffs.',
    categoria: 'NBA', autor: 'Redação 3W', data: '2026-05-03',
    imagem: '/images/noticias/76ers-viram-serie-contra-os-celtics-e-avancam-nos-playoffs.jpg', tempo_leitura: 1,
  },
  {
    id: 228, slug: 'rockets-vencem-lakers-e-evitam-varrida-nos-playoffs-da-nba', titulo: 'Rockets vencem Lakers e evitam varrida nos playoffs da NBA',
    descricao: 'Houston vence pela primeira vez na série e se mantém viva na disputa dos playoffs da NBA.',
    categoria: 'NBA', autor: 'Redação 3W', data: '2026-04-27',
    imagem: '/images/noticias/rockets-vencem-lakers-e-evitam-varrida-nos-playoffs-da-nba.jpg', tempo_leitura: 1,
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
    id: 352, slug: 'gp-de-monaco-2025-data-horario-e-onde-assistir', titulo: 'GP de Mônaco 2025: data, horário e onde assistir',
    descricao: 'A Fórmula 1 volta ao Principado de Mônaco no domingo (07), com largada às 10h (horário de Brasília).',
    categoria: 'Fórmula 1', autor: 'Redação 3W', data: '2026-06-05',
    imagem: '/images/noticias/gp-de-monaco-2025-data-horario-e-onde-assistir.jpg', tempo_leitura: 1,
  },
  {
    id: 311, slug: 'bortoleto-animado-para-o-gp-do-canada-fim-de-semana-especial', titulo: 'Bortoleto animado para o GP do Canadá: \'Fim de semana especial\'',
    descricao: 'A F1 volta à ação em Montreal após duas semanas de pausa desde o GP de Miami, com novidade no formato da etapa.',
    categoria: 'Fórmula 1', autor: 'Redação 3W', data: '2026-05-19',
    imagem: '/images/noticias/bortoleto-animado-para-o-gp-do-canada-fim-de-semana-especial.jpg', tempo_leitura: 1,
  },
  {
    id: 247, slug: 'bottas-revela-dieta-extrema-que-quase-o-deixou-em-inanicao-na-f1', titulo: 'Bottas revela dieta extrema que quase o deixou em inanição na F1',
    descricao: 'Piloto finlandês contou que viveu delírios e se sentiu como \'dependente de drogas\' para controlar o peso na segunda temporada pela Williams.',
    categoria: 'Fórmula 1', autor: 'Redação 3W', data: '2026-04-30',
    imagem: '/images/noticias/bottas-revela-dieta-extrema-que-quase-o-deixou-em-inanicao-na-f1.jpg', tempo_leitura: 1,
  },
  {
    id: 246, slug: 'gp-de-miami-2026-horarios-dos-treinos-e-da-corrida', titulo: 'GP de Miami 2026: horários dos treinos e da corrida',
    descricao: 'A F1 volta à ação após cinco semanas de pausa com o GP de Miami, primeira corrida em solo americano da temporada 2026.',
    categoria: 'Fórmula 1', autor: 'Redação 3W', data: '2026-04-30',
    imagem: '/images/noticias/gp-de-miami-2026-horarios-dos-treinos-e-da-corrida.jpg', tempo_leitura: 1,
  },
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
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/2026_Chinese_GP_-_Mercedes_-_Kimi_Antonelli_-_Qualifying.jpg/1280px-2026_Chinese_GP_-_Mercedes_-_Kimi_Antonelli_-_Qualifying.jpg', tempo_leitura: 6,
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
    id: 370, slug: 'naomi-ackie-negocia-papel-na-sequencia-de-corrente-do-mal', titulo: 'Naomi Ackie negocia papel na sequência de \'Corrente do Mal\'',
    descricao: 'Atriz de \'Pisque Duas Vezes\' e \'Mickey 17\' está em negociações finais para estrelar \'They Follow\' ao lado de Maika Monroe.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-06-10',
    imagem: '/images/noticias/naomi-ackie-negocia-papel-na-sequencia-de-corrente-do-mal.jpg', tempo_leitura: 1,
  },
  {
    id: 369, slug: 'primeiras-reacoes-a-toy-story-5-sao-de-elogios', titulo: 'Primeiras reações a Toy Story 5 são de elogios',
    descricao: 'Críticos e espectadores das primeiras sessões chamaram a sequência da Disney/Pixar de \'triunfal\' e \'excelente\'.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-06-10',
    imagem: '/images/noticias/primeiras-reacoes-a-toy-story-5-sao-de-elogios.jpg', tempo_leitura: 1,
  },
  {
    id: 368, slug: 'seus-amigos-e-vizinhos-anuncia-quatro-novos-nomes-na-3-temporada', titulo: '\'Seus Amigos e Vizinhos\' anuncia quatro novos nomes na 3ª temporada',
    descricao: 'Sydney Lemmon, Rick Cosnett, Mitchell Hoog e Gillian Zinser se juntam ao elenco da série com Jon Hamm no Apple TV+.',
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-06-10',
    imagem: '/images/noticias/seus-amigos-e-vizinhos-anuncia-quatro-novos-nomes-na-3-temporada.jpg', tempo_leitura: 1,
  },
  {
    id: 364, slug: 'x-men-97-jean-grey-ganha-visual-classico-dos-anos-2000-na-2-temporada', titulo: 'X-Men \'97: Jean Grey ganha visual clássico dos anos 2000 na 2ª temporada',
    descricao: 'Trailer da segunda temporada mostra Jean Grey com traje inspirado na fase dos Novos X-Men das HQs, com jaqueta amarela e preta.',
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-06-08',
    imagem: '/images/noticias/x-men-97-jean-grey-ganha-visual-classico-dos-anos-2000-na-2-temporada.jpg', tempo_leitura: 1,
  },
  {
    id: 360, slug: 'alfred-molina-interpretou-9-personagens-da-dc-alem-do-doc-ock', titulo: 'Alfred Molina interpretou 9 personagens da DC além do Doc Ock',
    descricao: 'Conhecido como Doutor Octopus na Marvel, o ator construiu uma longa trajetória paralela no universo DC.',
    categoria: 'Comics', autor: 'Redação 3W', data: '2026-06-06',
    imagem: '/images/noticias/alfred-molina-interpretou-9-personagens-da-dc-alem-do-doc-ock.jpg', tempo_leitura: 1,
  },
  {
    id: 355, slug: 'clint-eastwood-esta-aposentado-confirma-filho-kyle', titulo: 'Clint Eastwood está aposentado, confirma filho Kyle',
    descricao: 'Kyle Eastwood afirmou em entrevista à rádio France Info que o pai, aos 96 anos, está aposentado.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-06-07',
    imagem: '/images/noticias/clint-eastwood-esta-aposentado-confirma-filho-kyle.jpg', tempo_leitura: 1,
  },
  {
    id: 354, slug: 'mostra-gratuita-exibe-sete-filmes-de-hong-sang-soo-em-sp', titulo: 'Mostra gratuita exibe sete filmes de Hong Sang-soo em SP',
    descricao: 'O CCSP apresenta, até o dia 14, sete obras do diretor sul-coreano Hong Sang-soo, com entrada gratuita.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-06-07',
    imagem: '/images/noticias/mostra-gratuita-exibe-sete-filmes-de-hong-sang-soo-em-sp.jpg', tempo_leitura: 1,
  },
  {
    id: 350, slug: 'cabo-do-medo-chega-a-tv-com-bencao-de-scorsese', titulo: '\'Cabo do Medo\' chega à TV com bênção de Scorsese',
    descricao: 'Adaptação televisiva do clássico livro de John D. MacDonald conta com o aval do diretor Martin Scorsese.',
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-06-05',
    imagem: '/images/noticias/cabo-do-medo-chega-a-tv-com-bencao-de-scorsese.jpg', tempo_leitura: 1,
  },
  {
    id: 346, slug: 'novo-filme-do-he-man-aposta-na-nostalgia-dos-anos-1980', titulo: 'Novo filme do He-Man aposta na nostalgia dos anos 1980',
    descricao: 'Herói icônico dos desenhos infantis retorna ao cinema, mas pronuncia seu famoso grito com insegurança.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-06-03',
    imagem: '/images/noticias/novo-filme-do-he-man-aposta-na-nostalgia-dos-anos-1980.jpg', tempo_leitura: 1,
  },
  {
    id: 343, slug: 'one-piece-1184-abre-flashback-sobre-o-passado-de-brook-em-esperia', titulo: 'One Piece 1184 abre flashback sobre o passado de Brook em Esperia',
    descricao: 'Capítulo mais recente do mangá inicia flashback da infância de Brook no reino de Esperia, durante o arco de Elbaf.',
    categoria: 'Comics', autor: 'Redação 3W', data: '2026-05-31',
    imagem: '/images/noticias/one-piece-1184-abre-flashback-sobre-o-passado-de-brook-em-esperia.jpg', tempo_leitura: 1,
  },
  {
    id: 341, slug: 'robert-downey-jr-aparece-em-artes-de-vingadores-doutor-destino', titulo: 'Robert Downey Jr. aparece em artes de \'Vingadores: Doutor Destino\'',
    descricao: 'Kit colecionável do filme revela novas imagens de RDJ como Victor von Doom e dos heróis que enfrentarão o vilão.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-06-01',
    imagem: '/images/noticias/robert-downey-jr-aparece-em-artes-de-vingadores-doutor-destino.jpg', tempo_leitura: 1,
  },
  {
    id: 340, slug: 'minions-monstros-ganha-teaser-inedito-estreia-em-julho', titulo: 'Minions & Monstros ganha teaser inédito; estreia em julho',
    descricao: 'A Universal Pictures divulgou um teaser inédito de \'Minions & Monstros\', terceiro capítulo da franquia, com estreia nacional em 2 de julho.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-06-01',
    imagem: '/images/noticias/minions-monstros-ganha-teaser-inedito-estreia-em-julho.jpg', tempo_leitura: 1,
  },
  {
    id: 339, slug: 'echo-a-cadela-de-heartstopper-morre-em-18-de-maio', titulo: 'Echo, a cadela de \'Heartstopper\', morre em 18 de maio',
    descricao: 'Echo, que interpretou Nellie na série da Netflix, morreu no dia 18 de maio, conforme confirmado nas redes sociais do animal.',
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-06-01',
    imagem: '/images/noticias/echo-a-cadela-de-heartstopper-morre-em-18-de-maio.jpg', tempo_leitura: 1,
  },
  {
    id: 335, slug: 'novo-filme-de-resident-evil-chega-aos-cinemas-em-2026', titulo: 'Novo filme de Resident Evil chega aos cinemas em 2026',
    descricao: 'Dirigido por Zach Cregger, o novo Resident Evil tem estreia marcada para 17 de setembro de 2026 pela Sony Pictures.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-30',
    imagem: '/images/noticias/novo-filme-de-resident-evil-chega-aos-cinemas-em-2026.jpg', tempo_leitura: 1,
  },
  {
    id: 334, slug: 'da-magia-a-seducao-2-chega-aos-cinemas-em-setembro-de-2026', titulo: 'Da Magia à Sedução 2 chega aos cinemas em setembro de 2026',
    descricao: 'Sequência com Sandra Bullock e Nicole Kidman tem estreia marcada para 17 de setembro de 2026 pela Warner Bros.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-30',
    imagem: '/images/noticias/da-magia-a-seducao-2-chega-aos-cinemas-em-setembro-de-2026.jpg', tempo_leitura: 1,
  },
  {
    id: 332, slug: 'cdqcon-reune-mais-de-80-artistas-em-bh-com-oficinas-e-rpg', titulo: 'CDQCON reúne mais de 80 artistas em BH com oficinas e RPG',
    descricao: 'A 8ª edição da Feira da Casa dos Quadrinhos acontece em Belo Horizonte com programação gratuita ligada a HQs, animação e cultura geek.',
    categoria: 'Comics', autor: 'Redação 3W', data: '2026-05-29',
    imagem: '/images/noticias/cdqcon-reune-mais-de-80-artistas-em-bh-com-oficinas-e-rpg.jpg', tempo_leitura: 1,
  },
  {
    id: 331, slug: 'zeca-pagodinho-aparece-em-sua-propria-cinebiografia', titulo: 'Zeca Pagodinho aparece em sua própria cinebiografia',
    descricao: 'O sambista gravou participação especial no longa \'Deixa a Vida Me Levar\', filmado em Xerém, na Baixada Fluminense.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-29',
    imagem: '/images/noticias/zeca-pagodinho-aparece-em-sua-propria-cinebiografia.jpg', tempo_leitura: 1,
  },
  {
    id: 330, slug: 'mary-mcdonnell-entra-para-o-reboot-de-baywatch', titulo: 'Mary McDonnell entra para o reboot de \'Baywatch\'',
    descricao: 'Atriz duas vezes indicada ao Oscar e ao Emmy viverá Gayle, mãe de Hobie e avó de Charlie, na nova versão da série.',
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-05-29',
    imagem: '/images/noticias/mary-mcdonnell-entra-para-o-reboot-de-baywatch.jpg', tempo_leitura: 1,
  },
  {
    id: 327, slug: 'off-campus-bate-recordes-no-prime-video-em-12-dias', titulo: '\'Off Campus\' bate recordes no Prime Video em 12 dias',
    descricao: 'Drama romântico alcançou 36 milhões de espectadores nos primeiros 12 dias no Amazon Prime Video, superando estreias de The Boys e Reacher.',
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-05-27',
    imagem: '/images/noticias/off-campus-bate-recordes-no-prime-video-em-12-dias.jpg', tempo_leitura: 1,
  },
  {
    id: 326, slug: 'netflix-em-junho-rocky-avatar-futebol-e-true-crime', titulo: 'Netflix em junho: Rocky, Avatar, futebol e true crime',
    descricao: 'A Netflix traz em junho de 2026 a saga completa de Rocky e Creed, a 2ª temporada de Avatar e um pacote temático de futebol.',
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-05-27',
    imagem: '/images/noticias/netflix-em-junho-rocky-avatar-futebol-e-true-crime.jpg', tempo_leitura: 2,
  },
  {
    id: 325, slug: 'almodovar-lanca-natal-amargo-nos-cinemas-brasileiros', titulo: 'Almodóvar lança \'Natal Amargo\' nos cinemas brasileiros',
    descricao: 'Novo filme do diretor espanhol chega às salas nesta quinta (29) após estrear no Festival de Cannes.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-25',
    imagem: '/images/noticias/almodovar-lanca-natal-amargo-nos-cinemas-brasileiros.jpg', tempo_leitura: 1,
  },
  {
    id: 324, slug: 'titanic-e-la-la-land-voltam-aos-cinemas-em-junho', titulo: 'Titanic e La La Land voltam aos cinemas em junho',
    descricao: 'Os dois clássicos do Oscar terão sessões especiais nas salas UCI no dia 1º de junho, com ingressos a partir de R$ 12.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-25',
    imagem: '/images/noticias/titanic-e-la-la-land-voltam-aos-cinemas-em-junho.jpg', tempo_leitura: 1,
  },
  {
    id: 323, slug: 'cel-de-dragon-ball-z-e-vendido-por-mais-de-us-100-mil', titulo: 'Cel de Dragon Ball Z é vendido por mais de US$ 100 mil',
    descricao: 'Um fotograma de cena icônica de Dragon Ball Z foi arrematado por mais de 100 mil dólares, segundo o IGN Brasil.',
    categoria: 'Comics', autor: 'Redação 3W', data: '2026-05-23',
    imagem: '/images/noticias/cel-de-dragon-ball-z-e-vendido-por-mais-de-us-100-mil.jpg', tempo_leitura: 1,
  },
  {
    id: 322, slug: 'selecao-brasileira-de-ginastica-ritmica-faz-show-com-criancas-em-lauro-de-freita', titulo: 'Seleção Brasileira de Ginástica Rítmica faz show com crianças em Lauro de Freitas',
    descricao: 'Atletas da seleção brasileira de ginástica rítmica se apresentaram ao lado de crianças de projetos sociais em Lauro de Freitas.',
    categoria: 'Esportes', autor: 'Redação 3W', data: '2026-05-23',
    imagem: '/images/noticias/selecao-brasileira-de-ginastica-ritmica-faz-show-com-criancas-em-lauro-de-freita.jpg', tempo_leitura: 1,
  },
  {
    id: 321, slug: '7-series-para-maratonar-depois-de-the-last-of-us', titulo: '7 séries para maratonar depois de The Last of Us',
    descricao: 'De The Walking Dead a The Leftovers, confira sete séries com mundos colapsados, vínculos improváveis e dilemas morais.',
    categoria: 'Séries', autor: 'Redação 3W', data: '2026-05-23',
    imagem: '/images/noticias/7-series-para-maratonar-depois-de-the-last-of-us.jpg', tempo_leitura: 2,
  },
  {
    id: 320, slug: 'marsupilami-confusao-a-bordo-chega-aos-cinemas-em-julho-de-2026', titulo: 'Marsupilami: Confusão a Bordo chega aos cinemas em julho de 2026',
    descricao: 'Comédia de aventura com Philippe Lacheau estreia no Brasil em 23 de julho de 2026 pela Paris Filmes.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-23',
    imagem: '/images/noticias/marsupilami-confusao-a-bordo-chega-aos-cinemas-em-julho-de-2026.jpg', tempo_leitura: 1,
  },
  {
    id: 319, slug: 'uma-infancia-alema-chega-aos-cinemas-em-junho-de-2026', titulo: 'Uma Infância Alemã chega aos cinemas em junho de 2026',
    descricao: 'Drama de Fatih Akin com Diane Kruger estreia no Brasil em 18 de junho de 2026 pela Imovision.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-23',
    imagem: '/images/noticias/uma-infancia-alema-chega-aos-cinemas-em-junho-de-2026.jpg', tempo_leitura: 1,
  },
  {
    id: 317, slug: 'sessao-da-tarde-exibe-dois-e-demais-em-orlando-nesta-sexta', titulo: 'Sessão da Tarde exibe \'Dois É Demais Em Orlando\' nesta sexta',
    descricao: 'Comédia brasileira de 2023 vai ao ar nesta sexta-feira (22) às 15h30, na TV Globo.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-21',
    imagem: '/images/noticias/sessao-da-tarde-exibe-dois-e-demais-em-orlando-nesta-sexta.jpg', tempo_leitura: 1,
  },
  {
    id: 316, slug: 'brasileiro-vence-la-cinef-em-cannes-2026-com-laser-gato', titulo: 'Brasileiro vence La Cinef em Cannes 2026 com \'Laser-Gato\'',
    descricao: 'O curta \'Laser-Gato\', de Lucas Acher, conquistou o Primeiro Prêmio da La Cinef no Festival de Cannes 2026.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-22',
    imagem: '/images/noticias/brasileiro-vence-la-cinef-em-cannes-2026-com-laser-gato.jpg', tempo_leitura: 1,
  },
  {
    id: 313, slug: 'cannes-2026-bardem-e-driver-empolgam-seydoux-e-kore-eda-decepcionam', titulo: 'Cannes 2026: Bardem e Driver empolgam; Seydoux e Kore-eda decepcionam',
    descricao: 'Nos dias 4 e 5 da 79ª edição do festival, atuações explosivas dividiram espaço com decepções inesperadas na mostra competitiva.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-21',
    imagem: '/images/noticias/cannes-2026-bardem-e-driver-empolgam-seydoux-e-kore-eda-decepcionam.jpg', tempo_leitura: 1,
  },
  {
    id: 312, slug: 'fjord-chega-a-cannes-2025-como-forte-candidato-a-palma-de-ouro', titulo: '\'Fjord\' chega a Cannes 2025 como forte candidato à Palma de Ouro',
    descricao: 'Filmado na Noruega, \'Fjord\' transforma paisagem gelada em arena de conflito moral, social e político.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-21',
    imagem: '/images/noticias/fjord-chega-a-cannes-2025-como-forte-candidato-a-palma-de-ouro.jpg', tempo_leitura: 1,
  },
  {
    id: 309, slug: 'pedro-pascal-e-baby-yoda-tentam-resgatar-star-wars-nas-telas', titulo: 'Pedro Pascal e Baby Yoda tentam resgatar Star Wars nas telas',
    descricao: 'Disney aposta em \'O Mandaloriano e Grogu\', primeiro filme da franquia em sete anos, para recuperar o prestígio de Star Wars.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-20',
    imagem: '/images/noticias/pedro-pascal-e-baby-yoda-tentam-resgatar-star-wars-nas-telas.jpg', tempo_leitura: 1,
  },
  {
    id: 308, slug: 'cannes-2026-dias-3-e-4-apontam-favoritos-da-critica', titulo: 'Cannes 2026: dias 3 e 4 apontam favoritos da crítica',
    descricao: 'Slasher metalinguístico, encontro com Peter Jackson e Velozes & Furiosos marcam o terceiro e quarto dia da 79ª edição do festival.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-19',
    imagem: '/images/noticias/cannes-2026-dias-3-e-4-apontam-favoritos-da-critica.jpg', tempo_leitura: 1,
  },
  {
    id: 307, slug: 'teenager-sex-and-death-at-camp-miasma-estreia-em-cannes-2026', titulo: '\'Teenager Sex and Death at Camp Miasma\' estreia em Cannes 2026',
    descricao: 'Filme com título inspirado nos VHS dos anos 1980 abre a seção Um Certo Olhar do Festival de Cannes 2026.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-19',
    imagem: '/images/noticias/teenager-sex-and-death-at-camp-miasma-estreia-em-cannes-2026.jpg', tempo_leitura: 1,
  },
  {
    id: 306, slug: 'todo-mundo-em-panico-6-ganha-musica-original-inedita', titulo: 'Todo Mundo em Pânico 6 ganha música original inédita',
    descricao: 'A franquia de comédia e terror que estreou há 26 anos nos cinemas se prepara para seu sexto capítulo com trilha própria.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-18',
    imagem: '/images/noticias/todo-mundo-em-panico-6-ganha-musica-original-inedita.jpg', tempo_leitura: 1,
  },
  {
    id: 302, slug: 'tomie-de-junji-ito-entra-em-promocao-na-amazon-com-32-off', titulo: 'Tomie, de Junji Ito, entra em promoção na Amazon com 32% off',
    descricao: 'Volume 1 do clássico mangá de terror está com desconto na Book Friday da Amazon por tempo limitado.',
    categoria: 'Comics', autor: 'Redação 3W', data: '2026-05-16',
    imagem: '/images/noticias/tomie-de-junji-ito-entra-em-promocao-na-amazon-com-32-off.jpg', tempo_leitura: 1,
  },
  {
    id: 300, slug: 'anime-segunda-garota-mais-bonita-da-minha-turma-ganha-trailer-para-2026', titulo: 'Anime \'Segunda Garota Mais Bonita da Minha Turma\' ganha trailer para 2026',
    descricao: 'Comédia romântica japonesa divulga trailer e confirma estreia em 2026, chamando atenção do público ao redor do mundo.',
    categoria: 'Comics', autor: 'Redação 3W', data: '2026-05-15',
    imagem: '/images/noticias/anime-segunda-garota-mais-bonita-da-minha-turma-ganha-trailer-para-2026.jpg', tempo_leitura: 1,
  },
  {
    id: 299, slug: 'diretor-de-obsessao-revela-inspiracoes-no-terror-moderno', titulo: 'Diretor de \'Obsessão\' revela inspirações no terror moderno',
    descricao: 'Curry Barker, que também comandará o novo \'O Massacre da Serra Elétrica\', cita \'Hereditário\', \'Pearl\' e Mia Goth como referências.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-16',
    imagem: '/images/noticias/diretor-de-obsessao-revela-inspiracoes-no-terror-moderno.jpg', tempo_leitura: 1,
  },
  {
    id: 298, slug: 'beekeeper-2-o-que-se-sabe-sobre-a-sequencia-com-statham', titulo: 'Beekeeper 2: o que se sabe sobre a sequência com Statham',
    descricao: 'Após arrecadar US$ 162,6 milhões mundialmente, \'Beekeeper – Rede de Vingança\' ganha sequência com estreia marcada.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-16',
    imagem: '/images/noticias/beekeeper-2-o-que-se-sabe-sobre-a-sequencia-com-statham.jpg', tempo_leitura: 1,
  },
  {
    id: 297, slug: 'mambembe-diretor-revisita-projeto-inacabado-sobre-o-circo', titulo: '\'Mambembe\': diretor revisita projeto inacabado sobre o circo',
    descricao: 'Fabio Meira, de \'As Duas Irenes\' e \'Tia Virgínia\', volta a projeto antigo explorando personagens, histórias e lugares do universo circense.',
    categoria: 'Cinema', autor: 'Redação 3W', data: '2026-05-16',
    imagem: '/images/noticias/mambembe-diretor-revisita-projeto-inacabado-sobre-o-circo.jpg', tempo_leitura: 1,
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
