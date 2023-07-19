//VARIABLES
//Ambito de las varibales:
let nombre;
let i = 0;

function foo() {
  i = 1;
  let j = 2;
  if (true) {
    console.log(i);
    console.log(j);
  }
}
foo();

//Puedo imprimir i pero no j, porque estoy fuera de la funcion.
console.log("i por fuera de la funcion:", i);
// console.log("j por fuera de la funcion:", j)

//Variables const --> Son constantes.
const b = 0;
//No podemos cambiar el valor de una variable creada con const.
// b=100;
console.log(b);

//Constante de tipo string
const nombre1 = "pepito";
//No puedo cambiar el valor de nombre1.
// nombre1 = "margarita";
console.log(nombre1);

//Array creado con const
//Podemos cambiar los elementos  dentro del array pero no podemos cambiar que sea un array.
const arrayNombres = ["hola1", "hola2", "hola3"];
console.log(arrayNombres[0]);
arrayNombres[0] = "chau1";
console.log(arrayNombres[0]);
