import cluster from "cluster";
import { cpus } from "os";
import express from "express";

//Cantidad de nucleos del procesador--> para dividir el proceso en dicha cantidad
const nroNucleos = cpus().length;
// console.log(nroNucleos)

if (cluster.isPrimary) {
  console.log(`\u001b[1;34m Generamos un proceso padre con id: ${process.pid}`);
  for (let i = 0; i < nroNucleos - 1; i++) {
    cluster.fork();
  }
  cluster.on("message", (worker) => {
    console.log(`mensaje recibido desde el worker ${process.pid}`);
  });
} else {
  console.log(`\u001b[1;33m Proceso hijo con id: ${process.pid}`);

  const app = express();
  app.get("/operacionSencilla", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    res.send({
      status: "success",
      message: `El worjer con id: ${process.pid} obtuvo el resultado: ${sum}`,
    });
  });

  app.get("/operacionCompleja", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 2e9; i++) {
      sum += i;
    }
    res.send({
      status: "success",
      message: `El worjer con id: ${process.pid} obtuvo el resultado: ${sum}`,
    });
  });
  app.listen(8080, () => console.log("Server arriba"));
}

/*
console.log( "\u001b[1;31m Red message" );
console.log( "\u001b[1;32m Green message" );
console.log( "\u001b[1;33m Yellow message" );
console.log( "\u001b[1;34m Blue message" );
console.log( "\u001b[1;35m Purple message" );
console.log( "\u001b[1;36m Cyan message" );
*/
