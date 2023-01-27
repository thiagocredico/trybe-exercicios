const data = require('../database');

//TODAS AS CARTAS??
const everyCard = (number) => data.cards.every((card) => card.atk >= number);

// console.log(everyCard(2500));

module.exports = everyCard;
