const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
    const temperature = getMarsTemperature();
    const msg = `A temperatura de Marte é: ${temperature} graus celsius`;
    console.log(msg);
}

// Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo
setTimeout(() => sendMarsTemperature(), messageDelay()); 
