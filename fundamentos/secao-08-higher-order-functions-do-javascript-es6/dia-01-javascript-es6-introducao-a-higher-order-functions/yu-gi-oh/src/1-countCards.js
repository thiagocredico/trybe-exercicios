const data = require('../database');

//MOSTRA A QUANTIDADE DE CARTAS NA BASE DE DADOS
const countCards = () => {
  return data.cards.length
}

console.log(countCards());

module.exports = countCards;