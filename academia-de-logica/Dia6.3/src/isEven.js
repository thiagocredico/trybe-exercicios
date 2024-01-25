const isEven = (number) => {
  if (number % 2 === 0) {
    return 'esse valor é par';
  }
  return 'esse valor é ímpar';
};

module.exports = isEven;
