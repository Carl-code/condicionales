// creamos un array vacio para llenarlo de números
let numerosRandom = [];

// a continuación debes hacer que el for se ejecute 50 veces
// usa un console.log() para probar que se ejecuta 50 veces
// antes de generar los números
for (let i = 0; i < 50; i++) {
  // En cada ciclo del for vamos a generar un nuevo número aleatorio.
  // Para esto vamos a usar Math.random() que es una función
  // de JavaScript que genera un número aleatorio entre 0 y 1
  console.log(`Ejecutando: ${i} veces`);

  const randomNum = Math.random();
  console.log("Math.random():", randomNum);

  // Como Math.random devuelve un valor entre 0 y 1 lo multiplicamos
  // por otro valor para obtener números más grandes
  const numeroGrande = randomNum * 100;
  // en este caso al multiplicarlo por 100
  // vamos a generar un número entre 0 y 100
  console.log("numeroGrande", numeroGrande);

  // Para redondear el número y quitar los decimales usamos Math.floor()
  // que redondea hacia "abajo"
  const numeroRedondeado = Math.floor(numeroGrande);
  console.log("numeroRedondeado", numeroRedondeado);

  // finalmente, almacenamos el número generado en el array
  // ejemplo: numerosRandom[x] = num;

  // [completar el código]
  numerosRandom.push(numeroRedondeado);
}

// Mostrar el array en la terminal
console.log(numerosRandom);
