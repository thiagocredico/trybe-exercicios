// Algoritmo para identifcar hashtags em um feed do twitter sobre a copa

// Lista de hashtags


// Lista de tweets
let tweets = [
  "Se o Taffarel falou, tá falado! Curte aí quem tá gostando da marcação brasileira na Copa do Mundo da FIFA™. #TáNaCopaTáNoSportv #FIFAWorldCup https://t.co/7VzIU7c3SP",
  "@portal_volei @KTO_brasil Bom dia, @portal_volei! Agenda cheia aqui na minha telinha hoje, com Superliga Feminina em dose dupla. A partir das 18h50 já tô ON pra Brusque x Osasco. Mais tarde ainda tem Sesi-Bauru x Flamengo, com pré-jogo a partir das 21h20. É tudo no sportv2, hein! SÓ BORA! #VoleiNoSportv",
  "@galvaobueno Prêmio mais que merecido, Galvão! Através da sua voz o Brasil viveu momentos inesquecíveis. Você é uma parte GIGANTE dessa paixão que o brasileiro tem pelo futebol. E que venha o HEXA para que você escreva mais um capítulo dessa linda história! ??????",
  "@fifaworldcup_pt @Casemiro @vinijr Marca, cria e ainda faz golaço. O melhor volante do mundo é brasileiro e eu posso provar. Casemiro joga DEMAIS! ??????",
  "@brasilemparis CADÊ, GUI???? Não tava preparado pra essa mudança... ??????",
  "@Oledobrasil Já to com saudades de tomar café e passar um joguinho ??",
  "@Oledobrasil Com certeza ??",
  "@timebrasil AMAMOS* ????",
  "@mvabrasil Oooooooooo BRASILLLLL OLE OLE????",
  "Não tem como, o Lédio Carmona é um dos maiores brasileiros de todos os tempos! ?? #TáNaCopaTáNoSportv #BRA #SUI https://t.co/HnOmGzpqvh",
  "@mvabrasil BRASIL SIL SIL SIL ??????",
  "A torcida brasileira invadiu o Catar e busca do Hexa! ???? Vem acompanhar aqui na minha telinha Brasil x Suíça! #TáNaCopaTáNoSportv https://t.co/GYul7c6JAg",
  "Por que não tem brasileiro gritando Olé nesse estádio? #TáNaCopaTáNoSportv #BRA #SUI",
  "@adidasbrasil Nosso sonho! ??",
  "A seleção argentina tem ótimas opções no seu elenco. Será que o técnico Scaloni vai manter esse time para o próximo duelo? ?? #TaNaCopaTaNoSportv https://t.co/nmkTRQc0n5",
  "Sheik brazuca? HAHAHAHAHA O brasileiro é o melhor do mundo, não tem como! ????????? #TáNaCopaTáNoSportv #CopaDoMundo #Futebol #FIFA #Catar2022 https://t.co/qg7iJ9VXv7",
  "@Oledobrasil Não é muito difícil! ????",
  "Deixar aquele golzinho GUARDADO na rede argentina...",
  "#TáNaCopaTáNoSportv #ARG #MEX",
  "Os árabes não tão muito felizes com o Wilton Pereira Sampaio, não! ?? O que vocês tão achando da atuação do brasileiro hoje???: Lars Baron/Getty Images #TáNaCopaTáNoSportv https://t.co/ZZc5rfi6eV",
  "O homem tá trabalhando duro pra substituir o Danilo! ??????: @goalbrasil #TáNaCopaTáNoSportv https://t.co/FCu9FMYddn",
  "Passando aqui pra perguntar se tá tudo bem com a torcida argentina ?? #TáNaCopaTáNoSportv https://t.co/QvW7rxr5Rv",
  "Argentinos tendo que aguentar as zoações dos brasileiros... ?? #TáNaCopaTáNoSportv https://t.co/KlbyOceOkH",
  "Os brasileiros vão dominar o mundo e eu posso provar! Que resenha maravilhosa! ???????? Instagram/cristianbellk #TaNaCopaTaNoSportv https://t.co/TrKthObaD5",
  "@Oledobrasil Como diria o narrador mexicano Galvón Bueño: Ganar es bueno, ganar de la Argentina es mucho mejor! ????????????",
  "@Reuters Imagem de dor e sofrimento pro torcedor brasileiro ?? O brasileirinho não tem um minuto de paz ??#TáNaCopaTáNoSportv",
  "@adidasbrasil ????",
  "- Qual país vocês querem ver campeão? - Corinthians O torcedor brasileiro é muito bom! ?? #TáNaCopaTáNoSportv #BRA https://t.co/n5xnOPw0ca",
  "Os indianos mais brasileiros que vocês vão ver hoje! E eles acertaram o placar, tá?! ?? #TaNoSportv #TaNoCoracao #TáNaCopaTáNoSportv https://t.co/a1W2Pz041H",
  "@mvabrasil ÔÔÔOOOOOO EM 22 É O POMBOOOOO ????????????",
  "@timebrasil Quem não tá assim agora é maluco ????",
  "@timebrasil @richarlison97 @JogosOlimpicos @CBF_Futebol ???? EU E ????? E MINHA CASA ?????? SERVIMOS AO ?????? RICHARLISON ???????????? ?????????? ??????????????",
  "@mvabrasil É A TROPA DO PRU ????",
  "Já vai preparando outro discurso aí, professor. Amanhã o Brasa vai amassar, tá maluco!  ??????",
  "Não marca bobeira, torcedor. Amanhã é a grande estreia da seleção brasileira aqui na minha telinha! A partir das 16h. Vamos juntos??? Reuters",
  "#TaNaCopaTaNoSportv https://t.co/y6bx6W1Qw4",
  "@timebrasil @JogosOlimpicos @desimpedidos @soueunacopa @futfanatics @sfpepior @Oledobrasil @goleada_info @BRZoeira_ @zonadeclubismo @oficialmanualjr ??",
  "@Oledobrasil Acalma-te Olé ??",
];

console.log(tweets); 
