const fs = require("fs");

const fechaHoraActual = new Date();

//Creamos el archivo:
fs.writeFile(
  "./Clase4-Manejo-Archivos/fecha-y-hora.txt",
  `La fecha y hora actual es ${fechaHoraActual.toLocaleDateString()} ${fechaHoraActual.toLocaleTimeString()}`,
  (error) => {
    error && console.log("Error al intentar escribir");

    fs.readFile(
      "./Clase4-Manejo-Archivos/fecha-y-hora.txt",
      "utf-8",
      (error, resultado) => {
        error && console.log("Error al leer el archivo");
        console.log(resultado);
      }
    );
  }
);
