let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1
for (let number of numbers) {
  console.log(number);
}

// Exercicio 2
let soma = 0;
for (let number of numbers) {
  soma += number;
}
console.log("soma: ", soma);

// Exercicio 3
let media = soma / numbers.length;
console.log("media: ", media);

// Exercicio 4
if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// Exercicio 5
let maiorNumero = numbers[0];
for (let number of numbers) {
  if (number > maiorNumero) {
    maiorNumero = number;
  }
}
console.log("maiorNumero: ", maiorNumero);

// Exercicio 6
let numerosImpares = 0;
for (let number of numbers) {
  if (number % 2 !== 0) {
    numerosImpares += 1;
  }
}
if (numerosImpares > 0) {
  console.log("numerosImpares: ", numerosImpares);
} else {
  console.log("nenhum valor ímpar encontrado");
}

// Exercicio 7
let menorValor = numbers[0];

for (let number of numbers) {
  if (number < menorValor) {
    menorValor = number;
  }
}
console.log("menorValor: ", menorValor);

// Exercicio 8
let elementos = [];
for (let i = 1; i <= 25; i += 1) {
  elementos.push(i);
}
console.log("elementos: ", elementos);
