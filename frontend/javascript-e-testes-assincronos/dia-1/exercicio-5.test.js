const uppercase = require('./exercicio-5');


describe('Testa a função uppercase', (done) => {

  it('Deve ser uma função', () => {
    const expected = 'function';
    const actual = typeof uppercase;
    expect(expected).toBe(actual);
  });

  // 1. Criamos o it
  // O parametro "done()", sinaliza que o teste deve ser terminado.
  // Caso remova o donw, um erro do tipo "timeout" é lançado.
  it('uppercase "test" to equal "TEST"', (done) => {
    
    // Who is "done"?
    // here: https://jestjs.io/docs/asynchronous#callbacks
    
    const callBack = (strUpperCase) => {
      try {
        expect(strUpperCase).toBe(expected);
        
        // 5. Chamamos a função `done` do Jest
        done();
      } catch (error) {
        
        // 6. Chamamos a função `done` com o parâmetro `error`
        done(error);
      }
    };
    
    const expected = "FRANSUELIO NA TRYBE";
    uppercase('Fransuelio na trybe', callBack);
  });
});
