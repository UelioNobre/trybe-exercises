let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let person in names) {
  console.log(`Olá ${names[person]}`)
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020,
  fuel: 'Gasoline'

};

for (let atttr in car) {
  console.log(`${atttr} ${car[atttr]}`)
}
