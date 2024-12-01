// 1.input
const cantidadDeNumeros = 87;

// 2.lógica
const arrayNumerosRandom = [];

// tu bucle para generar los números
for (let i = 0; i < cantidadDeNumeros; i++) {
  // En cada ciclo del for vamos a generar un nuevo número aleatorio.
  // Para esto vamos a usar Math.random() que es una función
  // de JavaScript que genera un número aleatorio entre 0 y 1
  console.log(`Ejecutando: ${i} veces`);

  const randomNum = Math.random();
  console.log("Math.random():", randomNum);

  // Como Math.random devuelve un valor entre 0 y 1 lo multiplicamos
  // por otro valor para obtener números más grandes
  const numeroGrande = randomNum * 1000;
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
  arrayNumerosRandom.push(numeroRedondeado);
}

let contadorPares = 0;
let contadorImpares = 0;

// tu bucle para contar pares e impares
for (let i = 0; i < arrayNumerosRandom.length; i++) {
  if (arrayNumerosRandom[i] % 2 === 0) {
    contadorPares++;
  } else {
    contadorImpares++;
  }
}

// 3.output
console.log("Array de números aleatorios:", arrayNumerosRandom);
console.log("Cantidad de números pares:", contadorPares);
console.log("Cantidad de números impares:", contadorImpares);
