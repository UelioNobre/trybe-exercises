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
