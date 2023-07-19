const suma = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    (numero1 === 0 || numero2 === 0) && reject("Operación innecesaria");
    let resultado = numero1 + numero2;
    resultado < 0
      ? reject("La calculadora sólo debe devolver valores positivos")
      : resolve(resultado);
  });
};

const resta = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    (numero1 === 0 || numero2 === 0) && reject("Operación inválida");
    let resultado = numero1 - numero2;
    resultado < 0
      ? reject("La calculadora sólo debe devolver valores positivos")
      : resolve(resultado);
  });
};

const multiplicacion = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    (numero1 === 0 || numero2 === 0) && reject("Operación inválida");
    let resultado = numero1 * numero2;
    resultado < 0
      ? reject("La calculadora sólo debe devolver valores positivos")
      : resolve(resultado);
  });
};

const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    divisor === 0 && reject("No se puede dividir");
    resolve(dividendo / divisor);
  });
};

const calculos = async () => {
  try {
    let num1 = 10;
    let num2 = 2;

    let resultSuma = await suma(num1, num2);
    console.log(`La operacion entre ${num1} y ${num2} fue de ${resultSuma}`);

    let resultResta = await resta(num1, num2);
    console.log(`La operacion entre ${num1} y ${num2} fue de ${resultResta}`);

    let resultMultiplicar = await multiplicacion(num1, num2);
    console.log(
      `La operacion entre ${num1} y ${num2} fue de ${resultMultiplicar}`
    );

    let resultDividir = await dividir(num1, num2);
    console.log(`La operacion entre ${num1} y ${num2} fue de ${resultDividir}`);
  } catch (err) {
    console.log(err);
  }
};

calculos();
