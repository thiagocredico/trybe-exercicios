import { addCardToPlayer } from './helpers/addCard'; // ES6 modules
import { drawCard, startNewGame, stopGame } from './helpers/fetchFunctions';

import './style.css';

const shuffleButton = document.querySelector('.shuffle');
const stopButton = document.querySelector('.stop');
const drawButton = document.querySelector('.draw');

// variaveis globais
let deckId;
const playersScore = {
  1: 0,
  2: 0,
};

shuffleButton.addEventListener('click', () => {
  startNewGame()
    .then((data) => {
      console.log(data.deck_id);
      shuffleButton.disabled = true;
      stopButton.disabled = false;
      drawButton.disabled = false;
      deckId = data.deck_id;
    });
});
drawButton.addEventListener('click', () => {
  drawCard(deckId).then((dados) => {
    const card = dados.cards[0];
    console.log(card);
    addCardToPlayer(card, 1, playersScore);
  });
});
stopButton.addEventListener('click', stopGame);

// console.log('Ola Turma');

// // const response = fetch('https://deckofcardsapi.com/api/deck/new/shuffle/');
// // console.log(response);
// // response.then((resultadoDaApi) => {
// //   console.log(resultadoDaApi);
// //   const dados = resultadoDaApi.json();
// //   dados.then((dadosCorretosDaApi) => {
// //     console.log(dadosCorretosDaApi);
// //   });
// // });

// fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
//   .then((response) => response.json()) // transformando o response em json
//   .then((data) => console.log(data));

// console.log('Obrigado');
