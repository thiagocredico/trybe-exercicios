const data = require('../database');

// MOSTRA A QUANTIDADE DE CARTAS
const countCards = () => {
  return data.cards.length;
}

// console.log(countCards());

module.exports = countCards;
