const data = require('../database');

// Retorne a soma de ATK de todos os monstros da base de dados    
// atualizar o meu acumulador
// retornar esse acumulador atualizado
const getAllMonstersAtk = () => data.cards.reduce((acc, card) => acc + card.atk, 0);

// console.log(getAllMonstersAtk());

// ---------------------------------------------------------------------------------------//
// Retorne uma string contendo os nomes de todos os monstros
const getMonstersNamesConcat = () => data.cards.reduce((acc, card, index) => (index === 0 ? card.name : `${acc}, ${card.name}`), '');
// console.log(getMonstersNamesConcat());

// ---------------------------------------------------------------------------------------//
/* (5, 14)
Separe os monstros de acordo com seu tipo no seguinte formato:

{
“Spellcaster”: [ monstros que são mago ],
“Dragon”: [ monstros que são dragões ],…
}

*/
const getMonstersByTypes = () => {
  return data.types.reduce((acc, type) => {
    acc[type.name] = [];

    data.cards.forEach((card) => {
      if (card.typeId === type.id) {
        acc[type.name].push(card);
      }
    });

    return acc;
  }, {}); // acumulador começa com objeto vazio
};
console.log(getMonstersByTypes());

// const obj = {
//   chave: 'valor';
// }

// obj['chave'] = 
