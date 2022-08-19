/**
 * Peças
 * 1 - Torre
 * 2 - Cavalo
 * 3 - Bispo
 * 4 - Rainha
 * 5 - Rei
 * 6 - Peão
 */
let peca = "Bispo";

switch (peca.toLowerCase()) {
  case "torre":
    console.log("Movimentos: vertical e horizontal");
    break;
  case "cavalo":
    console.log("Movimentos: em L");
    break;
  case "bispo":
    console.log("Movimentos: diagonais");
    break;
  case "rainha":
    console.log("Movimentos: diagonais, horizontal e vertical");
    break;
  case "rei":
    console.log("Movimentos: uma casa em qualquer direção.");
}
