let nome;
let salario;
let idade;
let diploma;

nome = prompt("digite seu nome: ");
salario = Number(prompt("digite seu Salário: "));
idade = Number(prompt("digite sua Idade: "));
diploma = prompt("Se tem diploma digite  1 para sim ou 2 para nao: ");

document.write(` Tipo String, Nome: ${nome}<br>`);
document.write(` Tipo Number, Salário: ${salario}<br>`);
document.write(` Tipo Number, Idade: ${idade}<br>`);

if (diploma == 1) {
  diploma = true;
  document.write(` Tipo Boolean, Sim: ${diploma}`);
} else if (diploma == 2) {
  diploma = false;
  document.write(` Tipo Boolean, Nao: ${diploma}`);
}
