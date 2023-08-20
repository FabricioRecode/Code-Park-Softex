let nome = window.prompt("Digite Seu nome Completo: ");
let ano = true;

while(ano) {
    let anoNas = parseInt(window.prompt("Digite o ano de nascimento"));
    let idade = 2022 - anoNas;
    if(anoNas >= 1922 && anoNas <= 2021) {
        window.alert("Nome: " + nome);
        window.alert("Idade: " + idade + " anos");
        ano = false;
    } else {
        window.alert("Digite um ano válido:")
    }
}