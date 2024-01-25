const personagens = [
  {
    classe: 'Guerreiro',
    status: {
      hp: 150,
      atk: 10,
      def: 30,
    },
    habilidades: ['Pular', 'Bloquear', 'Ataque Rapido'],
  },
  {
    classe: 'Arqueiro',
    status: {
      hp: 100,
      atk: 20,
      def: 15,
    },
    habilidades: ['Desviar', 'Precisão', 'Tiro Flamejante'],
  },
  {
    classe: 'Mago',
    status: {
      hp: 85,
      atk: 40,
      def: 10,
    },
    habilidades: ['Teleportar', 'Bola de Fogo', 'Nevasca'],
  },
];

module.exports = personagens;
