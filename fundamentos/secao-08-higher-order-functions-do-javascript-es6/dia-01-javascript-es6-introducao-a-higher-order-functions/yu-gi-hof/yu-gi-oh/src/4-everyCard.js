const data = require('../database');

//TODAS AS CARTAS POSSUEM ATAQUE MAIOR DO QUE number??
// SE SIM, RETORNE TRUE, SE NÃO RETORNE FALSE
const everyCard = (number) => {
    return data.cards.every((card) => card.atk > number);
}

console.log(everyCard(50));

module.exports = everyCard;
