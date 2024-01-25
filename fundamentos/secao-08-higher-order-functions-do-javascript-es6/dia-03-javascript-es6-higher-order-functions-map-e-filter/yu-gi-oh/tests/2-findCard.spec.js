const { findCardByName, findCardByType } = require('../src/2-findCard');

describe('2 - Testando findCardByName().', () => {
  it('Verifica se a função findCard existe.', () => {
    expect(typeof findCardByName).toBe('function');
  });

  it('Verifica se a função retorna a carta com o nome Dark Magician.', () => {
    expect(findCardByName('Dark Magician')).toEqual({
      id: 2,
      name: 'Dark Magician',
      typeId: 2,
      atk: 2500,
      def: 2100,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/46986414.jpg',
    });
  });

  it('Verifica se a função retorna a carta com o nome D.D. Crow.', () => {
    expect(findCardByName('D.D. Crow')).toEqual({
      id: 5,
      name: 'D.D. Crow',
      typeId: 4,
      atk: 100,
      def: 100,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/24508238.jpg',
    });
  });

  it('Retorna um erro com a mensagem "Carta não encontrada." caso a carta não seja encontrada.', () => {
    expect(() => {
      findCardByName('Xablau');
    }).toThrow('Carta não encontrada.');
  });
});

describe('2 - Testando findCardByType().', () => {
  it('Verifica se a função findCardByType existe.', () => {
    expect(typeof findCardByType).toBe('function');
  });

  it('Verifica se a função retorna o nome da primeira carta do tipo Dragon.', () => {
    expect(findCardByType('Dragon')).toEqual('Blue-Eyes White Dragon');
  });

  it('Verifica se a função retorna o nome da primeira carta do tipo Fiend.', () => {
    expect(findCardByType('Fiend')).toEqual('Arianna the Labrynth Servant');
  });
});
