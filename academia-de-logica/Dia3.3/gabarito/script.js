//1

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let element = 3;

if (arrayNumbers.indexOf(element) >= 0) {
  console.log(arrayNumbers.indexOf(element));
} else {
  console.log('Elemento não encontrado no array');
}


//2 


let impar = [];

for (let index = 1; index <= 50; index += 1) {
  if (index % 2 == 1) {
    impar.push(index)
  }
}
console.log(impar);


// 3


let inicial = 80;
let final = 150
let contagem = 0;

for (let index = inicial; index <= final; index += 1) {
  if (index % 3 == 0) {
    contagem += 1;
  }
}
if (contagem < 50) {
  console.log('Sequência muito pequena.');
} else {
  console.log('Há 50 ou mais números diviseis por 3');
}
