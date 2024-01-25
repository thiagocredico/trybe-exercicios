const clearInventory = require('./clearInventory');

describe('A função clearInventory', () => {
  it('remove itens com quantidade 0', () => {
    const inventory = [
      { name: 'maça', unit: 'kg', price: 5.69, quantity: 38 },
      { name: 'ovos', unit: 'dúzia', price: 5.07, quantity: 19 },
      { name: 'leite', unit: 'pacote', price: 5.19, quantity: 41 },
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 0 },
    ];
    clearInventory(inventory);
    // expect(inventory.length).toBe(3);
    expect(inventory).toHaveLength(3);
    expect(inventory).not.toContainEqual(
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 0 },
    );
    expect(Array.isArray(inventory)).toBeTruthy();
  });
});