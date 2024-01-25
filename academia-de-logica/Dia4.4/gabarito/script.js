const combinacoes =[
  [0,1,2], // linha 1
  [3,4,5], // linha 2
  [6,7,8], // linha 3
  [0,3,6], // coluna 1
  [1,4,7], // coluna 2
  [2,5,8], // coluna 3
  [0,4,8], // diagonal esqueda direita
  [2,4,6] // diagonal direita esquerda
]

// 1. Crie uma função para gerar de maneira dinâmica `9 divs`

const divGrid = document.querySelector('.grid');

function gerarDivs(){
  for (let index = 0; index < 9; index+= 1) {
    const div = document.createElement('div');
    div.classList.add('celula');
    div.id = index;
    div.addEventListener('click', jogar);
    divGrid.appendChild(div);
    
  }
}
gerarDivs();


//  2. Crie a função Jogar que deve receber o evento do click

const player = document.querySelector('#player');
let turno = true;

function jogar(event){
  const alvoClicado = event.target;
  let jogador;
  let proximoJogador;

  if(turno === true){
    jogador = 'X';
    proximoJogador = 'O';
  }
  else{
    jogador = 'O'
    proximoJogador = 'X';
  }

  if (alvoClicado.innerText === ''){
    player.innerText = 'Vez do jogador ' + proximoJogador;
    alvoClicado.innerText = jogador;
    turno = !turno;
  }
  verificarGanhador(jogador);
  verificarEmpate();
}

// 3. Desenvolva uma função que recebe de quem foi o turno e deve verificar se houve algum ganhador
	
function verificarGanhador(jogador){
  //percorrer todas as possiveis combinacoes
  for(let index = 0; index < combinacoes.length; index += 1){
    const combinacaoAtual = combinacoes[index];
    let pontuacao = 0;

    //percorrer todos os elementos de cada combinacao
    for (let i = 0; i < combinacaoAtual.length; i += 1) {
      const idCelula = combinacaoAtual[i];
      const celula = document.getElementById(idCelula);

      if(celula.innerText === jogador){
        pontuacao += 1;
      }
      if(pontuacao >= 3){
        player.innerText = 'Jogador ' + jogador + ' Ganhou !'
      }
    }
  }
}

// 4. Crie uma função para limpar as células do jogo

function limparCelulas (){
  const celulas = document.querySelectorAll('.celula');
  for (let index = 0; index < celulas.length; index+=1) {
    celulas[index].innerText = '';
  }
}
const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', limparCelulas);


// 5. - BONUS - Crie uma função que verifique se deu empate 

function verificarEmpate(){
  const celulas = document.querySelectorAll('.celula');
  let contador = 0;

  for (let index = 0; index < celulas.length; index+= 1) {
    if(celulas[index].innerText !== ''){
      contador += 1;
    }
    if(contador >= 9){
      player.innerText = 'Jogo empatou !';
    }
  }
}