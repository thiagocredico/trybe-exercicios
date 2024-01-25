const evenOrOdd = (number) => {
  if(number % 2 === 0){
    return 'PAR';
  } else {
    return 'ÍMPAR';
  }
}

let number = 10;

console.log(`O número ${number} é: ${evenOrOdd(number)}`);