let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let index = 0;
let subIndex = 0;

// Exercicio Bonus 1
// Percorre n-1 vezes
for (index = 1; index < numbers.length; index += 1) {
  for (subIndex = 0; subIndex < index; subIndex += 1) {
    console.log("index:", index, "subIndex: ", subIndex);
    let positionA = numbers[index];
    let positionB = numbers[subIndex];

    if (positionA > positionB) {
      let position = numbers[index];
      numbers[index] = positionB;
      numbers[subIndex] = positionA;
    }
  }
}
console.log(numbers);
