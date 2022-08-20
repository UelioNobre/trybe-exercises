let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let index = 0;
let subIndex = 0;

// Exercicio Bonus - Ordem crescente
// Percorre n-1 vezes
for (index = 1; index < numbers.length; index += 1) {
  for (subIndex = 0; subIndex < index; subIndex += 1) {
    // console.log("index:", index, "subIndex: ", subIndex);
    let positionA = numbers[index];
    let positionB = numbers[subIndex];

    if (positionA < positionB) {
      let position = numbers[index];
      numbers[index] = positionB;
      numbers[subIndex] = positionA;
    }
  }
}

// console.log("Ordena crescente: ", numbers);

// Exercicio Bonus - Ordem decrescente
for (index = 1; index < numbers.length; index += 1) {
  for (subIndex = 0; subIndex < index; subIndex += 1) {
    // console.log("index:", index, "subIndex: ", subIndex);
    let positionA = numbers[index];
    let positionB = numbers[subIndex];

    if (positionA > positionB) {
      let position = numbers[index];
      numbers[index] = positionB;
      numbers[subIndex] = positionA;
    }
  }
}
// console.log("Ordena decrescente: ", numbers);

// Exercicio Bonus - Multiplica pelo correspondente
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; // Reseta o array
const multiplicados = numbers;

for (index = 1; index < numbers.length; index += 1) {
  for (subIndex = 0; subIndex < index; subIndex += 1) {
    let position = numbers[index];
    multiplicados[subIndex] = position;
    multiplicados[index] = numbers[subIndex];
  }
}
console.log("multiplicados: ", multiplicados);
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
