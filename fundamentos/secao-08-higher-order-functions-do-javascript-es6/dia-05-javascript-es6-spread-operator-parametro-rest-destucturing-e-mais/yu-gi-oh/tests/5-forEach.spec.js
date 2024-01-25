const { addGame, cardsFilter } = require('../src/5-forEach');
const data = require('../database');

describe('5 - Testando exemplos de forEach.', () => {
  // it('Verifica se a função addGame existe.', () => {
  //   expect(typeof addGame).toBe('function');
  // });

  // it('Verifica se a propriedade "game" com o valor "Yu-Gi-Oh" foi adicionada a todas as cartas.', () => {
  //   addGame('Yu-Gi-Oh');
  //   expect(data.types[0]).toHaveProperty('game', 'Yu-Gi-Oh');
  //   expect(data.types[1]).toHaveProperty('game', 'Yu-Gi-Oh');
  //   expect(data.types[data.types.length - 1]).toHaveProperty('game', 'Yu-Gi-Oh');
  // });

  it('Verifica se a função retorna todas as cartas em um array com uma string para cada carta no seguinte formato: ("nome" é do tipo "tipo").', () => {
    expect(cardsFilter()).toEqual([
      'Blue-Eyes White Dragon é do tipo Dragon',
      'Dark Magician é do tipo Spellcaster',
      'Arianna the Labrynth Servant é do tipo Fiend',
      'Red-Eyes Black Dragon é do tipo Dragon',
      'D.D. Crow é do tipo Winged Beast',
      'Abaki é do tipo Fiend',
      'Absolute Crusader é do tipo Warrior',
      'Eka the Flame Buddy é do tipo Warrior',
      'Enlightenment Paladin é do tipo Spellcaster',
      'Dragon Queen of Tragic Endings é do tipo Dragon'
    ]);
  });
});
