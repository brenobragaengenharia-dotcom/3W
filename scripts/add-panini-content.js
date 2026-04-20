const fs = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, '../lib/content.json');
const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
const now = new Date().toISOString();

const newEntries = {
  "watchmen-panini": {
    manchete: "A obra que redefiniu o que um quadrinho pode ser",
    sinopse_pt: "Em um mundo alternativo onde os super-heróis foram banidos, um vigilante mascarado é assassinado. Enquanto seu ex-parceiro investiga o caso, segredos perturbadores sobre o passado desses heróis começam a emergir — e uma conspiração de proporções apocalípticas se desenha no horizonte. Watchmen é considerada a mais importante obra já produzida em quadrinhos.",
    paragrafos_review: [
      "Alan Moore e Dave Gibbons criaram em 1986 o que muitos chamam de 'O Grande Romance Americano' nos quadrinhos. Watchmen não é apenas uma história de super-heróis — é uma desconstrução filosófica da ideia de heroísmo, uma meditação sobre poder, responsabilidade e a natureza humana. Cada página é meticulosamente planejada com uma estrutura visual que ecoa e amplifica o texto de formas que nenhum outro meio poderia replicar.",
      "Os personagens de Watchmen são estudos de caráter profundos e perturbadores: Rorschach, com sua visão de mundo absolutista e brutal; o Comediante, cujo cinismo esconde uma tragédia genuína; Dr. Manhattan, que transcendeu a humanidade e perdeu a capacidade de se importar. Moore equilibra esses arquétipos complexos com uma narrativa policialesca que funciona perfeitamente por si mesma.",
      "Esta edição da Panini traz a obra em toda sua grandeza para o público brasileiro. Leitura obrigatória não apenas para fãs de quadrinhos, mas para qualquer pessoa interessada em narrativa visual, ficção especulativa ou a história da cultura pop do século XX. Watchmen é, simplesmente, insubstituível."
    ],
    vale_ler: true,
    frase_final: "Quem vigia os vigilantes?",
    gerado_em: now
  },
  "batman-longo-halloween-panini": {
    manchete: "Um crime a cada feriado. Um mistério que Gotham não está pronta para ouvir.",
    sinopse_pt: "Em Gotham City, um assassino misterioso chamado Feriado elimina membros da máfia a cada data comemorativa. Batman, Jim Gordon e Harvey Dent unem forças para desvendar o caso — mas à medida que a investigação avança, os vilões clássicos de Gotham entram em cena e a tragédia de Harvey Dent se desenrola de forma irreversível. Jeph Loeb e Tim Sale entregam o thriller definitivo do Morcego.",
    paragrafos_review: [
      "O Longo Halloween é frequentemente citado como uma das melhores histórias do Batman já escritas. Jeph Loeb tece uma narrativa policialesca clássica no universo de Gotham, combinando o mistério do assassino Feriado com a gradual decadência moral de Harvey Dent. A estrutura em 13 capítulos, cada um ambientado em um feriado diferente, cria um ritmo hipnótico que prende o leitor do início ao fim.",
      "Tim Sale eleva a obra com um estilo visual único: figuras exageradas e expressionistas, paletas noturnas que capturam a atmosfera sombria de Gotham, e capas que seriam dignas de exposição em galeria. A caracterização de Batman como detetive — e não apenas lutador — é o ponto alto da narrativa.",
      "Para quem amou The Dark Knight de Nolan (que se inspirou fortemente nesta HQ), O Longo Halloween é leitura essencial. Uma história autocontida que não exige conhecimento prévio e entrega uma das melhores histórias de detetive do entretenimento moderno."
    ],
    vale_ler: true,
    frase_final: "Em Gotham, até os heróis guardam segredos escondidos na sombra.",
    gerado_em: now
  },
  "batman-ano-um-panini": {
    manchete: "Antes do morcego, havia apenas um homem determinado a mudar tudo",
    sinopse_pt: "A história de origem definitiva do Batman segundo Frank Miller. Jovem Bruce Wayne retorna a Gotham após anos de treinamento ao redor do mundo e começa sua guerra particular contra o crime — ao mesmo tempo que Jim Gordon chega à cidade profundamente corrompida com seus ideais intactos. Duas trajetórias paralelas que redefiniram para sempre o Homem-Morcego.",
    paragrafos_review: [
      "Publicada em 1987, Batman: Ano Um é o texto fundamental sobre o personagem que influenciou décadas de histórias, filmes e animações. Frank Miller reconstrói as origens do Batman de forma realista e politicamente contundente, situando a história em uma Gotham que parece uma crítica ao crime e à corrupção urbana dos anos 80 americanos.",
      "A narrativa paralela entre Bruce Wayne e Jim Gordon é o coração da obra. Gordon, recém-chegado a Gotham com uma esposa grávida, descobre uma cidade onde a polícia e o crime são praticamente indistinguíveis. David Mazzucchelli traduz o roteiro de Miller em imagens precisas e expressivas que envelheceram com dignidade.",
      "Esta é a história de origem que o Batman merecia: sombria, humana e sem concessões ao escapismo fácil. Para compreender Batman como personagem literário, é impossível ignorar Ano Um."
    ],
    vale_ler: true,
    frase_final: "Gotham, tenho medo de você. Mas juro que vou te salvar.",
    gerado_em: now
  },
  "v-de-vinganca-panini": {
    manchete: "A anarquia como ato de amor — e a liberdade como responsabilidade",
    sinopse_pt: "Em uma Inglaterra fascista do futuro próximo, um misterioso anarquista usando a máscara de Guy Fawkes inicia uma campanha de terror e arte contra o regime totalitário. V salva a jovem Evey Hammond e a transforma em sua aprendiz — mas os métodos dele são tão questionáveis quanto os de seus inimigos. Alan Moore examina o preço real da liberdade.",
    paragrafos_review: [
      "V de Vingança é talvez o trabalho mais politicamente coerente de Alan Moore. Escrita durante o governo Thatcher, a obra é uma resposta direta ao autoritarismo crescente da época, mas sua crítica transcende o contexto histórico e permanece dolorosamente relevante. V não é um herói simples: ele usa métodos terroristas e manipula aqueles que diz proteger.",
      "David Lloyd cria um visual distintivo usando preto, branco e tons intermediários — uma escolha estética que amplifica a dureza do mundo retratado e a ambiguidade moral dos personagens. A máscara de Guy Fawkes que V usa se tornou um dos símbolos culturais mais reconhecíveis do século XXI.",
      "V de Vingança não oferece respostas fáceis — oferece perguntas difíceis sobre obediência, resistência e o custo de transformar o mundo. Uma obra indispensável da literatura em quadrinhos."
    ],
    vale_ler: true,
    frase_final: "As pessoas não deveriam ter medo dos seus governos. Os governos deveriam ter medo das suas pessoas.",
    gerado_em: now
  },
  "sandman-preludio-panini": {
    manchete: "O Senhor dos Sonhos acordou — e o mundo nunca mais foi o mesmo",
    sinopse_pt: "Morpheus, o Eterno conhecido como Sonho, é capturado acidentalmente por um ocultista em 1916 e mantido preso por décadas. Após escapar, ele deve recuperar seus três objetos de poder espalhados pelo mundo mortal e sobrenatural. Neil Gaiman inaugura uma das séries mais aclamadas da história dos quadrinhos com uma narrativa mitológica de profundidade literária rara.",
    paragrafos_review: [
      "Prelúdios e Noturnos é o volume que apresenta o universo de Sandman — e já em suas primeiras páginas é evidente que Neil Gaiman está criando algo sem precedentes nos quadrinhos americanos. A série mistura mitologia, horror, comédia negra, literatura clássica e personagens do universo DC em uma narrativa que não se enquadra em nenhum gênero convencional.",
      "O arco final — em que Morpheus desce ao Inferno para recuperar seu elmo — é um dos momentos mais memoráveis de toda a série. O duelo de Morpheus com um demônio usando histórias em vez de armas é pura genialidade narrativa. Dave McKean cria capas surreais e perturbadoras que se tornaram ícones da arte gráfica.",
      "Sandman é frequentemente citado como a prova definitiva de que quadrinhos são literatura. Esta edição da Panini é a porta de entrada para um universo que vai muito além dos super-heróis — um cosmos de mitos, sonhos e histórias que Neil Gaiman construiu ao longo de 75 edições."
    ],
    vale_ler: true,
    frase_final: "Sonhos moldam o mundo tanto quanto a realidade. Talvez mais.",
    gerado_em: now
  },
  "crise-infinitas-terras-panini": {
    manchete: "O evento que apagou e reinventou o universo DC para sempre",
    sinopse_pt: "O Anti-Monitor ameaça destruir toda a existência, varrendo Terras inteiras do multiverso. Os heróis de todas as realidades devem se unir em um confronto épico que custou a vida de personagens icônicos e redefiniu permanentemente o universo DC. O crossover que estabeleceu o padrão para todos os eventos que vieram depois.",
    paragrafos_review: [
      "Publicada em 1985-86, Crise nas Infinitas Terras foi a resposta da DC ao acúmulo de décadas de continuidade contraditória. Marv Wolfman e George Pérez criaram o primeiro grande 'evento' dos quadrinhos — um crossover de escala cósmica com consequências permanentes. A morte do Flash neste arco é um dos momentos mais emocionantes da história dos quadrinhos.",
      "George Pérez é o grande herói visual desta obra. Suas páginas com dezenas de personagens interagindo simultaneamente são tecnicamente prodigiosas — cada figura identificável, cada ação compreensível, mesmo em composições de incrível complexidade.",
      "Para leitores que desejam compreender a DC como universo narrativo, Crise nas Infinitas Terras é leitura obrigatória. É o evento que consolidou a ideia de que histórias em quadrinhos podem ter consequências reais e permanentes."
    ],
    vale_ler: true,
    frase_final: "Alguns heróis sobrevivem à crise. Outros se tornam a crise para que outros sobrevivam.",
    gerado_em: now
  },
  "lanterna-verde-renascimento-panini": {
    manchete: "Hal Jordan volta dos mortos — e traz toda a mitologia dos Lanternas com ele",
    sinopse_pt: "Hal Jordan, o maior Lanterna Verde de todos os tempos, foi corrompido e destruiu a Tropa. Anos depois, algo ancestral e poderoso manipula os eventos para trazê-lo de volta. Geoff Johns não apenas restaura o personagem, mas reconstrói toda a mitologia dos Lanternas Verdes em uma das melhores histórias da DC.",
    paragrafos_review: [
      "Quando Geoff Johns assumiu a tarefa de restaurar Hal Jordan, a missão parecia impossível. Em Renascimento, Johns não apenas justifica o retorno de Hal — ele expande o universo dos Lanternas de forma que rendeu décadas de histórias subsequentes, incluindo as sagas Annihilation e Blackest Night.",
      "Ethan Van Sciver cria um visual que equilibra grandiosidade cósmica com detalhes precisos. As construções de energia verde são inventivas e espetaculares. A forma como Johns integra personagens como Kyle Rayner, John Stewart e Guy Gardner sem diminuir nenhum deles é um exercício de roteirização cuidadosa.",
      "Renascimento funciona tanto como ponto de entrada para novos leitores quanto como recompensa para veteranos. Johns está em seu auge como roteirista de personagens com herança histórica complexa — o resultado é uma história que honra o passado enquanto abre portas para o futuro."
    ],
    vale_ler: true,
    frase_final: "In brightest day, in blackest night — o juramento nunca envelhece.",
    gerado_em: now
  },
  "superman-terra-um-panini": {
    manchete: "E se Clark Kent ainda não soubesse quem ele realmente é?",
    sinopse_pt: "Um jovem Clark Kent chega a Metrópolis com talentos sobre-humanos suficientes para ser bem-sucedido em qualquer área. Mas quando uma ameaça alienígena devastadora ataca a Terra, ele deve fazer a escolha que definirá sua existência. J. Michael Straczynski reimagina as origens do Homem de Aço para o século XXI com uma sensibilidade íntima e moderna.",
    paragrafos_review: [
      "Superman: Terra Um funciona como um estudo de personagem mais do que um épico de ação. Straczynski coloca Clark Kent diante de uma decisão genuína: ele pode simplesmente ter uma vida normal e próspera. A escolha de se tornar Superman não é óbvia — é um sacrifício consciente de privacidade e normalidade que humaniza Clark de formas inéditas.",
      "Shane Davis entrega um visual limpo e contemporâneo que reposiciona Superman como personagem relevante para leitores modernos. A cena em que Clark experimenta diferentes uniformes antes de escolher o vermelho e azul é simultaneamente engraçada e emocionante.",
      "Para quem sempre achou Superman muito perfeito para se identificar, Terra Um é a resposta. Um Superman que duvida, que sente o peso da escolha e que ainda assim decide carregar o mundo — não por obrigação, mas por amor à humanidade que o criou."
    ],
    vale_ler: true,
    frase_final: "Ser o mais poderoso não é um privilégio. É uma responsabilidade que ninguém pediu.",
    gerado_em: now
  },
  "esquadrao-suicida-panini": {
    manchete: "Missão impossível. Equipe descartável. Resultado explosivo.",
    sinopse_pt: "A Agente Amanda Waller recruta os vilões mais perigosos da DC — Deadshot, Harley Quinn, Captain Boomerang e outros — para missões suicidas em troca de redução de pena. Com bombas implantadas nos pescoços como seguro, eles devem seguir ordens ou morrer. Quando tudo dá errado, a única opção é confiar em pessoas que você jamais confiaria.",
    paragrafos_review: [
      "O Esquadrão Suicida da era New 52 captura o que torna o conceito tão duradouro: a tensão entre personagens que são genuinamente ameaças uns aos outros, forçados a cooperar por uma força externa ainda mais ameaçadora. Amanda Waller é a verdadeira estrela — sua frieza calculista a torna um dos vilões-heróis mais convincentes dos quadrinhos.",
      "Harley Quinn rouba cada cena em que aparece, e fica claro por que o personagem explodiu em popularidade neste período. Deadshot tem uma profundidade trágica que contrasta com sua brutalidade profissional. A dinâmica de grupo é constantemente subvertida por traições e alianças inesperadas.",
      "Para fãs dos filmes, este é o material que inspirou o universo cinematográfico — e é mais sombrio, mais violento e mais inteligente do que qualquer adaptação conseguiu capturar. Uma das melhores fases de um dos conceitos mais originais da DC."
    ],
    vale_ler: true,
    frase_final: "A diferença entre herói e vilão é quem contrata quem.",
    gerado_em: now
  },
  "homem-aranha-azul-panini": {
    manchete: "Uma carta de amor para Gwen Stacy — escrita em azul e vermelho",
    sinopse_pt: "Peter Parker reflete sobre a tragédia mais marcante de sua vida: a morte de Gwen Stacy. Em flashbacks emocionais, ele revisita seus primeiros anos como Homem-Aranha e o amor que não pôde salvar. Jeph Loeb e Tim Sale entregam a HQ mais melancólica e bela da galeria do Aranha.",
    paragrafos_review: [
      "Homem-Aranha: Azul é, antes de tudo, uma carta de amor — Peter Parker narrando para um gravador cartas para Gwen Stacy, já morta há anos. Essa estrutura emocional transforma o que poderia ser uma simples história de origem em algo muito mais próximo de um romance melancólico sobre perda, culpa e saudade.",
      "Tim Sale está em sua forma mais poética aqui. O uso do azul como cor dominante — evocando tristeza e nostalgia — é uma escolha estética que carrega peso narrativo. As sequências de ação são espetaculares, mas são os momentos íntimos que definem a obra.",
      "Esta HQ é essencial para qualquer fã do Homem-Aranha, mas também para quem aprecia histórias sobre amor e perda contadas com honestidade. Azul é o tipo de quadrinho que você fecha ao fim com um aperto no peito — e isso é o maior elogio possível."
    ],
    vale_ler: true,
    frase_final: "Algumas pessoas deixam um vazio que tem a forma exata delas.",
    gerado_em: now
  },
  "guardioes-galaxia-vol1-panini": {
    manchete: "Os heróis mais improváveis da galáxia — e os mais divertidos",
    sinopse_pt: "Star-Lord reúne um grupo completamente disfuncional de forasteiros cósmicos — Gamora, Drax, Rocket, Groot e outros — para defender a galáxia das ameaças que os Vingadores terrestres simplesmente não alcançam. Brian Bendis reinventa os Guardiões para a era moderna com humor, ação intergaláctica e coração genuíno.",
    paragrafos_review: [
      "A versão dos Guardiões de Brian Bendis é um exercício bem-sucedido de popularização sem perda de identidade. Bendis captura a dinâmica de grupo que torna os Guardiões únicos: cada personagem é um inadaptado que encontrou família entre outros inadaptados. A química entre Rocket e Groot continua sendo o coração emocional da equipe.",
      "A arte de Steve McNiven é espetacular — seus designs espaciais são imponentes e criativos, e suas sequências de ação têm clareza visual mesmo nos momentos mais caóticos. O humor é constante e genuíno, nunca forçado.",
      "Para leitores que entraram nos Guardiões pelo filme e querem se aprofundar nos quadrinhos, este é o ponto de entrada perfeito — uma história acessível que não exige conhecimento prévio do universo cósmico Marvel."
    ],
    vale_ler: true,
    frase_final: "Somos Groot — e isso é suficiente.",
    gerado_em: now
  },
  "thor-assassino-deuses-panini": {
    manchete: "Um predador percorre os séculos matando deuses. E Thor é o próximo.",
    sinopse_pt: "Gorr, o Assassino dos Deuses, percorre três linhas do tempo eliminando divindades com uma arma de sombra absoluta. O jovem Thor da era viking, o Thor contemporâneo e o Rei Thor do futuro distante devem cada um enfrentar esse inimigo implacável que questiona a própria validade dos deuses. Jason Aaron em sua fase mais épica.",
    paragrafos_review: [
      "O arco do Assassino dos Deuses é o início da fase mais aclamada de Jason Aaron com o personagem e uma das melhores sagas do Thor na história dos quadrinhos. Gorr é um antagonista genuinamente filosófico: sua crença de que os deuses não merecem a adoração humana tem fundamento, tornando o confronto ao mesmo tempo físico e existencial.",
      "A estrutura em três linhas do tempo permite que Aaron explore diferentes versões de Thor: o passado impulsivo e arrogante, o presente maduro e questionador, o futuro solitário e sobrecarregado. Esad Ribic cria imagens de beleza épica que evocam pintura clássica mais do que quadrinhos convencionais.",
      "Esta é a história que transformou Thor em um dos personagens mais interessantes da Marvel moderna, preparando terreno para a mítica fase de Jane Foster. Indispensável para fãs do personagem."
    ],
    vale_ler: true,
    frase_final: "Que tipo de deus você é? — Aquele que ainda está de pé.",
    gerado_em: now
  },
  "homem-ferro-extremis-panini": {
    manchete: "O futuro da humanidade cabe em uma seringa — e Tony Stark vai descobrir o preço",
    sinopse_pt: "Uma nova tecnologia chamada Extremis funde orgânico e tecnológico de forma radical — e cai nas mãos erradas, criando uma ameaça aterrorizante. Tony Stark deve atualizar sua armadura, seus limites e sua própria biologia para responder. Warren Ellis entrega um dos melhores e mais influentes arcos do Homem de Ferro.",
    paragrafos_review: [
      "Extremis é a história que reinventou o Homem de Ferro para o século XXI — e foi a base para o Homem de Ferro 3 e influenciou profundamente a representação do personagem no MCU. Warren Ellis usa a ficção científica especulativa para explorar questões filosóficas sobre identidade, evolução e o preço do progresso tecnológico.",
      "Adi Granov criou um visual futurista baseado em física real — suas armaduras têm peso e textura mecânica que se tornaram referência. O redesign da armadura resultante de Extremis tornou-se a versão definitiva do personagem para uma geração de leitores.",
      "Para entender o Homem de Ferro moderno — o gênio que funde sua identidade com sua tecnologia — Extremis é leitura obrigatória. Uma obra curta que diz mais sobre o personagem do que décadas de histórias convencionais."
    ],
    vale_ler: true,
    frase_final: "A próxima evolução humana será tecnológica — e Tony Stark está na frente.",
    gerado_em: now
  },
  "jessica-jones-alias-panini": {
    manchete: "A heroína que escolheu a vida real — e descobriu que a vida real é mais brutal",
    sinopse_pt: "Jessica Jones abandonou a vida de super-heroína após um trauma devastador. Agora trabalha como detetive particular em Hell's Kitchen, investigando casos sujos que os Vingadores jamais tocariam. Brian Bendis cria uma das personagens mais humanas, brutas e autênticas já publicadas pela Marvel.",
    paragrafos_review: [
      "Alias foi lançada pelo selo Marvel MAX em 2001 e permanece uma das obras mais corajosas que a editora já publicou. Bendis cria Jessica Jones como personagem radicalmente diferente: uma ex-heroína com TEPT, problemas com álcool, relações complicadas e uma vida que não se encaixa nos moldes brilhantes do universo Marvel.",
      "Michael Gaydos cria um visual deliberadamente sujo e não-glamouroso — Hell's Kitchen como lugar cinzento onde coisas difíceis acontecem a pessoas reais. A paleta opaca contrasta com as aparições coloridas de outros heróis, criando uma divisão visual que reflete o distanciamento de Jessica da vida heroica.",
      "Esta série é a origem da narrativa que a série da Netflix adaptou — e os quadrinhos são mais sombrios, mais complexos e mais desconfortáveis do que a TV permitiu. Para leitores que querem o Marvel mais maduro e psicologicamente honesto que existe, Alias é destino obrigatório."
    ],
    vale_ler: true,
    frase_final: "Ser forte não significa não estar quebrada. Significa continuar mesmo assim.",
    gerado_em: now
  },
  "venom-carnificina-panini": {
    manchete: "O simbiótico mais letal de todos quer ser absoluto — e a Terra vai sangrar",
    sinopse_pt: "Cletus Kasady — Carnificina — ressurge com um propósito apocalíptico: reunir todos os simbióticos da Terra em um ritual de morte em massa. Eddie Brock e Venom devem se aliar com heróis e até vilões para evitar o fim. Donny Cates e Ryan Stegman entregam horror cósmico e ação em proporções épicas.",
    paragrafos_review: [
      "Donny Cates transformou Venom ao expandir a mitologia simbiótica para proporções cósmicas. Carnificina Absoluta é o clímax dessa expansão — um evento que recontextualiza décadas de história enquanto entrega um thriller de horror genuinamente assustador. Carnificina nunca foi tão ameaçador.",
      "Ryan Stegman é o parceiro perfeito para essa narrativa: seu estilo dinâmico e visceral captura a natureza orgânica e repulsiva dos simbióticos com detalhes que provocam desconforto real. As cenas de ação têm velocidade e impacto; as de horror têm atmosfera que poucos artistas conseguem criar.",
      "Para fãs de Venom, Carnificina ou do universo cósmico da Marvel, este é um evento essencial. Também funciona como introdução para novatos ao personagem — a escala da ameaça é imediatamente compreensível."
    ],
    vale_ler: true,
    frase_final: "Existem simbióticos. Existe Carnificina. Não é a mesma coisa.",
    gerado_em: now
  },
  "demolidor-sem-medo-panini": {
    manchete: "Antes de ser o Demolidor, Matt Murdock precisou aprender o que é medo",
    sinopse_pt: "Frank Miller reconstrói a origem de Matt Murdock do zero. Um jovem cego que perdeu seu pai, foi treinado por um mestre misterioso e deve construir sua identidade como herói enquanto enfrenta o Kingpin pela primeira vez. A história que estabeleceu o Demolidor como um dos personagens mais trágicos e fascinantes da Marvel.",
    paragrafos_review: [
      "O Homem sem Medo é uma das obras mais pessoais de Frank Miller — uma reimaginação das origens do Demolidor que valoriza o trauma psicológico sobre o espetáculo. Matt Murdock é apresentado como um jovem raivoso, assustado e determinado que gradualmente constrói o personagem que conhecemos.",
      "John Romita Jr. cria imagens sombrias e poderosas que complementam perfeitamente o tom introspectivo. Hell's Kitchen emerge como personagem próprio — um bairro em decadência que precisa de proteção tanto quanto seus habitantes. A relação de Matt com Elektra é apresentada aqui em sua forma mais crua e formativa.",
      "Para entender o Demolidor além do mito — compreender de onde vem a dor que o motiva — O Homem sem Medo é o texto fundamental. Uma obra que envelheceu excepcionalmente bem e que qualquer fã do personagem precisa ter na estante."
    ],
    vale_ler: true,
    frase_final: "O medo é o único inimigo que você nunca para de enfrentar.",
    gerado_em: now
  },
  "doutor-estranho-loucura-panini": {
    manchete: "A magia tem um custo — e a conta de Strange está vencida há anos",
    sinopse_pt: "Após anos usando magia sem aparente consequência, Stephen Strange descobre que cada feitiço esgotou reservas cósmicas que ele desconhecia. Uma ameaça sombria ataca todos os magos do universo simultaneamente, e Doutor Estranho precisa ir mais longe do que jamais foi — mesmo que isso o destrua. Jason Aaron reconstrói o Mago Supremo para a era moderna.",
    paragrafos_review: [
      "Jason Aaron traz ao Doutor Estranho a mesma abordagem aplicada com sucesso ao Thor: honrar a tradição do personagem enquanto o reformula para leitores contemporâneos. A ideia central — que cada feitiço cobra um preço que Strange sempre ignorou — é ao mesmo tempo simples e brilhante, criando nova fragilidade para um personagem que sempre pareceu poderoso demais.",
      "Chris Bachalo cria um visual psicodélico e surreal que captura perfeitamente o universo místico da Marvel. As dimensões alternativas, os feitiços e as criaturas sobrenaturais têm um design que oscila entre o belo e o perturbador.",
      "Esta fase do Doutor Estranho preparou o personagem para décadas de histórias subsequentes e estabeleceu regras claras para como a magia funciona no universo Marvel. Para fãs do personagem após os filmes, esta é a melhor porta de entrada pelos quadrinhos."
    ],
    vale_ler: true,
    frase_final: "Toda magia tem preço. A questão é quem paga.",
    gerado_em: now
  },
  "spider-verse-panini": {
    manchete: "Todo universo tem seu Homem-Aranha. E todos estão sendo caçados.",
    sinopse_pt: "Morlun e os Herdeiros caçam e assassinam versões do Homem-Aranha por todo o multiverso. Peter Parker deve unir todos os Aranhas existentes — do clássico ao moderno, do sério ao absurdo — em uma aliança improvável para sobreviver ao predador supremo. O maior crossover do Aranha de todos os tempos.",
    paragrafos_review: [
      "Spider-Verse é o evento que consolidou o conceito de multiverso para fãs do Homem-Aranha. Dan Slott equilibra dezenas de versões do personagem sem que nenhuma pareça supérflua, e cria antagonistas que amedrrontam de forma genuína. Miles Morales e Spider-Gwen emergem aqui como personagens de destaque.",
      "A diversidade de estilos artísticos usada para representar as diferentes versões do Aranha é um feito raro. Vemos o Aranha do cartoon dos anos 60, Spider-Gwen, Miles Morales — cada um com sua identidade visual preservada. É uma celebração da longevidade e adaptabilidade do personagem ao longo de décadas.",
      "Para fãs dos filmes do Aranhaverso ou de Miles Morales, este é o evento que inspirou diretamente essas histórias. Nos quadrinhos, Spider-Verse tem uma escala e um coração que nenhuma adaptação capturou completamente."
    ],
    vale_ler: true,
    frase_final: "Com grandes poderes vêm grandes responsabilidades — em qualquer universo.",
    gerado_em: now
  },

  // ── Mangás ────────────────────────────────────────────────────────────────
  "chainsaw-man-vol-1-panini": {
    manchete: "Ser humano e ser monstro — às vezes é exatamente a mesma coisa",
    sinopse_pt: "Denji é um jovem miserável que trabalha como caçador de demônios em dívida com a yakuza. Quando é assassinado por traidores, seu parceiro demoníaco Pochita se funde com seu coração, transformando-o em Chainsaw Man — um híbrido com motosserras emergindo do corpo capaz de se regenerar desmembrando a si mesmo. Tatsuki Fujimoto entrega uma das obras mais originais do mangá moderno.",
    paragrafos_review: [
      "Chainsaw Man é a prova de que o mangá shonen pode ser radicalmente subversivo sem perder sua energia fundamental. Fujimoto cria um protagonista que quer coisas absurdamente simples — uma cama, uma boa refeição, uma namorada — em um mundo de violência sobrenatural desconcertante. Essa dicotomia entre desejos banais e circunstâncias extraordinárias é o coração do humor e da tragédia da série.",
      "O estilo de Fujimoto é imediatamente reconhecível: traços dinâmicos que transmitem movimento brutal, composições que subvertem expectativas, e momentos de ternura genuína intercalados com violência extrema. Os demônios têm designs que partem de conceitos abstratos de medo, criando criaturas genuinamente perturbadoras.",
      "Para leitores acostumados com shonen convencional, Chainsaw Man vai desconstruir todas as expectativas. Para quem busca algo novo e original no mangá, é leitura urgente. Um dos títulos mais celebrados da geração atual."
    ],
    vale_ler: true,
    frase_final: "Sonhos simples num mundo que não tem nada de simples.",
    gerado_em: now
  },
  "hunter-x-hunter-vol-1-panini": {
    manchete: "O exame mais brutal do mundo — e o início de uma amizade impossível",
    sinopse_pt: "Gon Freecss descobre que seu pai ausente é um lendário Hunter. Determinado a encontrá-lo, ele enfrenta o mais brutal exame de seleção já concebido, onde encontra Killua, Kurapika e Leorio. Yoshihiro Togashi constrói um universo de regras complexas e personagens inesquecíveis desde a primeira página.",
    paragrafos_review: [
      "Hunter x Hunter é amplamente considerado um dos mangás mais inteligentemente construídos já criados. Togashi tem a rara habilidade de criar sistemas de poder que parecem ao mesmo tempo arbitrários e absolutamente coerentes, gerando tensão através de lógica em vez de espetáculo.",
      "A amizade entre Gon e Killua é a alma da série: dois meninos de origens completamente opostas — um filho de caçador criado em ilha paradisíaca, outro herdeiro de família de assassinos — que se reconhecem como almas gêmeas. Essa dinâmica carrega todos os momentos difíceis com empatia real.",
      "Para quem ainda não leu Hunter x Hunter, este primeiro volume é o ponto de partida de uma das jornadas mais recompensadoras dos quadrinhos japoneses. A Panini traz a série completa para o Brasil."
    ],
    vale_ler: true,
    frase_final: "Qualquer coisa pode ser um tesouro. Depende de quem está caçando.",
    gerado_em: now
  },
  "dragon-ball-vol-1-panini": {
    manchete: "Tudo começou com uma bola laranja e uma estrela dourada",
    sinopse_pt: "Son Goku, um menino com força sobre-humana e um rabo de macaco, vive isolado na floresta até encontrar Bulma em sua busca pelas Esferas do Dragão — sete objetos que, reunidos, concedem qualquer desejo. Uma aventura que começou como comédia de ação e se tornou a franquia de animação e mangá mais influente da história.",
    paragrafos_review: [
      "É impossível exagerar o impacto de Dragon Ball na cultura pop global. Akira Toriyama criou um universo imediatamente cativante, com um protagonista adorável na sua ingenuidade, design visual cheio de personalidade e um senso de humor que torna até as batalhas deliciosamente absurdas. O mangá original tem uma leveza que as adaptações em anime às vezes perdem.",
      "O trabalho artístico de Toriyama é exemplar em economia e clareza: com traços aparentemente simples, ele cria mundos ricos e sequências de ação perfeitamente legíveis. Seu senso de comédia física é impecável. Cada página tem ritmo e fluxo natural.",
      "Para as novas gerações que conheceram Dragon Ball pelo anime ou pelos jogos, os mangás originais oferecem a experiência mais próxima da visão de Toriyama. A edição da Panini é o jeito certo de ter esse clássico absoluto na estante."
    ],
    vale_ler: true,
    frase_final: "Goku nunca para de crescer — e nós crescemos junto com ele.",
    gerado_em: now
  },
  "black-clover-vol-1-panini": {
    manchete: "O garoto sem magia que sonha em ser o Rei dos Magos — e não vai desistir",
    sinopse_pt: "Em um mundo onde todos possuem magia, Asta nasceu sem nenhum poder. Com força física extraordinária e determinação inabalável, ele compete com seu rival e melhor amigo Yuno pelo título de Rei dos Magos. Yūki Tabata cria uma saga de superação com energia contagiante e batalhas espetaculares.",
    paragrafos_review: [
      "Black Clover é frequentemente comparado a Naruto pela premissa do protagonista excluído. Tabata honra essa comparação sem nunca ser derivativo — Asta é um personagem genuinamente único, cuja energia desenfreada e recusa em aceitar derrota criam um protagonista que o leitor quer ver triunfar.",
      "O sistema de magia de Black Clover é bem construído e continuamente expandido, com tipos de magia que definem personalidades além de poderes. A antimagia de Asta — sua capacidade de negar o poder de todos — é ao mesmo tempo o reflexo perfeito do seu papel de outsider e a ferramenta narrativa mais interessante da série.",
      "Para fãs de Naruto, My Hero Academia ou de shonen de torneios em geral, Black Clover é a próxima parada natural. Começa aqui com o primeiro volume que estabelece todos os pilares de uma série que cresceu para ser um dos títulos mais populares da geração."
    ],
    vale_ler: true,
    frase_final: "Não existe talento que supere o esforço de quem não aceita o impossível.",
    gerado_em: now
  },
  "fairy-tail-vol-1-panini": {
    manchete: "Uma guilda, uma família, uma aventura que não tem fim",
    sinopse_pt: "Lucy Heartfilia sonha em entrar na lendária guilda Fairy Tail. Quando conhece Natsu Dragneel — um Matador de Dragões que procura o dragão pai que o criou — ela é arrastada para o universo mais barulhento, afetivo e caótico dos quadrinhos japoneses. Hiro Mashima em plena forma criativa.",
    paragrafos_review: [
      "Fairy Tail é a definição de shonen de aventura no seu estado mais puro: ação emocionante, humor constante, laços de amizade que definem tudo e um elenco expansivo de personagens que o leitor inevitavelmente vai adorar. Mashima tem uma habilidade rara de criar camaradagem genuína, e esse senso de família é o que diferencia Fairy Tail de seus contemporâneos.",
      "O design visual é exuberante — personagens chamativos, magia com efeitos espetaculares e uma sensação constante de escala crescente. Lucy funciona como o ponto de entrada perfeito para novos leitores: ela chega ao mundo da guilda com os mesmos olhos curiosos do leitor novato.",
      "Para quem busca uma aventura de magia com coração enorme e nunca uma página sem acontecimentos, Fairy Tail é escolha segura. Começa aqui, com Lucy batendo na porta da guilda que vai mudar sua vida."
    ],
    vale_ler: true,
    frase_final: "A guilda não é um lugar. É a família que você escolheu.",
    gerado_em: now
  },
  "vinland-saga-vol-1-panini": {
    manchete: "A saga épica dos Vikings desenhada com maestria no Japão",
    sinopse_pt: "Thorfinn cresceu ouvindo histórias do explorador Leif Erikson e de uma terra chamada Vinland. Após a morte brutal de seu pai pelo mercenário Askeladd, ele segue o assassino em busca de vingança enquanto os Vikings devastam a Inglaterra. Makoto Yukimura cria uma obra madura e épica sobre guerra e o custo da violência.",
    paragrafos_review: [
      "Vinland Saga é frequentemente descrita como um dos melhores mangás já criados. Yukimura realizou pesquisa histórica meticulosa para criar um mundo que parece autêntico em sua brutalidade e beleza. A violência aqui não é glamourosa — é suja, consequente e moralmente questionável.",
      "Thorfinn é um protagonista fascinante porque seu arco de crescimento é deliberadamente lento e doloroso. Ele não começa como herói — começa como uma criança consumida por ódio, seguindo um homem que odeia porque é o único caminho que consegue enxergar. Essa tragédia pessoal é narrada com paciência que poucos mangás se permitem.",
      "A arte de Yukimura é impressionante: panorâmicas épicas de batalhas navais coexistem com momentos íntimos de delicadeza surpreendente. Para leitores maduros que buscam mangá de aventura histórica com substância literária real, Vinland Saga é insubstituível."
    ],
    vale_ler: true,
    frase_final: "Um verdadeiro guerreiro não precisa de espada. — Thors",
    gerado_em: now
  },
  "spy-x-family-vol-1-panini": {
    manchete: "O espião, a assassina e a telépata — a família mais improvável do mundo",
    sinopse_pt: "O espião Loid Forger deve criar uma família falsa para se infiltrar em uma escola de elite. Adota a pequena Anya — que esconde o poder de ler mentes — e se casa com Yor, uma assassina profissional. Nenhum dos três conhece a verdade dos outros — e todos estão aprendendo o que é família sem perceber.",
    paragrafos_review: [
      "Spy x Family é um fenômeno por um motivo simples: Tatsuya Endo criou uma comédia que funciona em múltiplas camadas. É paródia de espionagem, comédia familiar, história de crescimento e, inesperadamente, uma das histórias mais emocionantes sobre o que significa formar vínculos humanos genuínos.",
      "Anya é um dos personagens mais amados do mangá moderno — e com razão. Sua capacidade de ler mentes cria situações de comédia perfeita, mas é sua vontade de que a família permaneça unida que lhe dá profundidade emocional. O leitor sente tanto quanto ela.",
      "A arte de Endo é precisa e expressiva, com reações faciais que se tornaram memes culturais. O equilíbrio entre ação de espionagem, comédia doméstica e momentos genuinamente emocionantes é impecável. Uma obra que cativa leitores de todas as idades."
    ],
    vale_ler: true,
    frase_final: "Anya quer uma família. E está conseguindo — mesmo sem que ninguém perceba.",
    gerado_em: now
  },
  "berserk-vol-1-panini": {
    manchete: "A obra magna do mangá dark fantasy — uma das mais poderosas já criadas",
    sinopse_pt: "Guts é um mercenário solitário com uma espada enorme, um braço mecânico e uma Marca da Besta que atrai demônios ao cair da noite. Sua busca implacável por Griffith — seu ex-comandante que o traiu em um ritual de sacrifício — define uma narrativa de vingança, horror e humanidade que Kentaro Miura construiu ao longo de décadas.",
    paragrafos_review: [
      "Berserk é simplesmente uma das obras mais ambiciosas e poderosas da ficção do século XX em qualquer mídia. Kentaro Miura criou um mundo de dark fantasy com uma densidade visual e narrativa sem equivalente nos quadrinhos japoneses. A violência é extrema e intencional: Miura usa o horror para comentar sobre desumanização e sobrevivência.",
      "Guts é um anti-herói construído sobre camadas de trauma — não é difícil entender por que ele é como é, e isso torna cada momento de humanidade profundamente tocante. A relação entre Guts e Griffith é uma das mais complexas e tragicamente belas da ficção japonesa.",
      "Miura faleceu em 2021, deixando Berserk incompleto, o que torna esta obra ao mesmo tempo mais preciosa e mais melancólica. Ler Berserk é comprometer-se com uma jornada que exige tempo e atenção — e que recompensa com uma das experiências narrativas mais ricas disponíveis."
    ],
    vale_ler: true,
    frase_final: "Mesmo preso nas trevas, ele continua avançando. Porque é tudo que sabe fazer.",
    gerado_em: now
  },
  "mob-psycho-vol-1-panini": {
    manchete: "100% de esforço humano vale mais do que qualquer superpoder",
    sinopse_pt: "Shigeo 'Mob' Kageyama é o psíquico mais poderoso do mundo — mas tudo que quer é ser normal: ter amigos, melhorar no clube de atletismo e confessar seus sentimentos para uma colega. ONE cria uma subversão brilhante do gênero shonen com humor desconstrucionista e profundidade filosófica inesperada.",
    paragrafos_review: [
      "ONE — o mesmo autor de One-Punch Man — aplica aqui a mesma filosofia de desconstrução do gênero, com sensibilidade emocional ainda mais refinada. Mob não quer usar seus poderes. Não quer ser especial. Sua jornada é aprender a ser humano em um mundo que só enxerga nele uma arma.",
      "O estilo artístico de ONE é deliberadamente simples — quase amador — e isso é intencional. Quando Mob libera seus poderes ao máximo, os efeitos explodem em contraste com a linha simples do resto da obra, criando um impacto que estilos mais polidos não conseguiriam.",
      "Mob Psycho 100 é uma das obras mais humanistas do mangá moderno — um argumento em favor da conexão humana sobre o poder bruto. Delicioso para novos leitores e estimulante para veteranos que querem algo que desafie suas expectativas."
    ],
    vale_ler: true,
    frase_final: "100% de emoção. E o mundo inteiro sente.",
    gerado_em: now
  },
  "boruto-vol-1-panini": {
    manchete: "O filho do Hokage carrega um peso diferente — e segredos maiores",
    sinopse_pt: "Boruto Uzumaki, filho do lendário Naruto, vive na sombra de um herói sempre ocupado demais para estar presente. Enquanto tenta criar sua própria identidade, fenômenos misteriosos e uma organização sombria ameaçam a paz construída com tanto sacrifício. A continuação da saga Naruto começa com promessas e marcas que moldarão uma nova era.",
    paragrafos_review: [
      "Boruto enfrenta o desafio inevitável de qualquer continuação: justificar sua existência sem trair o legado que a originou. O primeiro volume demonstra consciência desse peso — Boruto é deliberadamente diferente de Naruto, com privilégios que o pai nunca teve e um conjunto diferente de problemas. A dinâmica pai-filho é o coração emocional da obra.",
      "Mikio Ikemoto traz um estilo visual que honra o trabalho de Masashi Kishimoto enquanto impõe sua própria voz. Os designs da nova geração são distintos e memoráveis. A aldeia de Konoha no período pós-guerra é um ambiente rico cheio de possibilidades narrativas.",
      "Para fãs da saga Naruto que querem saber o que acontece depois, Boruto é a continuação que respeita o passado. O primeiro volume é promissor o suficiente para justificar a jornada."
    ],
    vale_ler: true,
    frase_final: "Ser filho de herói não é herança. É ponto de partida.",
    gerado_em: now
  },
  "blue-exorcist-vol-1-panini": {
    manchete: "Filho do Satanás. Exorcista da Ordem. A contradição que vai salvar o mundo.",
    sinopse_pt: "Rin Okumura descobre que é filho do próprio Satanás e possui poderes demoníacos. Em vez de aceitar o destino sombrio, ele decide se tornar exorcista — usando as chamas azuis do diabo para proteger os humanos. Kazue Kato cria uma aventura sobrenatural de grande coração com worldbuilding rico e personagens cativantes.",
    paragrafos_review: [
      "Blue Exorcist captura algo que poucos shonen conseguem: a tensão entre identidade e destino. Rin não escolheu ser filho do Satanás, mas escolhe o que fazer com isso. Essa agência sobre sua própria narrativa o torna imediatamente simpático — ele é ao mesmo tempo a maior ameaça ao mundo e sua potencial salvação.",
      "Kazue Kato tem um estilo artístico altamente expressivo que excela em reações emocionais e design de criaturas demoníacas. A Academia True Cross é um ambiente ricamente detalhado que permite tanto ação sobrenatural quanto drama cotidiano. A relação de Rin com seu irmão gêmeo Yukio é especialmente bem desenvolvida.",
      "Para fãs de Naruto, Bleach ou de histórias sobrenaturais com protagonistas que carregam heranças perigosas, Blue Exorcist é leitura natural e recompensadora."
    ],
    vale_ler: true,
    frase_final: "Ser filho do diabo não define quem você é. Suas escolhas, sim.",
    gerado_em: now
  },
  "yu-yu-hakusho-vol-1-panini": {
    manchete: "Morrer foi apenas o começo — e o Mundo Espiritual nunca esteve preparado para Yusuke",
    sinopse_pt: "Yusuke Urameshi, um delinquente colegial, morre inesperadamente ao salvar uma criança — e surpreende as autoridades do Mundo Espiritual. Dado uma segunda chance como Detetive Espiritual, ele investiga casos sobrenaturais com novos aliados. Yoshihiro Togashi cria uma das obras mais influentes do mangá shonen.",
    paragrafos_review: [
      "Yu Yu Hakusho foi revolucionário nos anos 90 por humanizar seus personagens de uma forma que o shonen raramente se permitia. Yusuke não é um herói virtuoso — é um garoto difícil, impulsivo, frequentemente errado, que ainda assim tem um núcleo moral sólido. Essa complexidade, somada ao humor genuíno de Togashi, criou um personagem com fãs apaixonados por décadas.",
      "O primeiro volume estabelece o tônus da série: sobrenatural, mas profundamente humano. As missões de Yusuke introduzem uma galeria de personagens memoráveis — Botan, Kuwabara — e a semente dos futuros companheiros que farão a série explodir em popularidade.",
      "Para quem cresceu assistindo o anime nos anos 90, os mangás oferecem a história mais próxima da visão de Togashi. Para novos leitores, é uma introdução perfeita a um dos mestres do mangá shonen."
    ],
    vale_ler: true,
    frase_final: "Yusuke Urameshi: delinquente, morto, detetive. Nesta ordem.",
    gerado_em: now
  },
  "rurouni-kenshin-vol-1-panini": {
    manchete: "O espadachim que jurou nunca mais matar — num Japão que ainda precisa de sangue",
    sinopse_pt: "Kenshin Himura foi o Battōsai, o espadachim mais temido da Era Bakumatsu. Agora erra pelo Japão da Era Meiji com uma espada de lâmina invertida, protegendo os inocentes como forma de expiação. Nobuhiro Watsuki cria um samurai épico e profundamente humano em um período crucial da história japonesa.",
    paragrafos_review: [
      "Rurouni Kenshin é uma das grandes obras do mangá histórico. Watsuki equilibra precisão histórica com dramatismo shonen de forma magistral. O Japão da Era Meiji, em transição do feudalismo para a modernidade, é um pano de fundo perfeito para a jornada de Kenshin.",
      "O compromisso de Kenshin de nunca mais tirar uma vida é o motor moral da série. A tensão entre esse voto e as situações que o ameaçam cria conflito genuíno em cada arco. Quando vemos flashes do Battōsai emergindo, sentimos tanto o poder quanto o custo desse passado.",
      "Para leitores que apreciam samurai, história japonesa ou simplesmente shonen de alta qualidade com personagens profundos, Rurouni Kenshin é essencial. Um dos primeiros volumes mais emocionalmente satisfatórios dos quadrinhos japoneses."
    ],
    vale_ler: true,
    frase_final: "A espada que não mata protege mais do que a que não hesita.",
    gerado_em: now
  },
  "inuyasha-vol-1-panini": {
    manchete: "Um poço misterioso, quinhentos anos e um demônio que precisa de uma parceira",
    sinopse_pt: "Kagome Higurashi cai por um poço no templo da família e emerge no Japão feudal do período Sengoku. Lá encontra Inuyasha — um híbrido meio humano, meio demônio — e descobre que carrega dentro de si a Joia de Shikon. Juntos, devem reunir os fragmentos espalhados pelo país. Rumiko Takahashi em obra monumental.",
    paragrafos_review: [
      "Rumiko Takahashi é a autora de mangá de maior sucesso comercial da história do Japão — e Inuyasha é sua obra mais épica e ambiciosa. A estrutura de viagem no tempo combinada com o cenário feudal cria uma fantasia aventuresca que gerou uma das maiores bases de fãs do anime/mangá no Brasil e no mundo.",
      "A dinâmica entre Kagome e Inuyasha é o coração da série: ela, moderna e empática; ele, arrogante e defensivo de sua vulnerabilidade. A forma como Takahashi equilibra a tensão romântica com a ação e o desenvolvimento dos personagens secundários é uma lição de gestão de elenco.",
      "Para uma geração que cresceu assistindo Inuyasha no Cartoon Network, este mangá é tanto nostalgia quanto descoberta. Para novos leitores, é uma aventura fantástica sem paralelo no mangá shonen."
    ],
    vale_ler: true,
    frase_final: "Osuwari! — E o universo inteiro sente.",
    gerado_em: now
  },
  "evangelion-vol-1-panini": {
    manchete: "Os pilotos salvam o mundo. Mas quem salva os pilotos?",
    sinopse_pt: "Shinji Ikari é convocado pelo pai distante para pilotar o EVA Unit 01 contra criaturas chamadas Anjos que ameaçam a humanidade. Em Tokyo-3, o jovem relutante descobre que as batalhas externas são menos devastadoras do que as internas. A adaptação em mangá do anime que redefiniu o gênero mecha e a cultura otaku.",
    paragrafos_review: [
      "Neon Genesis Evangelion é talvez o anime mais analisado da história — e a adaptação em mangá de Yoshiyuki Sadamoto, que precedeu o anime em lançamento, oferece uma experiência diferente e igualmente rica. Sadamoto tem maior espaço para explorar a psicologia dos personagens, especialmente Shinji, cujo colapso emocional é retratado com delicadeza e honestidade.",
      "O design das criaturas e dos EVAs é extraordinário — Sadamoto é o character designer original do anime e traz toda sua maestria ao mangá. A Tokyo-3 futurística e pós-catástrofe alterna entre grandiosidade épica e claustrofobia psicológica.",
      "Evangelion é obrigatório para qualquer pessoa interessada em ficção científica japonesa, psicologia de personagens ou na evolução da cultura pop moderna. O início de uma jornada perturbadora e profunda que não tem igual na ficção japonesa."
    ],
    vale_ler: true,
    frase_final: "Não entre. Não entre. Não entre. — Ele entrou.",
    gerado_em: now
  },
  "sword-art-online-vol-1-panini": {
    manchete: "Dez mil jogadores presos. Game over significa morte real.",
    sinopse_pt: "Em 2022, o jogo de realidade virtual Sword Art Online tranca dez mil jogadores — morrer no game significa morrer na vida real. Kirito, um jogador solitário de elite, decide avançar sozinho pelos cem andares do castelo Aincrad para libertar a todos, enquanto laços inesperados mudam tudo que ele acreditava sobre conexão humana.",
    paragrafos_review: [
      "A adaptação em mangá de SAO captura o melhor do material original enquanto aproveita o visual para transmitir a grandiosidade de Aincrad. A premissa — um jogo de video game se tornando prisão mortal — foi revolucionária quando lançada e ainda ressoa em uma era de realidade virtual crescente.",
      "Kirito é um protagonista construído em torno de solidão e autossuficiência que aprende gradualmente que a conexão humana tem valor. A progressão desse arco é sutil na adaptação, com o visual sendo usado para mostrar o que o texto diria.",
      "Para fãs do anime que querem explorar a história em outra mídia, ou para novos leitores buscando ficção científica com elementos de RPG e drama humano, este primeiro volume é um ponto de entrada acessível e envolvente."
    ],
    vale_ler: true,
    frase_final: "Em Aincrad, a diferença entre vida e morte é uma barra de HP.",
    gerado_em: now
  },
  "dai-aventura-vol-1-panini": {
    manchete: "O herdeiro do dragão começa a jornada que vai mudar o mundo",
    sinopse_pt: "Dai cresceu em uma ilha pacífica criado por monstros bondosos, sonhando em se tornar herói. Quando o mestre Avan sacrifica-se para protegê-lo, Dai descobre poderes ocultos que revelam sua herança como descendente do Grande Dragão. A obra que inspirou Dragon Quest e encantou gerações no Japão, agora disponível no Brasil pela Panini.",
    paragrafos_review: [
      "A Grande Aventura de Dai é um dos mangás mais influentes da história do gênero de fantasia japonês. Riku Sanjo e Koji Inada criaram uma aventura que equilibra magistralmente elementos clássicos de RPG com personagens de profundidade emocional genuína.",
      "O sistema de magia e as classes de personagem — que ecoam e influenciaram os jogos de RPG japoneses — têm coerência e inventividade que envelheceram muito bem. Dai cresce de forma palpável sem perder sua essência fundamental de garoto bom e determinado.",
      "A recente adaptação em anime trouxe uma nova geração ao personagem — e os mangás originais, agora disponíveis pela Panini, são a forma mais fiel de experimentar a obra. Para fãs de fantasy, RPG ou aventura bem contada, esta é leitura obrigatória."
    ],
    vale_ler: true,
    frase_final: "Mesmo o herói mais lendário começa com uma pequena espada e um grande sonho.",
    gerado_em: now
  },
  "sword-art-online-progressive-vol-1-panini": {
    manchete: "A história de SAO recontada — andar por andar, com o tempo que merecia",
    sinopse_pt: "SAO Progressive reconstrói os primeiros meses de Kirito preso em Aincrad com uma profundidade que a história original não tinha espaço para explorar. Conhecemos Asuna muito mais cedo e de forma mais rica — os primórdios de uma das relações mais importantes da franquia SAO revelados com nuances que moldarão tudo que vem depois.",
    paragrafos_review: [
      "A premissa de SAO Progressive é engenhosa: em vez de pular anos de Aincrad em poucos capítulos, a série explora cada andar individualmente. Isso permite construir o mundo com uma riqueza de detalhe que a série original não tinha — cada andar tem sua própria atmosfera, desafios únicos e personagens que o habitam.",
      "Kiseki Himura adapta o visual com precisão e competência, criando sequências de batalha claras e dinâmicas. A Asuna desta versão é especialmente bem desenvolvida — vemos sua transformação de jogadora solitária e assustada em parceira confiante de Kirito, com tempo suficiente para que a evolução pareça natural.",
      "Para fãs de SAO que querem a história completa sem os saltos temporais que a série original se permitiu, Progressive é exatamente o que o título promete. Um complemento essencial para qualquer coleção SAO."
    ],
    vale_ler: true,
    frase_final: "Aincrad tem cem andares. E cada um tem sua própria história.",
    gerado_em: now
  }
};

content.comics = { ...content.comics, ...newEntries };
fs.writeFileSync(contentPath, JSON.stringify(content, null, 2), 'utf8');
console.log('OK adicionados', Object.keys(newEntries).length, 'novos conteudos ao content.json');
console.log('Total comics agora:', Object.keys(content.comics).length);
