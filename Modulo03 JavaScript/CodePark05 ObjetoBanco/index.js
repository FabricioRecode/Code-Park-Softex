let banco = {
  conta: 3006,
  saldo: 2000,
  tipo: "conta-corrente",
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

document.write(` Seu Número da conta é: ${numeroConta()}<br>`);
document.write(` Seu Saldo: ${mostrarSaldo()}<br>`);
document.write(` Saldo mais Deposito de 300 Reais: ${depositar(300)}<br>`);
document.write(` Saldo menos o Saque de 250 Reais: ${sacar(250)}`);
