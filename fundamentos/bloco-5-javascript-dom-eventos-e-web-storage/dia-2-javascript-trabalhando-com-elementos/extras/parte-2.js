// Crie um irmão para elementoOndeVoceEsta.
let elementoIrmao = document.createElement('section');
elementoIrmao.innerText = 'Exercicio 1';
elementoIrmao.style.border = '2px solid purple';
document.getElementById('elementoOndeVoceEsta').parentElement.appendChild(elementoIrmao)

// Crie um filho para elementoOndeVoceEsta.
let elementoFilho = document.createElement('section');
elementoFilho.innerText = 'Exercício 2';
elementoFilho.style.border = '2px solid purple';
document.getElementById('elementoOndeVoceEsta').appendChild(elementoFilho);

// Crie um filho para primeiroFilhoDoFilho.
let primeiroFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilho.innerText = 'Exercicio 3';
primeiroFilhoDoFilho.style.border = '2px solid purple';
document.getElementById('primeiroFilhoDoFilho').appendChild(primeiroFilhoDoFilho)

// A partir desse filho criado, acesse terceiroFilho.
console.log(document.getElementById('primeiroFilhoDoFilho').firstChild)
