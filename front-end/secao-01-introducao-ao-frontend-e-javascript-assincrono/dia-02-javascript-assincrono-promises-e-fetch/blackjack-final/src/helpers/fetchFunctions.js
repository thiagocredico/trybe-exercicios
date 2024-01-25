export function startNewGame() {
  return fetch('https://deckofcardsapi.com/api/deck/new/shuffle')
    .then((response) => response.json());
}

export function drawCard(deckId) {
  return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw`)
    .then((response) => response.json());
}

export function stopGame() {
  console.log('stop');
}
