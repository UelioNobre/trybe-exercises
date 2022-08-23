let status;

status = "aprovada";

switch (status) {
  case "reprovada":
    console.log("Você foi reprovada(o)");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera");
    break;
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  default:
    console.log("Não se aplica");
}
