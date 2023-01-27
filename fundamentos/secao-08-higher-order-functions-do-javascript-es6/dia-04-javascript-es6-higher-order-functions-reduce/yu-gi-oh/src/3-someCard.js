const data = require('../database');

//EXISTE ALGUMA CARTA??
const someCard = (number) => data.cards.some((card) => card.def < number);

// console.log(someCard(1000));

module.exports = someCard;