const sortition = () => parseInt(Math.random() * 5 + 1, 10);
const checkResult = (numero, jogo) => numero === jogo();
const messages = (status) => status === true ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(messages(checkResult(3, sortition)));