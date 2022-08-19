const salarioBruto = 5189.81;

let calculoINSS = 0;

if (salarioBruto <= 1556.94) {
  calculoINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  calculoINSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  calculoINSS = salarioBruto * 0.11;
} else {
  calculoINSS = 570.88;
}

let impostoINSS = calculoINSS.toFixed(2);

console.log("impostoINSS:", impostoINSS);
// console.log("salarioLiquido", salarioLiquido);
