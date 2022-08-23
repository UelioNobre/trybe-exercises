// maior primo entre 2 e 50
let maior = 0;

for (let i = 2; i <= 50; i++){
  let isPrimo = 0;
  
  for (let j = 1; j <= i; j++){
    (i % j == 0) ? isPrimo += 1 : ''
  }

  maior = (isPrimo == 2) ? i : maior;
}

console.log('Maior número primo.', maior)