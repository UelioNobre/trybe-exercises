const candidatePerson = 79;

if (candidatePerson >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
}

if (candidatePerson >= 60 && candidatePerson < 80) {
  console.log("Você está na nossa lista de espera");
}

if (candidatePerson < 60) {
  console.log("Você foi reprovada(o)");
}