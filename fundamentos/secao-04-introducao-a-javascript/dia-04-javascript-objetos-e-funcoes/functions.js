// função greet
// function greet(name){
//   console.log('oi ' + name + ' tudo bem?');
// }

// greet('Samanta');
// greet('Samuel');


// function sum (num1,num2){
//    return num1 + num2;
// }

// console.log(sum(10,5));

// gerar array com 100 caracteres

function generateArray(character,number){
  let charactersArray = [];

  for(let index = 0; index < number; index +=1){
    charactersArray.push(character);
  }
  return charactersArray;
}

console.log(generateArray('*', 10));
console.log(generateArray('*', 100));