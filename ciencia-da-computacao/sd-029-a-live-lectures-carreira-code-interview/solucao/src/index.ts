const frutas = [{
  fruta: 'Banana',
  preco: 10
},
{
  fruta: 'Maça',
  preco: 8
},
{
  fruta: 'Uva',
  preco: 12
},
{
  fruta: 'Manga',
  preco: 6
}
];
let maiorValor = frutas[0];
let menorValor = frutas[0];

frutas.forEach(frutaAtual => {
if (frutaAtual.preco > maiorValor.preco) {
  maiorValor = frutaAtual;
} else if (frutaAtual.preco < menorValor.preco) {
  menorValor = frutaAtual;
}
});

console.log(`A fruta com o menor valor é ${menorValor.fruta} com o valor de ${menorValor.preco}`);
console.log(`A fruta com o maior valor é ${maiorValor.fruta} com o valor de ${maiorValor.preco}`);