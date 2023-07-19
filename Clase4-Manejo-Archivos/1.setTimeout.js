const temporizador = (callback) => {
  setTimeout(() => {
    callback();
  }, 5000);
};

let operacion = () => console.log("Realizando operaciones");

//Realizando operaciones se realizará ultimo, despues de 5000.-
console.log("Inicio del proceso");
temporizador(operacion);
console.log("Finalizacion del proceso");
