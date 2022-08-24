function arrayOfNumbers(array) {
  let numerosPares = [];

  for (let index = 0; index < array.length; index += 1){
    for (let index2 = 0; index2 < array[index].length; index2 += 1){
      if (array[index][index2] % 2 === 0 && array[index][index2] !== 0) {
        numerosPares.push(array[index][index2]);
      }
    }
  }

  return numerosPares;
}

// let vector = [[2, 4, 2], [3, 4, 5, 6, 0], [20, 8, 9, 10]];
let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];
let pares = arrayOfNumbers(vector);
console.log('pares', pares)