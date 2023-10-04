let v1 = Number(prompt("Digite o primeiro número: "));
let operador = prompt("Digite o operador: + , - , * , /  ");
let v2 = Number(prompt("Digite o segundo número: "));
let resultado;
let sobra;

if (operador === "+") {
  resultado = v1 + v2;
  document.write(`O resultado da operação é: ${resultado}`);
} else if (operador === "-") {
  resultado = v1 - v2;
  document.write(`O resultado da operação é: ${resultado}`);
} else if (operador === "*") {
  resultado = v1 * v2;
  document.write(`O resultado da operação é: ${resultado}`);
} else if (operador === "/") {
  resultado = v1 / v2;
  sobra = v1 % v2;
  if (sobra !== 0) {
    document.write(`O resultado da operação é:  ${parseInt(resultado)}  
     e tem resto   ${sobra}`);
  } else {
    document.write(`O resultado da operação é:  ${resultado}`);
  }
} else {
  document.write("O operador não é válido!");
}
