// Estrutura convencional
// function sum (num1, num2) {
//   return num1 + num2;
// }

// Usando arrow functions 
// 1. retirar a palavra function e no lugar colocar a palavra const
// const sum (num1, num2) {
//   return num1 + num2;
// }

// 2.colocar um = depois do nome da função
// const sum = (num1, num2) {
//   return num1 + num2;
// }

// 3.colocar uma seta => antes das chaves
// const sum = (num1, num2) => {
//   return num1 + num2;
// }

// Refatorando usando return implícito
const sum = (num1, num2) => num1 + num2;

// console.log(sum(5, 7));


// EXEMPLO 2
// function generateRandomNumber () {
//   return Math.floor(Math.random() * 100);
// }

// Refatorando
// const generateRandomNumber = () => {
//   return Math.floor(Math.random() * 100);
// }

// Refatorando mais
const generateRandomNumber = () => Math.floor(Math.random() * 100);

console.log(generateRandomNumber());