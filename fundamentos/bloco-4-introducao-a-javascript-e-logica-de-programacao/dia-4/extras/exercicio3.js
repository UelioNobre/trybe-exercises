// 3 -
// Crie um algoritmo que simula o jogo "pedra, papel e tesoura" 
// levando em consideração que são apenas duas pessoas jogando e 
// imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let papel = 2, tesoura = 3, pedra = 4;
let msgP1Win = 'Player 1 won', msgP2Win = 'Player 2 won';

let ganhador = 'A Ties';
let play1 = tesoura;
let play2 = pedra;

let play1Vence = (
  (play1 === papel && play2 === pedra) || 
  (play1 === tesoura && play2 === papel) ||
  (play1 === pedra && play2 === tesoura)
)

if (play1 !== play2) ganhador = (play1Vence) ? msgP1Win: msgP2Win
console.log(ganhador)
