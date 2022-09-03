// 1. Acesse o elemento elementoOndeVoceEsta.
console.log('Ex 1: ', document.getElementById('elementoOndeVoceEsta'));

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentElement.style.backgroundColor = 'gold';
console.log('Ex 2: ', 'Cor alterada para "gold"')

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
filhoDoFilho.innerText = 'Texto do Primeiro filho-do-filho.';
console.log('Ex 3: ', filhoDoFilho.innerText)

// 4. Acesse o primeiroFilho a partir de pai;
console.log('Ex 4: ', document.getElementById('pai').firstElementChild);

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log('Ex 5: ', document.getElementById('elementoOndeVoceEsta').firstElementChild);

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log('Ex 6: ', document.getElementById('elementoOndeVoceEsta').nextSibling);

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log('Ex 7: ', document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// 8. Agora acesse o terceiroFilho a partir de pai.
console.log('Ex: 8', document.getElementById('pai').children[2]);
