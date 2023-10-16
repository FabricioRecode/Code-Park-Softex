const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  const imc = parseFloat(peso / (altura * altura)).toFixed(2);

  const value = document.getElementById("value");
  let descricao = "";

  value.classList.add("atencao");

  document.getElementById("informacao").classList.remove("esconder");

  if (imc < 18.5) {
    descricao = "CUIDADO!!! VOÇÊ ESTÁ ABAIXO DO PESO!!";
  } else if (imc >= 18.5 && imc <= 25) {
    descricao = "Voçê Está no Peso Ideal!!";

    value.classList.remove("atencao");
    value.classList.add("normal");
  } else if (imc > 25 && imc <= 30) {
    descricao = "CUIDADO!!VOÇÊ ESTÁ COM SOBREPESO!!";
  } else if (imc > 30 && imc <= 35) {
    descricao = "CUIDADO!!VOÇÊ ESTÁ COM OBESIDADE MODERADA!!";
  } else if (imc > 35 && imc <= 40) {
    descricao = "CUIDADO!!VOÇÊ ESTÁ COM OBESIDADE SEVERA!!";
  } else {
    descricao = "CUIDADO!!VOÇÊ ESTÁ COM OBESIDADE MORBIDA!!";
  }

  value.textContent = imc.replace(".", ",");
  document.getElementById("descricao").textContent = descricao;
});
