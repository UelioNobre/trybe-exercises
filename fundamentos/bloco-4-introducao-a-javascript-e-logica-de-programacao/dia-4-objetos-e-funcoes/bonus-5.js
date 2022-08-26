let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101
    },
  ],
};

function exibirMoradores(){
  for (let bloco in moradores) {
    console.log(`# Moradores do ${bloco}:`)
    for (let index = 0; index < moradores[bloco].length; index++){
      let morador = moradores[bloco][index];
      let nomeCompleto = `${morador.nome} ${morador.sobrenome}`
      console.log(`- ${nomeCompleto}`)
    }
    console.log('')
  }
}

exibirMoradores()


