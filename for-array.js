const animales = [
  { nombre: "perro", tipo: "mamífero", edad: "4" },
  { nombre: "gato", tipo: "mamífero", edad: "2" },
  { nombre: "loro", tipo: "ave", edad: "6" },
  { nombre: "pez", tipo: "acuático", edad: "1" },
  { nombre: "rana", tipo: "anfibio", edad: "3" },
];

// for (let i = 0; i < animales.length; i++) {
//   console.log(
//     `Mi Nombre es: ${animales[i].nombre} y tengo ${animales[i].edad} anios`
//   );
// }

// for (let animal in animales) {
//   console.log(
//     `Hola soy un ${animales[animal].nombre}, soy del tipo ${animales[animal].tipo} y tengo ${animales[animal].edad} anios`
//   );
// }

let contador = 0;
const totalDeAnimales = animales.length;

while (contador < totalDeAnimales) {
  console.log(animales[contador].tipo);

  if (animales[contador].tipo === "acuático") {
    console.log("Encontré un animal acuático! Deteniendo el loop...");
    break;
  }
  contador++;
}
