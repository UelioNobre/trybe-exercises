// 1

function palindromo(palavra) {
  let reverse = palavra.split('').reverse().join('')
  return palavra === reverse
}

console.log(palindromo('arara'))
console.log(palindromo('desenvolvimento'))
console.log()

// 2
function maiorValor(array) {
  let menor = array[0];
  for (let valor of array) {
    if (menor < valor) menor = valor;
  }
  return array.indexOf(menor);
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));