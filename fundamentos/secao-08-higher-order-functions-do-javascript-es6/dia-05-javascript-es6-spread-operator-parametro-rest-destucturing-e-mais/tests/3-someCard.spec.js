const someCard = require('../src/3-someCard');

describe('3 - Testando someCard().', () => {
  it('Verifica se a função someCard existe.', () => {
    expect(typeof someCard).toBe('function');
  });

  it('Existe alguma carta com a def menor que 10? Retorna "False".', () => {
    expect(someCard(10)).toBe(false);
  });

  it('Existe alguma carta com a def menor que 1000? Retorna "True".', () => {
    expect(someCard(1000)).toBe(true);
  });
});
