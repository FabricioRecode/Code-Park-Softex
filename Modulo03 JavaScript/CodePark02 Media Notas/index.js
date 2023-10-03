let nota1;
let nota2;
let nota3;
let media;

nota1 = Number(prompt("Digite a Primeira Nota:"));
nota2 = Number(prompt("Digite a Segunda Nota:"));
nota3 = Number(prompt("Digite a Terceira Nota:"));

media = (nota1 + nota2 + nota3) / 3;

console.log(`Sua média é ${media.toFixed(2)} !!`);
