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
