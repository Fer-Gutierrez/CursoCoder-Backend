const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject("No se puede dividir");
    } else {
      resolve(dividendo / divisor);
    }
  });
};

let resultado = dividir(5, 2);
console.log(resultado);
let resultado1 = dividir(5, 0);
console.log(resultado1);

//Utilizando .then y .chatch para resolver la promesa.
dividir(5, 2)
  .then((res) => console.log(`El resultado de la division es: ${res}`))
  .catch((err) => console.log(`No se pudo realizar la operación: ${err}`));

//Ejemplo de promesas para resolver Callback Hell:
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); //(*)
})
  .then((res) => {
    console.log(res);
    return res * 2;
  })
  .then((res) => {
    console.log(res);
    return res * 2;
  })
  .then((res) => {
    console.log(res);
    return res * 2;
  });

//1) La promesa inicial se resuelve en 1 segundo (*)
//2) Entonces se llama el controlador then (**)
//3) El valor que devuelve se pasa a la sigueinte controlador .then(***)
