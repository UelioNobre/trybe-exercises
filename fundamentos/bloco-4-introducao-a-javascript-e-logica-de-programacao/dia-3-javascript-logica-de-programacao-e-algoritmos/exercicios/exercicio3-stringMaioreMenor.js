let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0]
let menor = array[0]

for (let i = 0; i < array.length; i += 1){
  maior = (maior.length < array[i].length) ? array[i] : maior;
  menor = (menor.length > array[i].length) ? array[i] : menor;
}

console.log('maior', maior);
console.log('menor', menor);