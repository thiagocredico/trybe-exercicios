const longestWord = (array) => {
  if (!array || array.length === 0) return 'Array inválido!';
  let word = array[0];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (typeof element !== 'string') return 'Array inválido!';
    if (element.length > word.length) {
      word = element;
    }
  }
  return word;
};

module.exports = longestWord;
