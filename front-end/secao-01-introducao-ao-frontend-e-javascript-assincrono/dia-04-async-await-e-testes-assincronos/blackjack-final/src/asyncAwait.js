function fetchAPI() {
  return fetch('https://deckofcardsapi.com/api/deck/new')
    .then((response) => response.json())
    .then((data) => data);
}

// const retorno = fetchAPI();
// // console.log(retorno);
// retorno.then((value) => console.log(value));


async function fetchAPI2() {
  const response = await fetch('https://deckofcardsapi.com/api/deck/new');
  const data = await response.json();
  return data;
}

async function makeFetch() {
  const data = await fetchAPI2();
  console.log(data);
}

makeFetch();
// fetchAPI2()
// .then((data) => console.log(data));
