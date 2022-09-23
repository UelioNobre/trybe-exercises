// Ao chamar a função doingThings:
const wakeUp = () => 'Acordando!!';
const coffeeDrink = () => 'Bora tomar café!!';
const letsGo = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log('doingThings(wakeUp)', doingThings(wakeUp));
console.log('doingThings(coffeeDrink)', doingThings(coffeeDrink));
console.log('doingThings(letsGo)', doingThings(letsGo));
