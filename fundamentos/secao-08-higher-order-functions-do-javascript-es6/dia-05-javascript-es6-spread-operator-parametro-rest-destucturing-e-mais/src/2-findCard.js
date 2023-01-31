const {cards, types }= require('../database');

//ENCONTRA A PRIMEIRA CARTA ATRAVÉS DO NOME. CASO NÃO ENCONTRE, LANÇAR UM ERRO.
 //Refatore para que a função receba como parametro um objeto 
  // Ex: {
  // name: 'nome_da_carta',
  // tipo: 'nome_do_tipo',
  // atributo: 'nome_do_atributo'
  //  }

const findCard = ({name}) => {
  const find = cards.find((card) => card.name === name);
  if(find !== undefined){
    return find;
  } else {
    throw new Error('Carta não encontrada.');
  }
}
const card7 = {
  name: 'Absolute Crusader',
  tipo: 'Warrior',
  atributo: 'Earth'
}

// console.log(findCard());

//=========================================================

//ENCONTRA O NOME DA PRIMEIRA CARTA PELO NOME DO TIPO
//Refatore para que a função receba como parametro um objeto 
  // Ex: {
  // name: 'nome_da_carta',
  // tipo: 'nome_do_tipo',
  // atributo: 'nome_do_atributo'
  //  }
const findCardByType = ({tipo}) => {
  const {id} = types.find(({name}) => name === tipo);
  return cards.find(({typeId}) => typeId === id).name;
}
console.log(findCardByType(card7));

module.exports = {
  findCard, 
  findCardByType
};
