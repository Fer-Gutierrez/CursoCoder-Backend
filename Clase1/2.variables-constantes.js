// ABRIR CON QUOKKA PARA ANALIZAR.

//Declarar variables
var variable1;
let variable2; //Recomendada

//Ejemplos:
var a = 1;
console.log(a);
a = 4;
console.log(a);

let b = 2;
console.log(b);
b = 5;
console.log(b);

/* Diferencia entre var y let
var: Afecta a todo el codigo.
let: Afecta unicamente al bloque donde estoy */

//Ejemplo con VAR:
var variableVar = "Soy una variable creada con VAR";
for (var i = 0; i < 3; i++) {
  var variableVar = "Soy la segunda variable creada con VAR";
}
console.log(variableVar);
// Toma la varible creade dentro de otro bloque de codigo (for)

//Ejemplo con LET:
let variableLet = "Soy una variable creada con LET";
for (var i = 0; i < 3; i++) {
  let variableLet = "Soy la segunda variable creada con LET";
}
console.log(variableLet);
// Toma la varible creade dentro del mismo bloque de codigo (no considera la varible que esta dentro del for)

//Declarar constantes --> no se pueden cambiar.
const constante = "Soy una constante";
console.log(constante);

//Typeof
console.log(typeof variable1);
console.log(typeof variableLet);
console.log(typeof variableVar);
console.log(typeof 1);
console.log(typeof null);

let num = 5;
console.log(typeof num);

num = "Hola";
console.log(typeof num);
