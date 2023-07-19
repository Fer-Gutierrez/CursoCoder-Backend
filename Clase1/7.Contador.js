class Counter {
  constructor(responsable) {
    this.responsable = responsable;
    this.counter = 0;
  }

  static globalCounter = 0;

  getResponsable = () => {
    return this.responsable;
  };

  getCounter = () => {
    return this.counter;
  };

  getGlobalCounter = () => {
    return Counter.globalCounter;
  };

  count = () => {
    this.counter++;
    Counter.globalCounter++;
  };
}

const contador1 = new Counter("Corder");
contador1.count();
contador1.count();

const contador2 = new Counter("House");

//Mas alla que creamos dos contadores distintos, la variable Static es la misma para los dos contadores:
console.log("Contador 1: ", contador1.getCounter());
console.log("Contador 2: ", contador2.getGlobalCounter());
console.log("El responsable de contador 1 es", contador1.getResponsable());
console.log("El responsable de contador 2 es", contador2.getResponsable());
