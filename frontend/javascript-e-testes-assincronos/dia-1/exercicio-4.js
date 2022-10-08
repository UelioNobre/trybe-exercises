const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => {
  const temperature = getMarsTemperature();
  const msg = `A temperatura de Marte é: ${temperature} graus celsius`;
  callback(temperature);
  // console.log(msg);
}

// Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo
setTimeout(() => {
  // Definição da função sendMarsTemperature...
  sendMarsTemperature(temperatureInFahrenheit); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo
  sendMarsTemperature(greet); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo
}, messageDelay());

