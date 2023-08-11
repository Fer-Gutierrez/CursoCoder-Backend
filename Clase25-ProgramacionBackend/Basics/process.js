console.log("CWD-->", process.cwd()) //direct actual
console.log("PID-->", process.pid) // id proceso
console.log("Memory User -->", process.memoryUsage()) //Memoria del proceso


//En el siguiente linea, cuando llamamos a node .proces.js 1 2 3, tomara ["1", "2", "3"]
console.log(process.argv.slice(2))