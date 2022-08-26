let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let bloco2 = moradores.blocoDois;
let ultimoMorador = bloco2[bloco2.length - 1]
let nomeCompleto = `${ultimoMorador.nome} ${ultimoMorador.sobrenome}`;

let msgInquilino = `O morador do bloco 2 de nome ${nomeCompleto}`;
let msgMora = `mora no ${ultimoMorador.andar} andar,`;
let msgApartamento = `apartamento ${ultimoMorador.apartamento}`;

let msg = `${msgInquilino} ${msgMora} ${msgApartamento}`

console.log(msg)