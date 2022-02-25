const prompt = require("prompt-sync")();
let powerOutlets = 0;
let extensionCord;
for (let i = 1; i <= 4; i++) {
  extensionCord = +prompt(`Insira o número de saídas da tomada ${i}:  `);

  if (i <= 3) {
    //Uma tomada vai ser usada para plugar outra régua, a não ser na última régua
    extensionCord -= 1;
  }

  powerOutlets += extensionCord;
}
console.log(`O total de tomadas disponível é: ${powerOutlets}`);
