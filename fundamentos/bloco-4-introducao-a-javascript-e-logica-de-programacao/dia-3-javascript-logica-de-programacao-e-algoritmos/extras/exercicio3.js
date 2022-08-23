// 3 -
// Crie um algoritmo que simula o jogo "pedra, papel e tesoura" 
// levando em consideração que são apenas duas pessoas jogando e 
// imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let msgWins = 'A Ties';
let play1 = 'tesoura';
let play2 = 'papel';

let play1Vence =
  (play1 === 'papel' && play2 === 'pedra') ||
  (play1 === 'tesoura' && play2 === 'papel') ||
  (play1 === 'pedra' && play2 === 'tesoura')
  
if (play1 !== play2)
  (play1Vence) ? msgWins = 'Player 1 won' : msgWins = 'Player 2 won';

console.log(msgWins)