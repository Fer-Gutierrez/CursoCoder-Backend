//Async -Await
const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject("No se puede dividir");
    } else {
      resolve(dividendo / divisor);
    }
  });
};

const funcionAsincrona = async () => {
  try {
    let resultado = await dividir(6, 0);
    console.log(resultado)
  } catch (err) {
    console.log(err);
  }
};

funcionAsincrona();
