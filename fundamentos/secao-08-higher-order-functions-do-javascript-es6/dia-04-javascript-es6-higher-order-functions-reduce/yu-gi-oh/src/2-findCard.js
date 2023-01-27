const data = require('../database');

//ENCONTRA A PRIMEIRA CARTA ATRAVÉS DO NOME. CASO NÃO ENCONTRE, LANÇAR UM ERRO.
const findCard = (cardName) => {
  const find = data.cards.find((card) => card.name === cardName);
  if(find !== undefined){
    return find;
  } else {
    throw new Error('Carta não encontrada.');
  }
}

// console.log(findCard('D.D. Crow'));

//=========================================================

//ENCONTRA A PRIMEIRA CARTA PELO NOME DO TIPO
const findCardByType = (cardType) => {
  const getIdType = data.types.find((type) => type.name === cardType);
  return data.cards.find((card) => card.typeId === getIdType.id).name;
}

// console.log(findCardByType('Dragon'));

module.exports = {
  findCard, 
  findCardByType
};
