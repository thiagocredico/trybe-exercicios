const URL_BASE = 'https://deckofcardsapi.com/api/deck';

export function startNewGame() {
  // return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
  return fetch(`${URL_BASE}/new/shuffle/`)
    .then((response) => response.json()); // transformando o response em json
}

export function drawCard(deckId) {
  console.log('drawCard', deckId);
  // https://deckofcardsapi.com/api/deck/ID_DO_BARALHO/draw/
  // Metodo GET == so pego as informacoes da API ( POST, DELETE ... )
  return fetch(`${URL_BASE}/${deckId}/draw/`)
    .then((response) => response.json());
}

export function stopGame() {
  console.log('stop');
}
