const {formatedBookNames, nameAndAge} = require('../src/exercise1');

// FORMATED NAME
describe('Testa formatedBookName', () => {
  const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];

  it('Verica se formatedBookName é uma função', () => {
    expect(typeof formatedBookNames).toBe('function');
  });

  it('Verica se formatedBookName não é "undefined"', () => {
    expect(formatedBookNames()).not.toBeUndefined();
  });

  it('Verica se formatedBookName retorna um array"', () => {
    expect(Array.isArray(formatedBookNames())).toBeTruthy();
  });
  
  it('Verica se o tamanho de formatedBookName é maior que zero', () => {
    expect(formatedBookNames().length).toBeGreaterThan(0);
  });
  
  it('Verica se formatedBookName retorna um array de string', () => {
    formatedBookNames().forEach((item) => expect(typeof item).toBe('string'));
  });
  
  it('Verica se formatedBookName retorna o nome do livro, genero e nome do autor', () => {
    expect(formatedBookNames()).toEqual(expect.arrayContaining(expectedResult));
  });
});

// NAME AND AGE
describe('Testa a função nameAndAge', () => { 
  const expectedResult = [
    {
      age: 31,
      author: 'Isaac Asimov',
    },
    {
      age: 38,
      author: 'H. P. Lovecraft',
    },
    {
      age: 39,
      author: 'Stephen King',
    },
    {
      age: 43,
      author: 'George R. R. Martin',
    },
    {
      age: 45,
      author: 'Frank Herbert',
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien',
    },
  ];
  it('Verica se nameAndAge é uma função', () => {
    expect(typeof nameAndAge).toBe('function');
  });
  
  it('Verica se nameAndAge retorna um valor diferente de "undefined"', () => {
    expect(nameAndAge()).not.toBeUndefined();
  });
  
  it('Verica se nameAndAge retorna um array', () => {
    expect(Array.isArray(nameAndAge())).toBeTruthy();
  });
  
  it('Verica se o tamanho de nameAndAge é maior que zero', () => {
    expect(nameAndAge().length).toBeGreaterThan(0);
  });
  
  it('Verica se nameAndAge um array de objetos', () => {
    nameAndAge().forEach((item) => expect(typeof item).toBe('object'));
  });

  it('Verica se formatedBookName retorna um array de objetos com o valor esperado em expectedResult', () => {
    expect(nameAndAge()).toEqual(expect.arrayContaining(expectedResult));
  });
});
