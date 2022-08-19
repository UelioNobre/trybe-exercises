const valorCusto = 1;
const valorVenda = 2;

if (valorCusto < 0 || valorVenda < 0) {
  console.log("Erro: Valores inválidos");
} else {
  let quantidade = 10;
  let impostoCusto = valorCusto * 1.2;

  let totalCusto = impostoCusto * quantidade;
  let totalVenda = valorVenda * quantidade;

  let lucro = totalVenda - totalCusto;

  let msgCusto = "Valor total de Custo: " + totalCusto.toFixed(2);
  let msgVenda = "Valor total de Venda: " + totalVenda.toFixed(2);
  let msgLucro = "Lucro de: " + lucro.toFixed(2);
  let msgImposto = "Imposto de: " + impostoCusto.toFixed(2);

  console.log(`${msgCusto}\n${msgVenda}\n${msgLucro}\n${msgImposto}`);
}
