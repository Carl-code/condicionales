const productos = {
  id1: {
    nombre: "Monitor",
    descripcion: "Pantalla curva Oled de 50 pulgadas, colores vividos 4K",
    precio: 12000,
    stock: 10,
  },
  id2: {
    nombre: "Laptop",
    descripcion:
      "Super ligera y con una super potencia impulsada por el procesador intel core i9",
    precio: 12000,
    stock: 10,
  },
  id3: {
    nombre: "Mouse",
    descripcion: "Con gran desempeno y elegancia",
    precio: 12000,
    stock: 10,
  },
  id4: {
    nombre: "Gafas de sol",
    descripcion: "Disfruta de los dias de playa sin rayos directos a tus ojos",
    precio: 12000,
    stock: 10,
  },
};

// Usando un bucle for...in para recorrer el objeto
for (const id in productos) {
  console.log(`ID: ${id}`);
  console.log(`Nombre: ${productos[id].nombre}`);
  console.log(`Descripcion: ${productos[id].descripcion}`);
  console.log(`Precio: $${productos[id].precio}`);
  console.log(`Stock: $${productos[id].stock}`);
}
