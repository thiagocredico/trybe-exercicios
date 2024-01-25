const data = require('../database');

// EXEMPLO DE SOMA DOS ELEMENTOS DE UM ARRAY
const arrayNumbers = [1, 2, 3, 4, 5];
let sum = 0;

// for(let index = 0; index < arrayNumbers.length; index += 1){
//   sum += arrayNumbers[index];
// }

// REFATORANDO PARA FOREACH()
arrayNumbers.forEach((number) => sum += number);

// console.log(sum);

//= ========================================================

// ADICIONA A PROPRIEDADE 'GAME' EM TODOS OS ELEMENTOS DO ARRAY TYPES
const addGame = (gameName) => {
  data.types.forEach((type) => type.game = gameName);
};

// console.log(addGame('Yu-Gi-Oh'));
// console.log(data.types);

//= ========================================================

/* RETORNA TODAS AS CARTAS COM UMA STRING ('NAME' É DO TIPO 'TYPE').
EXEMPLO: 'Blue-Eyes White Dragon é do tipo Dragon' */
const cardsFilter = () => {
  const names = [];
  data.cards.forEach((card) => {
    const getTypeName = data.types.find((type) => type.id === card.typeId);
    names.push(`${card.name} é do tipo ${getTypeName.name}`);
  });
  return names;
};

// console.log(cardsFilter());

// REFATORAÇÃO USANDO MAP
 //Refatore para que a função receba como parametro um array
 //Defina um valor padrão para o parametro caso ele não exista
 //Aplique desestruturação

const cardsMap = (array = data.cards) => array.map(({name, typeId}) => {
  const {name: typeName} = data.types.find(({id}) => id === typeId);
  return `${name} é do tipo ${typeName}`;
});

console.log(cardsMap(data.cards));

module.exports = {
  addGame,
  cardsFilter,
};
