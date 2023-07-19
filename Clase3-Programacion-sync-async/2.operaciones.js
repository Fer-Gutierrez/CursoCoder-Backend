const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

const realizarOperacion = (numero1, numero2, callback) =>{
    console.log("Operación", callback.name, ":")
    let resultado = callback(numero1,numero2)
    console.log("El resultado es: ", resultado)
}

realizarOperacion(2,5,sumar);