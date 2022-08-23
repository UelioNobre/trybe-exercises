let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers.join(', '))

// Ordem decrescente
for (let i = 1; i < numbers.length; i += 1){
  for (let j = 0; j < i; j += 1){
    if (numbers[i] > numbers[j]) {
      let trocar = numbers[i];
      numbers[i] = numbers[j]
      numbers[j] = trocar
    }
  }
}
console.log('Ordem decrescente:', numbers.join(', '))

// Ordena crescente
for (let i = 1; i < numbers.length; i += 1){
  for (let j = 0; j < i; j += 1){
    if (numbers[i] < numbers[j]) {
      let trocar = numbers[i];
      numbers[i] = numbers[j]
      numbers[j] = trocar
    }
  }
}
console.log('Ordem crescente:', numbers.join(', '))

