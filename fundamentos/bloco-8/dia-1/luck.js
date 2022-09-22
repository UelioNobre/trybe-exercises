const sortition = () => parseInt(Math.random() * 5 + 1, 10);
const checker = (number, game) => number === game();
const message = (win) => (win === true) ? 'Parabéns você ganhou' : 'Tente novamente';
const results = (checker, show) => checker(4, sortition) === true ? show(true) : show(false);

console.log(results(checker, message));