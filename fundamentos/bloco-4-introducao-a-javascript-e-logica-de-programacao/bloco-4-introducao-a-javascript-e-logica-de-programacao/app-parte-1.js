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