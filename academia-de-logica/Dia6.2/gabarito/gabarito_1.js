// Gabarito - Exercício 1
const verifyIsValidArray = (array) => {
  if (!Array.isArray(array) || array.length <= 1) {
    throw new Error('Parâmetro inválido.');
  }
};

const allEqual = (array) => {
  try {
    verifyIsValidArray(array);

    for (let value of array) {
      if (value !== array[0]) {
        return false;
      }
    }
  
    return true;
  } catch (error) {
    return error.message;
  }
};

const equalNumbers = [1, 1, 1];
console.log(allEqual(equalNumbers)); // true

const randomNumbers = [23, 16, 48];
console.log(allEqual(randomNumbers)); // false

const invalidArray = 'xablau';
console.log(allEqual(invalidArray)); // Parâmetro inválido.