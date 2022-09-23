// Um exercício para procurar um nome utilizando a HoF some.

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((aName) => aName === name)
};

console.log(hasName(names, 'Ana'));