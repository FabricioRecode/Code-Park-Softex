// Objetos Material
const carro = {
  cor: "azul",
  qtdPortas: 4,
  direcao: "Gasolina",
};

function estacionarCarro() {
  return "Para o carro!";
}

console.log(estacionarCarro());
console.log(carro.cor);
console.log(carro.qtdPortas);
console.log(carro.direcao);

// objeto abstract
let banco = {
  conta: 3001,
  saldo: 3500,
  tipo: "conta corrente",
  agencia: 1710,
};

function mostrarSaldo() {
  return banco.saldo;
}

function depositar(valor) {
  return (banco.saldo += valor);
}

function sacar(valor) {
  return (banco.saldo -= valor);
}

function numeroConta() {
  return banco.conta;
}

console.log(`Seu Número da conta é: ${numeroConta()}`);
console.log(`Seu Saldo é: ${mostrarSaldo()}`);
console.log(`Voçê depositou: ${depositar(300)}`);
console.log(`Seu novo Saldo é: ${sacar(100)}`);
