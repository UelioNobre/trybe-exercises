const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [1,2,3,4,5,6,7]

for (let i = 1; i < numbers.length; i += 1){

  let primeiroNumero = numbers[i]
  console.log(`Loop ${i} `)
  
  for (let j = 0; j < i; j++){
    let isSwap = primeiroNumero < numbers[j]
    if (isSwap) {
      let swap = numbers[j]
      console.log(isSwap, 'numbers', numbers.join(', '))

      numbers[j] = numbers[i]
      numbers[i] = swap

      console.log(`i     =  ${i}     j  = ${j}`)
      console.log(`n[i]  = [${primeiroNumero}]  n[j] = ${swap}`)
      console.log('numbers', numbers.join(', '), ' --- ')
      console.log()
    }
  }
  console.log()
} 