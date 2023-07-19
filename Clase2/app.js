//NOVEDADES DE ES6:
//1-Exponencial:
let valor = [1, 2, 3, 4, 5, 6];
let valoresNuevos = valor.map((numero, indice) => numero ** indice);
console.log(valoresNuevos);

//2-Manejo de array includes:
const arregloNombres = ["juan", "maria", "roberto"];
let existeMaria = arregloNombres.includes("maria");
console.log(existeMaria);
let existeCarlos = arregloNombres.includes("carlos");
console.log(existeCarlos);

let nombreencontrado = arregloNombres.some((n) => n === "maria");
console.log(nombreencontrado);

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//NOVEDADES DE ES8:
//Async await para mejor control asíncrono
//Object.entries, Object.values, Object.keys --> Control interno sobre las propiedades de un objeto
let persona = { nombre: "fernando", apellido: "gutierrez", edad: 31 };
let llaveValor = Object.entries(persona);
console.log(llaveValor);

let propiedades = Object.keys(persona);
console.log(propiedades);

let valores = Object.values(persona);
console.log(valores);

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//NOVEDADES DE ES9:
//Resolvedores de promesas con .finally()
//Control a los objetos con operadores --> rest y spread (aplicable también a arrays)
let automovilVW = {
  puertas: 4,
  color: "amarillo",
  cubiertas: "michelin",
  ruedaAuxilio: true,
};

let puerta = {
  largo: 1.9,
  ancho: 2,
};

//Spread:
let ObjetNuevo = { ...automovilVW, ...puerta };
console.log(ObjetNuevo);

//Desestructurar:
//Rest: Le quita alguna propiedad al objeto.
let { color, cubiertas, ...rest } = automovilVW;
console.log(color);
console.log(cubiertas);
console.log(rest);

//Ejercicio ES9:
const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

let arrayPropiedades = [];

objetos.forEach((o) => {
  const arrayInterno = Object.keys(o);
  arrayInterno.forEach((v) => {
    !arrayPropiedades.includes(v) && arrayPropiedades.push(v);
  });
});
console.log(arrayPropiedades);

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//NOVEDADES DE ES10:
/*
String.trim(): Remueve los espacios innecesarios en una cadena. Sirve para validar cadenas enviadas vacías o eliminar los espacios iniciales y finales.
Array.flat():Remueve anidaciones internas en arrays para dejar un arreglo plano.
Dynamic import: Permite importar sólo los módulos necesarios, ahorrando espacio y memoria. --> Importa solol los modulos que necesito --> Se usa en Factory Patern
*/

//Dynamic Import:
let tipo = "calculos";
async function probarCalculos() {
  if (tipo === "calculos") {
    const { default: Operaciones } = await import("./operaciones");
    let calculo = new Operaciones();
    let resultadoResta = calculo.resta(4, 1);
    console.log(resultadoResta);
    return resultadoResta;
  }
}

//Trim() --> Quitamos los espacios.
let cadena = "     hola 222    ";
console.log(cadena.trim());

let mensaje = [];
let intentoMensaje = "              ";
if (intentoMensaje.trim().length > 0) {
  mensaje.push(intentoMensaje.trim());
  console.log("el mensaje fue insertado con exito");
} else {
  console.log("este mensase viene vacio");
}

//Fat --> unimos array anidados en uno.
let arrayAnidado = [1, 2, 3, 4, ["as", "fs", "ks"], 4, 5, 78, [true, false]];
console.log(arrayAnidado.flat());

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//NOVEDADES DE ES11:
/*
Operador nullish. Sirve para poder colocar un valor por default a variables que podrían ser nulas o indefinidas, a diferencia del operador ||, éstas filtran “falseys”
Variables privadas dentro de las clases, esto permite que algunas variables no sean accesibles desde el entorno de instancia de una clase y sólo sea utilizada de manera interna.
*/

let variablePrueba = 0;
let variableAsignable = variablePrueba || "sin valor";
let variableNull = variablePrueba ?? "Sin valor"; //solo se considera falsy si es null o undefined

console.log(variableAsignable);
console.log(variableNull);
