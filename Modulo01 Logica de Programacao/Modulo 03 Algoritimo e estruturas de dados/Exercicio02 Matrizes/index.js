const animais = [
  ["Gato", "Felino", 4],
  ["Cachorro", "Mamífero", 8],
  ["Vaca", "Herbívoro", 9],
  ["Macaco", "Mamífero", 13],
  ["Cavalo", "Mamífero", 12],
];

console.log("Informações sobre os animais:");
for (let i = 0; i < animais.length; i++) {
  const animal = animais[i];
  console.log(
    `Animal: ${animal[0]}, Espécie: ${animal[1]}, Idade: ${animal[2]} anos`
  );
}
