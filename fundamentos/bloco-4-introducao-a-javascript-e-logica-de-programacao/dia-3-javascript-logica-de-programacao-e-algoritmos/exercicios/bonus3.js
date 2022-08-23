
let n = 5
let saida = "";

for (let index = 1; index <= n; index++) {

  for (let k = 0; k < n - index; k += 1){
    saida += " ";
  }

  for (let index2 = 0; index2 < index; index2++) { 
    saida += '*'
  }
  saida += '\n'
}
console.log(saida)
