const data = require('../database');


//ENCONTRA A PRIMEIRA CARTA PELO ID
const findCardById = (cardId) => {
  return data.cards.find((card) => card.id === cardId);
}
// console.log(findCardById(6));
//******************* Yu-gi-Hofs! **********************

//ENCONTRA A PRIMEIRA CARTA ATRAVÉS DO NOME. CASO NÃO ENCONTRE, LANÇAR UM ERRO.
const findCardByName = (cardName) => {
  const result = data.cards.find((card) => card.name === cardName);
  if(result !== undefined){
    return result;
  } else {
    throw new Error('Carta não encontrada.');
  }
}
// console.log(findCardByName('Dark Magician'));

//******************* Yu-gi-Hofs! **********************

//ENCONTRA A PRIMEIRA CARTA PELO NOME DO TIPO
const findCardByType = (cardType) => {
  const typeCardId = data.types.find((type) => type.name === cardType);
  return data.cards.find((card) => card.typeId === typeCardId.id);
}

console.log(findCardByType('Dragon'));

module.exports = {
  findCardById,
  findCardByName, 
  findCardByType
};
