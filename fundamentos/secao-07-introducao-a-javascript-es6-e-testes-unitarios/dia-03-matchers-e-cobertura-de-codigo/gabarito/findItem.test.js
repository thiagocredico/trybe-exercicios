const findItem = require('./findItem');

describe('a função findItem', () => {
  it('retorna o item do inventário dado o nome', () => {
    const inventory = [
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 },
    ];
    // expect(findItem(inventory, 'banana')).toEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 20 });
    expect(findItem(inventory, 'banana')).toHaveProperty('name', 'banana');
  });

  it('lança um erro para itens inexistentes', () => {
    const inventory = [
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 },
    ];
    expect(() => findItem(inventory, 'abacaxi'))
      .toThrow('O item não foi encontrado');
  });
});