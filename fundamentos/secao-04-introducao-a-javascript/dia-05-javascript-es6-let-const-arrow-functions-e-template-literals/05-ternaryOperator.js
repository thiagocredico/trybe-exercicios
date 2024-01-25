let number = 10;

// const evenOrOdd = (number) => {
//   // if(number % 2 === 0){
//   //   return 'PAR';
//   // } else {
//   //   return 'ÍMPAR';
//   // }

//   return (number % 2 === 0) ? 'PAR' : 'ÍMPAR';
// }

// Refatorar
const evenOrOdd = (number) => (number % 2 === 0) ? 'PAR' : 'ÍMPAR';


console.log(`O número ${number} é: ${evenOrOdd(number)}`);