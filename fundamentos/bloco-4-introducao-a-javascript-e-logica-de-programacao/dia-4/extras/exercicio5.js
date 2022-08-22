// 5 - Crie um algoritmo que recebe a idade de 
// Carolzita, Murilo e Baêta e imprime quem é a 
// pessoa mais nova no formato: "Pessoa" é a mais nova.

let a = 2;
let b = 2;
let c = 2;

let condA = (a < b && a < c)
let condB = (b < a && b < c)
let condC = (c < a && c < b)

if (condA) {
  console.log('a é Menor')
} else if (condB) {
  console.log('b é Menor')
} else if (condC) {
  console.log('c é Menor')
} else {
  console.log('nenhum')
}
