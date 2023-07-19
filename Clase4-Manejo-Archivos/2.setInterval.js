let contador = () => {
  let contador = 1;
  console.log("Realizando operacion");
  let tiempo = setInterval(() => {
    console.log(contador++);
    if (contador >= 5) {
      clearInterval(tiempo);
    }
  }, 1000);
};

console.log("Inicio tarea");
contador();
console.log("Finalizo tarea");
