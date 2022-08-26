// Remova todos os elementos filhos de paiDoPai exceto:
// - pai
// - primeiroFilhoDoFilho
// - elementoOndeVoceEsta


let pai = document.getElementById('pai')

let terceiroFilho = document.getElementById('terceiroFilho');
let quartoFilho = document.getElementById('quartoEUltimoFilho');

pai.removeChild(terceiroFilho)
pai.removeChild(quartoFilho)

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');

elementoOndeVoceEsta.removeChild(primeiroFilhoDoFilho)
elementoOndeVoceEsta.removeChild(segundoEUltimoFilhoDoFilho)