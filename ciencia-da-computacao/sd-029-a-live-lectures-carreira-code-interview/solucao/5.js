const findMaxAndMinPrice = (arr) => {
  const max = arr.reduce((acc, curr) => {
      return acc.preco > curr.preco ? acc : curr;
  });

  const min = arr.reduce((acc, curr) => {
      return acc.preco < curr.preco ? acc : curr;
  });

  return `Maior: ${max.nome} ${max.preco}  Menor: ${min.nome} ${min.preco}`
}

console.log(findMaxAndMinPrice([
  { nome: 'Banana', preco: 10.0 },
  { nome: 'Maça', preco: 8.0 },
  { nome: 'Uva', preco: 12.0 },
  { nome: 'Manga', preco: 6.0 },
]))

