const ram = 16; // GB
const almacenamiento = 2; // TB
const nucleosCPU = 8;
const velocidadCPU = 4;
const precio = 1000;

const esPotente = ram >= 8 && nucleosCPU >= 4 ? "Potente" : "Lenta";
const capacidad = almacenamiento > 1 ? "Alta" : "Baja";
// Los otros datos
const tipoCPU = velocidadCPU > 3 ? "Rapida" : "Lenta";
const rangoPrecio = precio < 1000 ? "Asequible" : "Costoso";

console.log("¿Es potente?", esPotente);
console.log("Capacidad de almacenamiento:", capacidad);
// Tu código

// Redacta una descripción
const descripcion =
  "Esta computadora es " +
  esPotente +
  " Y además tiene una capacidad muy " +
  capacidad +
  " Lo cual a su vez cuenta con un CPU que es muy " +
  tipoCPU +
  " por un precio " +
  rangoPrecio;

console.log(descripcion);
