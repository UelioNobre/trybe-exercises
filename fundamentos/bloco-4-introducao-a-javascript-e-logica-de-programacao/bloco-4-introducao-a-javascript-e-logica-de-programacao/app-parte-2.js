// 1

function palindromo(palavra) {
  let reverse = palavra.split('').reverse().join('');
  return palavra === reverse;
}

console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));
console.log();

// 2
function maiorValor(array) {
  let maior = array[0];
  for (let valor of array) {
    if (maior < valor) maior = valor;
  }
  return array.indexOf(maior);
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));
console.log();

// 3
function menorValor(array) {
  let menor = array[0];
  for (let valor of array) {
    if (menor > valor) menor = valor;
  }
  return array.indexOf(menor);
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));
console.log();

// 4 
function maiorNome(array) {
  let maior = 0;
  let maiorNome = '';

  for (let index = 0; index < array.length; index += 1){
    if (array[index].length > maior) {
      maior = array[index].length;
      maiorNome = array[index];
    }
  }

  return maiorNome;
}
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorNome(nomes));
console.log();

// 5
function maximoRepetido(numeros) {

  let maior = 0;
  let maiorIndex = 0;
  let contador = {};

  for (let numero of numeros) {
    if (!contador[numero]) {
      contador[numero] = 0;
    } 
    contador[numero] += 1;
  }

  for (let index in contador) {
    if (contador[index] > maior) {
      maior = contador[index]
      maiorIndex = index
    }
  }

  return maiorIndex
}
let numeros = [2, 3, 2, 5, 8, 2, 3]
let numeroRepetido = maximoRepetido(numeros)
console.log(numeroRepetido)
console.log()

// 6
function somatorio(limite) {
  let soma = 0

  if (limite < 0) return; // Sai caso negativo
  for (let numero = 1; numero <= limite; numero += 1) soma += numero;
  return soma
}
console.log(somatorio(5))