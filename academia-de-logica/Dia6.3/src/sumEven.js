const isEven = (number) => number % 2 === 0;
const sumEven = (array) => {
  let sum = 0;
  if (!array) return sum;
  for (const val of array) {
    if (isEven(val)) {
      sum += val;
    }
  }
  return sum;
};

module.exports = sumEven;
