//Utilizar la libreria comander para manejar argumentos
//npm install commander
import { Command } from "commander";
const program = new Command();

program
  .option("-d, --debug", "variable de debug", false)
  .option("-p, --port <port>", "Numero Puerto", 8080)
  .option("-m, --mode <port>", "Ambiente", "Develop");

  program.parse();

  //Acceder a las opciones
  console.log("Options => ", program.opts())