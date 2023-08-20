let qtdVotosCandi_X = 0;
let qtdVotosCandi_Y = 0;
let qtdVotosCandi_Z = 0;
let qtdVotosBranco = 0;
let qtdVotosNulo = 0;
let votar = true;

while (votar) {
  let voto = window.prompt("Digite seu voto: ");

  if (voto === 889) {
    qtdVotosCandi_X++;
  } else if (voto === 847) {
    qtdVotosCandi_Y++;
  } else if (voto === 515) {
    qtdVotosCandi_Z++;
  } else if (voto === 0) {
    qtdVotosBranco++;
    qtdVotosNulo++;
  } else {
    qtdVotosNulo++;
  }

  let continua = window.prompt("Deseja finalizar a votação? ".toUpperCase());
  if (continua === "SIM") {
    votar = false;
  }
}

if (qtdVotosCandi_X > qtdVotosCandi_Y && qtdVotosCandi_X > qtdVotosCandi_Z) {
  window.alert("O candidato X venceu a eleição!");
} else if (qtdVotosCandi_Y > qtdVotosCandi_Z) {
  window.alert("O candidato Y venceu a eleição!");
} else if (qtdVotosCandi_Z > qtdVotosCandi_Y) {
  window.alert("O candidato Z venceu a eleição!");
} else {
  window.alert("Nenhum candidato obteve voto!");
}

window.alert("O candidato X teve ", qtdVotosCandi_X, " votos.");
window.alert("O candidato Y teve", qtdVotosCandi_Y, " votos.");
window.alert("O candidato Z teve", qtdVotosCandi_Z, " votos.");
window.alert(
  "A quantidade de votos brancos foi de:",
  qtdVotosBranco,
  " votos."
);
window.alert("A quantidade de votos brancos foi de: ", qtdVotosNulo, " votos.");
