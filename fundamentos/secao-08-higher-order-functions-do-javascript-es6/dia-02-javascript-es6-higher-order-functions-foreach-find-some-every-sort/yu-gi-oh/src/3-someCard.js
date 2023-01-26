// const { cards } = require('../database');
const data = require('../database');

//EXISTE ALGUMA CARTA COM DEFESA MENOR DO number??
// SE SIM, RETORNE TRUE, SE NÃO RETORNE FALSE

const someCard = (number) => {
  return data.cards.some((card) => card.def < number);
}

console.log(someCard(101));

module.exports = someCard;