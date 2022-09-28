
// Utilize o reduce para transformar uma matriz em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const toFlatten = (acc, array) => Array.isArray(acc) ? acc.concat(array) : null;

function flatten() {
  return arrays.reduce(toFlatten, []);
}

module.exports = { flatten, toFlatten };