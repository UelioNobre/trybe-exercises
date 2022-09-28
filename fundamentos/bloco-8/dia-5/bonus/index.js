// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Laranja', 'Maça', 'Banana', 'Kiwi', 'Uva', 'Melao'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Leite em Pó', 'Chocolate Granulado'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));

// Teste 2 - Não funciona pois não é um objeto interable.
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const objectsSalad = (obj1, obj2) => ([...obj1, ...obj2]);
// console.log(objectsSalad(obj1, obj2));

// Teste 3
const obj1 = [1, 2, 'a'];
const obj2 = [true, false];
const arraySalad = (obj1, obj2) => ([...obj1, ...obj2]);
console.log(arraySalad(obj1, obj2));

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, [1, 2])); // 88


// Destructturiing
console.log('');
console.log('');
console.log('Destructuring');
// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};


// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);