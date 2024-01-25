const frutas = [
  { nome: 'Banana', preco: 10.0 },
  { nome: 'Maça', preco: 8.0 },
  { nome: 'Uva', preco: 12.0 },
  { nome: 'Manga', preco: 6.0 },
];

function biggestPrice(frutas) {
  let biggest = frutas[0].nome;
  let smallest = frutas[0].nome;
  frutas.forEach((element) => {
    if (element.preco > frutas[biggest]) biggest = element.nome;
    if (element.preco < frutas[smallest]) smallest = element.nome;
  });
  console.log('A fruta de maior preço é: ', biggest);
  console.log('A fruta de menor preço é: ', smallest);
}

biggestPrice(frutas);