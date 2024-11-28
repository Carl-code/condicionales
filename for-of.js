const computadoras = [
  { nombre: "Asus", sistema_operativo: "Windows" },
  { nombre: "Macbook", sistema_operativo: "macOS" },
  { nombre: "Dell", sistema_operativo: "Windows" },
  { nombre: "Lenovo", sistema_operativo: "Linux" },
  { nombre: "HP", sistema_operativo: "Windows" },
];

// Iteramos sobre cada objeto del array "computadoras"
for (const compu of computadoras) {
  // Si el sistema operativo de la computadora actual es Windows, imprimimos su nombre en la consola
  // tu código
  if (compu.sistema_operativo === "Windows") {
    console.log(compu.nombre);
  }
}
