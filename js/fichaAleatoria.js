class Fichaleatoria {
  nome;
  classe;
  raça;
  acontecimento;
  alinhamento;
  amento;
  antecedente;
  motiva;
  info;
  constructor() {
    const nomes = [
      "Bigby",
      "Atosh",
      "Gerould",
      "Reginald",
      "Percival",
      "Elliot",
      "Gisella",
      "Satha",
      "Sannhildr",
      "Saria",
      "Annette",
      "Farric",
      "Kreig",
      "Thorbir",
      "Zahra",
      "Grun",
      "Patrick",
      "Archibald",
      "Arthur",
      "Lucy",
      "Viktoria",
      "Anastasia",
      "Elaina",
      "Lincoln",
      "Davis",
      "Cecile",
      "Iona",
      "Gabriel",
      "Hugo",
      "Corey",
      "Rudolf",
      "Nala",
      "Sora",
      "Rhogar",
      "Torinn",
      "Nora",
      "Nalaed",
      "Alberich",
      "Baern",
      "Adria",
      "Drusilia",
      "Sariel",
      "Ivellios",
      "Varian",
      "Ella",
      "Nyx",
      "Pog",
      "Sindri",
      "Kailee",
      "Jasmine",
      "Rose",
      "Lerry",
      "Oswalt",
      "Yevelda",
      "Rendar",
      "Zed",
      "Lilith",
      "Kallista",
      "Mantus",
      "Kairon",
      "Dalia",
      "Abdul",
      "Rauf",
      "Isolde",
      "Beatrice",
      "Agatha",
      "Norman",
      "Nicholas",
      "Peter",
      "Adam",
      "William",
    ];

    const classes = [
      "Caçador",
      "Guerreiro",
      "Bárbaro",
      "Paladino",
      "Clérigo",
      "Bardo",
      "Mago",
      "Feiticeiro",
      "Bruxo",
      "Druída",
      "Monge",
      "Ladino",
      "Artífice",
    ];

    const raças = [
      "Humano",
      "Anão",
      "Elfo",
      "Meio-elfo",
      "Halfling",
      "Tiefling",
      "Aaarakocra",
      "Meio-gigante",
      "Thri-kreen",
      "Draconato",
      "Gnomo",
    ];

    const alinhamentos = ["Leal", "Neutro", "Caótico"];

    const mento = ["bom", "neutro", "mal"];

    const antecedentes = [
      "Acólito",
      "Charlatão",
      "Criminoso",
      "Artista",
      "Eremita",
      "Herói do Povo",
      "Nobre",
      "Artesão da Guilda",
      "Forasteiro",
      "Sábio",
      "Marinheiro",
      "Soldado",
    ];

    const acontecimentos = [
      "Se apaixonou e se casou",
      "Sofreu uma terrível tragédia",
      "Gastou muito tempo em um trabalho relacionado ao seu Antecedente",
      "Conheceu pessoas importantes",
      "Lutou em uma batalha importante",
      "Cometeu um crime, ou foi acusado de um",
      "Encontrou um objeto de natureza mágica",
      "Participou de uma aventura",
      "Teve uma experiência sobrenatural",
    ];

    this.nome = nomes[Math.floor(Math.random() * (70 + 1))];
    this.classe = classes[Math.floor(Math.random() * (12 + 1))];
    this.raça = raças[Math.floor(Math.random() * (10 + 1))];
    this.alinhamento = alinhamentos[Math.floor(Math.random() * (2 + 1))];
    this.amento = mento[Math.floor(Math.random() * (2 + 1))];
    this.antecedente = antecedentes[Math.floor(Math.random() * (11 + 1))];
    this.acontecimento = acontecimentos[Math.floor(Math.random() * (8 + 1))];
  }

  getNome() {
    return this.nome;
  }

  getClasse() {
    return this.classe;
  }

  getRaça() {
    return this.raça;
  }

  getAcontecimento() {
    return this.acontecimento;
  }

  getAlinhamento() {
    return this.alinhamento;
  }

  getAmento() {
    return this.amento;
  }

  getMotiva() {
    return this.motiva;
  }

  getAntecedente() {
    return this.antecedente;
  }

  exibirNaTela() {
    this.info =
      "<table class='tabelaficha'><caption>" +
      this.getNome() +
      " &rarr; " +
      this.getRaça() +
      "<button class='add-button' onclick='addToLocalStorage({nome: \"" +
      this.getNome() +
      '", raça: "' +
      this.getRaça() +
      '", classe: "' +
      this.getClasse() +
      "\", idade: \"18\"})' style='margin-left: 5px' title='Adicionar Ficha'> Adicionar </button>" +
      "</caption>" +
      "<tr><td class='ce'>Nome</td><td class='cd'> " +
      this.getNome() +
      "</td></tr>" +
      "<tr><td class='ce'>Classe</td><td class='cd'> " +
      this.getClasse() +
      "</td></tr>" +
      "<tr><td class='ce'>Raça</td><td class='cd'> " +
      this.getRaça() +
      "</td></tr>" +
      "<tr><td class='ce'>Alinhamento</td><td class='cd'> " +
      this.getAlinhamento() +
      " e " +
      this.getAmento() +
      "</td></tr>" +
      "<tr><td class='ce'>Antecedente</td><td class='cd'> " +
      this.getAntecedente() +
      "</td></tr>" +
      "<tr><td class='ce'>Motivação</td><td class='cd'> " +
      this.getMotiva() +
      "</td></tr>" +
      "<tr><td class='ce'>Acontecimento Vital</td><td class='cd'> " +
      this.getAcontecimento() +
      "</td></tr></table>";
  }

  setRandomMotive() {
    const motivaAcolito = [
      "Porque fugiu de casa quando era criança e se refugiou em um templo",
      "A sua família o abandonou em um templo, por não terem condições de cuidar ou por não querer",
      "Cresceu em um lar com grande convicção religiosa. Servir o divino foi algo natural",
      "Foi tocado por um sermão no fundo da alma, moveu-o para a causa",
      "Seguiu os caminhos de algum amigo de infância, pessoa honorável, ou alguém que amava, para servir a fé",
      "Após ter contato com um servo dos deuses, se inspirando a entrar em um grupo religioso",
    ];

    const motivaCharlatao = [
      "Foi deixado a própria sorte, e a sua habilidade para manipulação o manteve vivo",
      "Aprendeu desde cedo que as pessoas são ingênuas e facilmente exploráveis",
      "Teve problemas muitas vezes, conseguiu sair dando seu jeito as vezes",
      "Viveu com um estelionatário, com o qual aprendeu o ofício",
      "Depois que um Charlatão deu um golpe na sua família, ele aprendeu o ofício para não ser enganado novamente",
      "Era pobre ou temia a pobreza e aprendeu alguns truques para ficar longe da miséria",
    ];

    const motivaCriminoso = [
      "Cresceu odiando a opressão de autoridades, achou no crime uma forma de lutar contra a tirania",
      "As necessidades o levaram a tomar esse rumo de vida para sobreviver",
      "Se juntou a uma gangue de marginais e com eles aprendeu a sua especialidade",
      "Um dos seus pais ou outro parente o ensinou sua especialidade para que assumisse os negócios da família",
      "Deixou sua casa e encontrou seu lugar em uma guilda de ladrões ou outra organização criminosa",
      "Estava entediado e começou no crime, descobriu que era bom nisso",
    ];

    const motivaArtista = [
      "Os membros de sua família viviam disso, então seguiu seu exemplo",
      "Sempre teve facilidade em tocar as pessoas através da música ou histórias",
      "Fugiu de casa para se juntar a uma trupe de menestréis",
      "Viu a performance de um bardo e descobriu sua paixão",
      "Ganhou alguns trocados na rua com seus números e com o tempo, fez seu nome",
      "Um artista viajante o acolheu e ensinou o ofício",
    ];

    const motivaEremita = [
      "Seus inimigos arruinaram sua reputação, então fugiu para longe da depreciação",
      "Fica confortável quando isolado, uma vez que procurava uma paz interior",
      "Nunca gostou das pessoas que chamava de amigos então foi fácil abandonar tudo e ficar só",
      "Se sentiu obrigado a abandonar o passado, relutou, e as vezes se arrepende de ter o feito",
      "Perdeu tudo, lar, família e amigos. Viver só foi tudo o que pôde fazer",
      "A decadência da sociedade o enojava, então decidiu deixa-la para trás",
    ];

    const motivaHeroi = [
      "Aprendeu o que era certo e errado pela família",
      "Sempre gostou das histórias de heróis e sempre sonhou em fazer algo extraordinário",
      "Odiava sua vida cotidiana, então decidiu aproveitar a sua chance",
      "Algum dos seus pais ou outro parente era um aventureiro corajoso, e também sua inspiração",
      "Um ermitão louco contou uma profecia no seu nascimento, dizendo que seria destinado a grandes feitos",
      "Sempre quis proteger os mais fracos que si",
    ];

    const motivaNobre = [
      "Veio de uma antiga e conhecida linhagem, sendo sua a missão de preservar o nome da família",
      "Sua família caiu em desgraça e sua pretenção era limpar o seu nome",
      "Sua família adquiriu o título abrindo um leque de possibilidades novas",
      "Seus familiares tem um título, porém nem seus ancestrais os reconheceriam desde então",
      "Sua família era reconhecida como cheia de pessoas notáveis, seguiu o exemplo",
      "Esperava expandir o poder e a influência de sua família",
    ];

    const motivaArtesao = [
      "Era aprendiz de um mestre que ensinou os negócios da guilda",
      "Um dia ajudou um artesão da guilda a manter um segredo ou completar uma tarefa, em troca, tornou-se aprendiz",
      "Um parente pertencente a uma guilda ajudou-o a entrar",
      "Sempre foi bom com as mãos, então aprendeu o ofício",
      "Queria fugir da situação em casa e começar uma vida nova",
      "Aprendeu o básico do ofício com um mentor, teve que entrar na guilda para completar seu treinamento",
    ];

    const motivaForasteiro = [
      "Passou muito tempo na mata quando novo, tornou-se um amante da natureza",
      "Desde pequeno não suportava o fedor das cidades e preferiu passar o tempo junto à natureza",
      "Conheceu a escuridão que se esconde pelo mundo e prometeu combate-la",
      "Seu povo vivia isolado da civilização, aprendeu os métodos para sobreviver com a família",
      "Após uma tragédia, se retirou para os ermos, deixando sua antiga vida para trás",
      "Sua família migrou para longe da civilização então aprendeu a se adaptar ao novo ambiente",
    ];

    const motivaSabio = [
      "Curioso por natureza, juntou seus bens e foi para uma universidade para aprender mais sobre o mundo",
      "Os ensinamentos do seu mentor abriram possibilidades para a sua mente nesse campo de estudo",
      "Sempre foi um leitor ávido, aprendeu muito sobre a sua matéria favorita sozinho",
      "Descobriu estudos sobre uma antiga biblioteca, depois de encontra-la aumentou sua sede de conhecimento",
      "Impressionou um mago que disse estar desperdiçando seu talento, começou a se dedicar ao uso do seu dom",
      "Um dos seus pais, parentes, deu lhe uma educação básica que fomentou seu apetite, saiu de casa para viver do que aprendeu",
    ];

    const motivaMarinheiro = [
      "Foi raptado por piratas e forçado a servir no navio até conseguir escapar",
      "Queria ver o mundo, juntou-se a tripulação de um navio mercante",
      "Um dos seus pais era um marinheiro que o levou para o mar",
      "Precisava escapar da sua comunidade, escondeu-se num navio. Quando encontrado pela tripulação foi forçado a trabalhar pela passagem",
      "Saqueadores devastaram sua vila, achou refugio num barco até que pudesse ter sua vingança",
      "Tinha poucas posses onde morava, então decidiu procurar a sorte em outro lugar",
    ];

    const motivaSoldado = [
      "Se juntou a milícia para proteger a sua comunidade de monstros",
      "Um dos seus pais era Soldado, decidiu continuar a tradição da família",
      "Um senhor local o forçou a se alistar no exército",
      "Uma guerra assolou sua terra enquanto crescia, lutar era a única vida que conhecia",
      "Queria fama e fortuna, juntou-se a uma companhia de mercenários, vendendo sua espada ao maior comprador",
      "Invasores atacaram sua terra, era seu o dever de levantar armas para defender seu povo",
    ];

    if (this.getAntecedente() == "Acólito") {
      this.motiva = motivaAcolito[Math.floor(Math.random() * (5 + 1))];
    } else if (this.getAntecedente() == "Charlatão") {
      this.motiva = motivaCharlatao[Math.floor(Math.random() * (5 + 1))];
    } else if (this.getAntecedente() == "Criminoso") {
      this.motiva = motivaCriminoso[Math.floor(Math.random() * (5 + 1))];
    } else if (this.getAntecedente() == "Artista") {
      this.motiva = motivaArtista[Math.floor(Math.random() * (5 + 1))];
    } else if (this.getAntecedente() == "Eremita") {
      this.motiva = motivaEremita[Math.floor(Math.random() * (5 + 1))];
    } else if (this.getAntecedente() == "Herói do Povo") {
      this.motiva = motivaHeroi[Math.floor(Math.random() * (5 + 1))];
    } else if (this.getAntecedente() == "Nobre") {
      this.motiva = motivaNobre[Math.floor(Math.random() * (5 + 1))];
    } else if (this.getAntecedente() == "Artesão da Guilda") {
      this.motiva = motivaArtesao[Math.floor(Math.random() * (5 + 1))];
    } else if (this.getAntecedente() == "Forasteiro") {
      this.motiva = motivaForasteiro[Math.floor(Math.random() * (5 + 1))];
    } else if (this.getAntecedente() == "Sábio") {
      this.motiva = motivaSabio[Math.floor(Math.random() * (5 + 1))];
    } else if (this.getAntecedente() == "Marinheiro") {
      this.motiva = motivaMarinheiro[Math.floor(Math.random() * (5 + 1))];
    } else if (this.getAntecedente() == "Soldado") {
      this.motiva = motivaSoldado[Math.floor(Math.random() * (5 + 1))];
    }
  }
}
