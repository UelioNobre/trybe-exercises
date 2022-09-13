// Remova todos os elementos filhos de paiDoPai exceto:
// - pai
// - primeiroFilhoDoFilho
// - elementoOndeVoceEsta


// let pai = document.getElementById('pai')

// let terceiroFilho = document.getElementById('terceiroFilho');
// let quartoFilho = document.getElementById('quartoEUltimoFilho');

// pai.removeChild(terceiroFilho);
// pai.removeChild(quartoFilho);


// let terceiroFilho = document.getElementById('terceiroFilho');
// let quartoFilho = document.getElementById('quartoEUltimoFilho');

// pai.removeChild(terceiroFilho);
// pai.removeChild(quartoFilho);

// console.log(pai.childNodes);

let pai = document.getElementById('pai');
const todosOsFilhos = pai.children;
console.log(todosOsFilhos.length);

function remover_incrementando() {
  for (let index = 0; index < todosOsFilhos.length; index += 1) {
    const filhoAtual = todosOsFilhos[index];

    if (filhoAtual.id !== 'elementoOndeVoceEsta'){
      filhoAtual.remove();
    }
    
    // Mostra o estado atual de todosOsFilhos
    console.log(index, todosOsFilhos);
  }
}

function remover_decrementando() {
  for (let index = todosOsFilhos.length - 1; index >= 0; index -= 1) {
    const filhoAtual = todosOsFilhos[index];
    
    if (filhoAtual.id !== 'elementoOndeVoceEsta') {
      filhoAtual.remove();
    }
    
    // Mostra o estado atual de todosOsFilhos
    console.log(index, todosOsFilhos);
  }
}
