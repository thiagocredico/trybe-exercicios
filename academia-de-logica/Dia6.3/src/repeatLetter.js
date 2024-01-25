const repeatLetter = (letter, text) => {
  let counter = 0;
  for (let index = 0; index < text.length; index += 1) {
    const element = text[index];
    if (letter === element) {
      counter += 1;
    }
  }
  return counter;
};

module.exports = repeatLetter;
