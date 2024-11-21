const envio = {
  id: "AR123456789",
  destinatario: "Laura González",
  direccion: {
    calle: "Av. Santa Fe",
    numero: 1930,
    ciudad: "CABA",
    provincia: "Buenos Aires",
  },
  productos: [
    { nombre: "Libro", peso: 1, valor: 1200 },
    { nombre: "Maceta", peso: 2, valor: 800 },
  ],
  pesoTotal: 3,
  distancia: 50, // distancia en km
  tipo: "estándar", // puede ser "estándar" o "express"
  fechaEnvio: { dia: 26, mes: 3, anio: 2024 },
  estado: "en camino", // puede ser "preparación", "en camino", "entregado"
  esInternacional: true,
};

let costoDeEnvio = 300;

// tu código
if (envio.esInternacional) {
  costoDeEnvio += 100;
}
if (envio.tipo === "express") {
  costoDeEnvio += 200;
}
//Costo por peso total
costoDeEnvio += envio.pesoTotal * 10;
console.log(costoDeEnvio);
