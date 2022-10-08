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

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (onSuccess, onError) => {
  const temperature = getMarsTemperature();
  onSuccess(temperature);
}

// Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo
setTimeout(() => {
  // Definição da função sendMarsTemperature...
  sendMarsTemperature(temperatureInFahrenheit, handleError); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo
  sendMarsTemperature(greet, handleError); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo
}, messageDelay());

