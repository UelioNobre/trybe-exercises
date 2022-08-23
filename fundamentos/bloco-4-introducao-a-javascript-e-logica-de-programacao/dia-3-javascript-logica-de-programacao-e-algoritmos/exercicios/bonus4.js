
let n = 5
let saida;

let loopAsterisco = 0
for (let index = 1; index <= n; index++) {
  saida = ""

  if (index % 2 != 0) {
    for (let asterisco = 0; asterisco < index; asterisco += 1){
      saida += '*'
    }
    console.log(saida)
  }
}

console.log()
console.log('12*')
console.log('1***')
console.log('*****')
