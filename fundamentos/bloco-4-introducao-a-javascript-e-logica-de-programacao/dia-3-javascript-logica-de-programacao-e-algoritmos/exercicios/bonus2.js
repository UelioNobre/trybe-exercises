
let n = 5
let saida = "";

for (let index = 1; index <= n; index++) {
  for (let index2 = 0; index2 < index; index2++) { 
    saida += '*'
  }
  saida += '\n'
}

console.log(saida)
