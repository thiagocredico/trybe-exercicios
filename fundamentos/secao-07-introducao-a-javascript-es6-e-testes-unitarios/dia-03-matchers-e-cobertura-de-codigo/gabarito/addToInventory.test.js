const addToInventory = require('./addToInventory');

describe('a função addToInventory', () => {
    it('adiciona item ao inventário', () => {
      const inventory = [
        { name: 'maça', unit: 'kg', price: 5.69, quantity: 38 },
        { name: 'ovos', unit: 'dúzia', price: 5.07, quantity: 19 },
        { name: 'leite', unit: 'pacote', price: 5.19, quantity: 41 },
      ];
      const previousLength = inventory.length;
      addToInventory(inventory, { name: 'banana', unit: 'kg', price: 1.99, quantity: 0 });
      expect(inventory).toHaveLength(previousLength + 1);
      expect(inventory).toContainEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 0 });
    });
  
    it('lança exceção se não for passado um array', () => {
      expect(() => addToInventory()).toThrow('O inventário deve ser um array');
    });
  });