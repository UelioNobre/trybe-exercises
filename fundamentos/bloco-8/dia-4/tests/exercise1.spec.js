const {flatten, toFlatten} = require('../src/exercise1.js');

describe ('Teste da função flatten', () => { 
  it('Testa se á uma função', () => {
    expect(typeof flatten).toBe('function');
  });


  it('Testa se a o retorno da função flatte() é um array', () => {
    expect(Array.isArray(flatten())).toBeTruthy();
  });
  
});

describe('Testa funcao toFlatten', () => {
  it('Testa se é uma função', () => {
    expect(typeof toFlatten).toBe('function');
  });

  it('Testa se a o retorno da função toFlatten() é um array', () => {
    expect(Array.isArray(toFlatten([], []))).toBeTruthy();
  });

  it('Deve retornar um só array quando passado uma matriz', () => {
    const flat = toFlatten();
    expect(toFlatten([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(toFlatten([], ['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(toFlatten([], [true, [], {}])).toEqual([true, [], {}]);
  });
});
