let numeros = [];
let numFatorial = 100

for (let i = numFatorial; i > 0; i -= 1) numeros.push(i);

let total = eval(numeros.join('*'));
console.log(total);