// NOSSO JOGO = A pessoa marca 6 números, no intervalo de 1 a 60.
const gabrielGame = [8, 22, 26, 32, 42, 60];

// JOGO SORTEADO = Uma sequência de 6 números é sorteada nesse mesmo intervalo.
// const number1 = Math.floor(Math.random() * 60) + 1;
// const number2 = Math.floor(Math.random() * 60) + 1;
// const number3 = Math.floor(Math.random() * 60) + 1;
// const number4 = Math.floor(Math.random() * 60) + 1;
// const number5 = Math.floor(Math.random() * 60) + 1;
// const number6 = Math.floor(Math.random() * 60) + 1;

// const megaSenaNumbers = [number1, number2, number3, number4, number5, number6];

let megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
  megaSenaNumbers.push(Math.floor(Math.random() * 60) + 1);
}

// Se os números forem correspondentes, 🤑!
let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
  let drawnNumber = megaSenaNumbers[index];
  // console.log('Numero sorteado', drawnNumber);
  
  for (let cont = 0; cont < gabrielGame.length; cont += 1) {
    let studentNumber = gabrielGame[cont];
    // console.log('Numero Gabriel', studentNumber);
    
    if (drawnNumber === studentNumber) {
      numberOfHits += 1;
    }
  }
}

console.log('Jogo do Gabriel', gabrielGame);
console.log('Jogo sorteado', megaSenaNumbers);
console.log('Número de acertos', numberOfHits);