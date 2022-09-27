const formatedBookNames = require('../src/exercise1');
const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

describe('Testa formatedBookName', () => {
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
