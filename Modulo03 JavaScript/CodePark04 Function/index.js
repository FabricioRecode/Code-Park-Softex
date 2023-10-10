// funcao tradicional sem parametros

function calculadoraSoma() {
  return 10 + 15;
}
document.write(`Resultado da Soma é  ${calculadoraSoma()} !! <br>`);

// funcao tradicional com parametros

function calculadoraMenos(menos) {
  let a = 35;
  let b = 20;
  menos = a - b;
  return menos;
}
document.write(`Resultado da Subtração  é  ${calculadoraMenos()} !! <br>`);

// Usando arrow function

const calculadoraMultiplicar = (a, b) => a * b;
document.write(
  `Resultado da Multiplicação  é  ${calculadoraMultiplicar(25, 3)} !! `
);
