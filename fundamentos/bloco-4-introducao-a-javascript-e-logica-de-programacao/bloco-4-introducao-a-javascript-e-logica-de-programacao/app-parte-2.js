// 1

function palindromo(palavra) {
  let reverse = palavra.split('').reverse().join('')
  return palavra === reverse
}

console.log(palindromo('arara'))
console.log(palindromo('desenvolvimento'))
console.log()