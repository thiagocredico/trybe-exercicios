const getInventoryValue = require('./getInventoryValue');

describe('a função getInventoryValue', () => {
  it('retorna zero para um inventário vazio', () => {
    expect(getInventoryValue([])).toBe(0);
  });
  it('retorna o valor do inventário', () => {
    const inventory = [
      { name: 'maça', unit: 'kg', price: 5.69, quantity: 38 },
      { name: 'ovos', unit: 'dúzia', price: 5.07, quantity: 19 },
      { name: 'leite', unit: 'pacote', price: 5.19, quantity: 41 },
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 0 },
    ];
    // expect(getInventoryValue(inventory)).toBe(525.34); // FAIL
    expect(getInventoryValue(inventory)).toBeCloseTo(525.34);
  });
});