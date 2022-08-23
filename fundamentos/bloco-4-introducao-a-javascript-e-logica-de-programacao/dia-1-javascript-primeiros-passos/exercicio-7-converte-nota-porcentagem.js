let notaPorcentagem = 1;
let notaConvertida;

if (notaPorcentagem > 100 || notaPorcentagem < 0) {
  notaConvertida = "Nota inválida";
} else if (notaPorcentagem >= 90) {
  notaConvertida = "A";
} else if (notaPorcentagem >= 80) {
  notaConvertida = "B";
} else if (notaPorcentagem >= 70) {
  notaConvertida = "C";
} else if (notaPorcentagem >= 60) {
  notaConvertida = "D";
} else if (notaPorcentagem >= 50) {
  notaConvertida = "E";
} else if (notaPorcentagem < 50 && notaPorcentagem >= 0) {
  notaConvertida = "F";
}

console.log(notaConvertida);
