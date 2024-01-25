const data = require('../database');

// Encontre apenas os monstros do tipo Dragão
const getDragons = () => data.cards.filter((card) => card.typeId === 1);

// console.log(getDragons());

// ---------------------------------------------------------------------------------------//
// Busque as cartas de um determinado tipo e maiores que o ataque indicado
const getCardsByTypeAndAtkGreaterThan = (typeName, atk) => data.cards.filter((card) => {
  const typeObj = data.types.find((type) => type.name === typeName);
  return card.typeId === typeObj.id && card.atk > atk;
});
// console.log(getCardsByTypeAndAtkGreaterThan({'Dragon', 2000}));