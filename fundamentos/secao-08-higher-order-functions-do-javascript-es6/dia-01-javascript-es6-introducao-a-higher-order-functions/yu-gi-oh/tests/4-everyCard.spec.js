const everyCard = require('../src/4-everyCard');

describe('4 - Testando everyCard().', () => {
  it('Verifica se a função everyCard existe.', () => {
    expect(typeof everyCard).toBe('function');
  });

  it('Todas as cartas tem um ataque maior ou igual a 18? Retorna "True".', () => {
    expect(everyCard(18)).toBe(true);
  });

  it('Todas as cartas tem um ataque maior ou igual a 2500? Retorna "False".', () => {
    expect(everyCard(2500)).toBe(false);
  });
});
