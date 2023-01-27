const data = require('../database');

const array = [3, 4, 7, 8, 2, 10, 29, 278, 9, 5, 2, 1];

// for (let index = 1; index < array.length; index += 1) {
//   for (let index2 = 0; index2 < index; index2 += 1) {
//     if (array[index] > array[index2]) {
//       const change = array[index];
//       array[index] = array[index2];
//       array[index2] = change;
//     }
//   }
// }

array.sort((a, b) => b - a);

// console.log(array);

//= ====================================================

const sortByKey = (key) => data.cards.sort((a, b) => a[key].localeCompare(b[key]));

console.log(sortByKey(''));
