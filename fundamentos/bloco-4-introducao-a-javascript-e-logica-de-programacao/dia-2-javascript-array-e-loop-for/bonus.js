let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(`Numbers ${numbers.join(', ')}`)

// Exercício 1 - Ordem crescente
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

// Exercício 2 - Ordem decrescente
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
console.log('')

// Exercicio 3
let = novoArray = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbersOperations = [];

for (let i = 0; i < novoArray.length; i += 1){
  let atual = novoArray[i]
  let proximo = novoArray[i + 1]

  // Se nao tiver mais elementos, proximo sera 2
  if (proximo === undefined) proximo = 2; 

  numbersOperations.push(atual * proximo)
}

console.log(numbersOperations.join(', '))









// console.log(`[ ${numbers.join(', ')} ]`)
// console.log(`[ ${numbersOperations.join(', ')} ]`)

