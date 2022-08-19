const valorCusto = 1.3;
const valorVenda = 2.5;

if (valorCusto < 0 || valorVenda < 0) {
  console.log("Erro: Valores inválidos");
} else {
  let quantidade = 1000;

  let totalCusto = valorCusto * quantidade;
  let totalVenda = valorVenda * quantidade;
  let lucro = totalVenda - totalCusto;

  let msgCusto = "Valor total de Custo: " + totalCusto.toFixed(2);
  let msgVenda = "Valor total de Venda: " + totalVenda.toFixed(2);
  let msgLucro = "Lucro de: " + lucro.toFixed(2);

  console.log(`${msgCusto}\n${msgVenda}\n${msgLucro}`);
}
