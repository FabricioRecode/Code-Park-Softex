try {
  let n1 = parseInt(prompt("Digite o primeiro número: "));
  let n2 = parseInt(prompt("Digite o segundo número: "));
  let resultado = n1 + n2;

  console.log(`A soma de ${n1} + ${n2} é ${resultado}!!`);
} catch (error) {
  console.log("A soma não foi realizada ", error.menssage);
} finally {
  `Obrigado por fazer essa operação`;
}
