//1 forma de crear una funcion: TraditionalFunction
function sumaDosNumeros(num1, num2) {
  return num1 + num2;
}

let total = sumaDosNumeros(1, 2);
console.log(total);

//2 forma de crear una funcion: ArrowFunction
const productoDosNumeros = (num1, num2) => {
  return num1 * num2;
};
total = productoDosNumeros(5, 4);
console.log(total);

//SCOPE DE LAS FUNCIONES:
//-----------------------
const i = "variable global -scope";

function declaracionDeVariables() {
  const i = "varible local dentro de la funcion";
  console.log(i); //Se imprime la variable local:
}

declaracionDeVariables();
console.log(i); //Se imprime la variable global:
//------------------------

//Ejemplos de Alcance:
//------------------------
const j = "valor global para ejemplo de alcance";
function ejemploDeAlcance() {
  //Se imprime el valor de j por fuera en la medida que no declares otra j dentro de la funcion
  console.log(j);
}
ejemploDeAlcance();
