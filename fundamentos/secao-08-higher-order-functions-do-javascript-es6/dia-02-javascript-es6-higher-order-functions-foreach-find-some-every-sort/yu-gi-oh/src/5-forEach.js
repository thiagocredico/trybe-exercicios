const data = require('../database');
// const {findCardById} = require('./2-findCard')

//EXEMPLO DE SOMA DOS ELEMENTOS DE UM ARRAY
const arrayNumbers = [1, 2, 3, 4, 5];
let sum = 0;
// for(let index = 0; index < arrayNumbers.length; index += 1){
//   sum += arrayNumbers[index];
// }
//REFATORANDO PARA FOREACH()
arrayNumbers.forEach((number) => sum += number);
// console.log(sum);
// forEach não retorna nada!, nunca!

//******************* Yu-gi-Hofs! **********************
//ADICIONA A PROPRIEDADE 'GAME' EM TODOS OS ELEMENTOS DO ARRAY TYPES
const addGame = (gameName) => {
  data.types.forEach((type) => type.game = gameName);
  console.log(data.types);
  return data.types;
}
// console.log(addGame('Yu-Gi-Hofs'));
// console.log(data.types);

//******************* Yu-gi-Hofs! **********************
/*RETORNA TODAS AS CARTAS COM UMA STRING ('NAME' É DO TIPO 'TYPE').
EXEMPLO: 'Blue-Eyes White Dragon é do tipo Dragon'*/
const cardsFilter = () => {
  const words = [];
  data.cards.forEach((card) => {
    const getType = data.types.find((type)=> type.id === card.typeId);
    words.push(`${card.name} é do tipo ${getType.name}`);
  });
  return words;
}
// console.log(cardsFilter());

const cardsMap = () => {
  return data.cards.map((card) => {
    const getType = data.types.find((type)=> type.id === card.typeId);
      return `${card.name} é do tipo ${getType.name}`;
  });
}

console.log(cardsMap());


module.exports = {
  addGame,
  cardsFilter,
}
