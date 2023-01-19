const sum = require('./script');

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
