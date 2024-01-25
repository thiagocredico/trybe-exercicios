const data = require('../database');

// MOSTRA A QUANTIDADE DE CARTAS
  //Refatore para que a função receba como parametro um array
  //Defina um valor padrão para o parametro caso ele não exista

const countCards = (array = []) => array.length;

// const countCards = ({cards} = []) => cards.length;
//Versão do Hector

console.log(countCards(data));

module.exports = countCards;
