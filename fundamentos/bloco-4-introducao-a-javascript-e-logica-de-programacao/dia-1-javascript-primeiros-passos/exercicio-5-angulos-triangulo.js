let angulo1 = 30;
let angulo2 = 69;
let angulo3 = 90;
let somaAngulos = angulo1 + angulo2 + angulo3;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log("Ângulo inválido");
} else if (somaAngulos === 180) {
  console.log(true);
} else {
  console.log(false);
}
