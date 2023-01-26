const data = require('../database');

const yugiCharacters = ['Seto Kaiba', 'Yugi Muto', 'Pegasus',  'Téa Gardner', 'Dartz']
const lifePoints = [200, 500, 3000, 1500, 1000]

// console.log(yugiCharacters.sort());
//Ordene lifePoints em ordem decrecente
// console.log( lifePoints.sort((a, b) => b - a));

//Implemente a função sortByProp de modo que
//as cartas de batalha sejam ordenadas 
// pelo ataque ou pela defesa em ordem crecente.
const sortByProp = (prop) => data.cards.sort((a, b) => a[prop] - b[prop]);

console.log(sortByProp('def'));