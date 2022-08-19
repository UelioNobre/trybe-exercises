let salarioBruto = 4000;

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

let impostoINSS = calculoINSS;

// Calculo IR

let salarioIR = salarioBruto - impostoINSS;
let calculoIR = 0;
let valorDaParcela = 0;

if (salarioIR <= 1903.98) {
  calculoIR = 0;
  valorDaParcela = 0;
} else if (salarioIR >= 1903.99 && salarioIR <= 2826.65) {
  aliquotaIR = 0.075;
  valorDaParcela = 142.8;
  // console.log("aliquotaIR:", aliquotaIR);
} else if (salarioIR >= 2826.66 && salarioIR <= 3751.05) {
  aliquotaIR = 0.15;
  valorDaParcela = 354.8;
  // console.log("aliquotaIR:", aliquotaIR);
} else if (salarioIR >= 3751.06 && salarioIR <= 4664.68) {
  aliquotaIR = 0.225;
  valorDaParcela = 636.13;
  // console.log("aliquotaIR:", aliquotaIR);
} else {
  aliquotaIR = 0.275;
  valorDaParcela = 869.36;
  // console.log("aliquotaIR:", aliquotaIR);
}

let calculaAliquota = aliquotaIR * salarioIR;
let calculaParcela = calculaAliquota - valorDaParcela;
let salarioLiquido = salarioIR - calculaParcela;

console.log("salarioLiquido:", salarioLiquido);
console.log("impostoINSS:", impostoINSS);
console.log("calculaAliquota:", calculaAliquota);
console.log("valorDaParcela:", valorDaParcela);
