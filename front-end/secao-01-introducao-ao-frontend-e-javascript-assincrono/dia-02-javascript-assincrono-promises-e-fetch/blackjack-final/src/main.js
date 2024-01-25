import { drawCard, startNewGame, stopGame } from './helpers/fetchFunctions';
import { addCardToPlayer } from './helpers/addCard';

import './style.css';

const shuffleButton = document.querySelector('.shuffle');
const stopButton = document.querySelector('.stop');
const drawButton = document.querySelector('.draw');

let deckId;
const playersScore = {
  1: 0,
  2: 0,
};

shuffleButton.addEventListener('click', () => {
  startNewGame().then((data) => {
    console.log(data.shuffled);
    deckId = data.deck_id;
    shuffleButton.disabled = true;
    drawButton.disabled = false;
    stopButton.disabled = false;
  });
});

drawButton.addEventListener('click', () => {
  drawCard(deckId).then((data) => {
    const card = data.cards[0];
    addCardToPlayer(card, 1, playersScore);
  });
});
stopButton.addEventListener('click', stopGame);
