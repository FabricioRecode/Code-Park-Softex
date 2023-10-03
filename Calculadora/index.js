// Esta função é chamada quando um número é clicado
function adicionarNumero(numero) {
  // Obtém o elemento de exibição (input) com o ID 'resultado' e anexa o número ao valor existente
  document.getElementById("resultado").value += numero;
}

// Esta função é chamada quando um operador é clicado
function adicionarOperador(operador) {
  // Obtém o elemento de exibição (input) com o ID 'resultado' e anexa o operador ao valor existente
  document.getElementById("resultado").value += operador;
}

// Esta função é chamada quando o botão de cálculo é clicado
function calcular() {
  // Obtém o valor atual do elemento de exibição e avalia a expressão usando a função eval()
  let resultado = eval(document.getElementById("resultado").value);
  // Atualiza o valor do elemento de exibição com o resultado do cálculo
  document.getElementById("resultado").value = resultado;
}

// Esta função é chamada quando o botão de limpeza é clicado
function limpar() {
  // Define o valor do elemento de exibição como uma string vazia, limpando o conteúdo
  document.getElementById("resultado").value = "";
}
