const { awesomeMovies } = require('./02-spread');


describe('testa a união de dois arrays', () => {
  test('awesomeMovies é igual a união de horrorMovies e scifiMovies', () => {
    expect(awesomeMovies).toEqual(['Get Out', 'Us', 'Ma', 'Blade','MIB', 'Tenet', 'I Am Legend']);
  });
});
