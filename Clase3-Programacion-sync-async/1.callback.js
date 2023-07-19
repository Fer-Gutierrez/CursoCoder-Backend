let valoresOriginales = [1, 2, 3, 4, 5];
let nuevosValores = valoresOriginales.map((x) => x + 1);
//Array.map() -->iteramos un arreglo para modificar sus elementos

let otrosValores = valoresOriginales.map((x) => x * 2);
let masValores = valoresOriginales.map((x) => "a");

//funcion para devolver solo los pares
const funcionDePares = (valor) => {
  if (valor % 2 === 0) {
    return 2;
  } else {
    return "No es par";
  }
};

//Si la funcion neceista un solo parámetro puedo ejecutarla sin necesitada pasarle el parametro dentro del map --> va implicito.
const evaluacionPares = valoresOriginales.map(funcionDePares);
const evaluacionPares2 = valoresOriginales.map((x) => funcionDePares(x));
console.log(evaluacionPares);
console.log(evaluacionPares2);


//Representacion de la funcion Map:
const funcionMap = (arreglo, callback) =>{
  let nuevoArreglo = [];
  for (let i=0; i < arreglo.length; i++) {
    let nuevoValor = callback(arreglo[i])
    nuevoArreglo.push(nuevoValor);    
  }
  return nuevoArreglo;
};

let nuevoArregloPropio = funcionMap(valoresOriginales, x=>x*2);
let nuevoArregloMap = valoresOriginales.map(x=>x*2)
console.log(nuevoArregloPropio)
console.log(nuevoArregloMap)


//Para poder colocar una array antes de la funcion:
//Esta funcion solo se puede utilizar luego de un array con el .
Array.prototype.miPropiafuncionMap = function(callback){
  let nuevoArreglo =[];
  for (let i = 0; i < this.length; i++) {
    let nuevoValor = callback(this[i]);
    nuevoArreglo.push(nuevoValor);
  }
  return nuevoArreglo
}

let arregloPrueba = [1,2,3,4,5];
let nuevosValoresPrueba = arregloPrueba.miPropiafuncionMap(x=>x+1);
console.log(nuevosValoresPrueba)


/*
CONVENCIONES PARA TENER EN CUENTA:
- El callback siempre es el último parámetro.
- El callback suele ser una función que recibe dos parámetros.
- La función llama al callback al terminar de ejecutar todas sus operaciones.
- Si la operación fue exitosa, la función llamará al callback pasando null como primer parámetro y si generó algún resultado este se pasará como segundo parámetro.
- Si la operación resultó en un error, la función llamará al callback pasando el error obtenido como primer parámetro.

*/