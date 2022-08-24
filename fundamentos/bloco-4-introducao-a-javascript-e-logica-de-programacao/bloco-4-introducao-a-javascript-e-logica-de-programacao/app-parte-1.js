let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


// 1
console.log(`Bem-vinda, ${info.personagem}`)

// 2
info['recorrente'] = 'Sim';
console.log(info.recorrente)

// 3
for (let chaves in info) {
  console.log(chaves)
}

// 4
for (let chave in info) {
  console.log(info[chave])
}

// 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

console.log(`${info.personagem} e ${info2.personagem}`)
console.log(`${info.origem} e ${info2.origem}`)
console.log(`${info.nota} e ${info2.nota}`)
console.log((info.recorrente == 'Sim' && info2.recorrente == 'Sim') ? 'Ambos recorrentes' : '')

// 6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

let nome = leitor.nome  + ' ' + leitor.sobrenome
let livroFavorito = leitor.livrosFavoritos[0].titulo

console.log(`O livro favorito de ${nome} se chama '${livroFavorito}'`)

// 7
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})

// 8
console.log(`Julia tem ${leitor.livrosFavoritos.length} livros favoritos`);
