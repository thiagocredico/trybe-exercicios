const countCards = require('../src/1-countCards');

describe('1 - Testando countCards().', () => {
  it('Verifica se a função countCards existe.', () => {
    expect(typeof countCards).toBe('function');
  });

  it('Verifica se a função mostra a quantidade de cartas igual a 10.', () => {
    expect(countCards()).toEqual(10);
  })
});
