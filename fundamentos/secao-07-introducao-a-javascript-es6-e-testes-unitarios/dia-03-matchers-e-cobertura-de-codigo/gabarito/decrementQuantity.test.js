const decrementQuantity = require('./decrementQuantity');

describe('a função decrementQuantity', () => {
  it('desconta da quantidade disponível do item', () => {
    const inventory = [
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 },
    ];
    const result = decrementQuantity(inventory, 'banana', 5);
    expect(result.quantity).toBe(15);
    expect(inventory).toContainEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 15 });
  });

  it('decrementa uma unidade do item, quando a quantidade não é informada', () => {
    const inventory = [
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 },
    ];
    const result = decrementQuantity(inventory, 'banana');
    expect(result.quantity).toBe(19);
    expect(inventory).toContainEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 19 });
  });

  it('lança um erro ao tentar remover mais do que tem', () => {
    const inventory = [
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 },
    ];
    expect(() => decrementQuantity(inventory, 'banana', 30))
      .toThrow('O decremento deve ser menor ou igual a quantidade atual');
  });
});