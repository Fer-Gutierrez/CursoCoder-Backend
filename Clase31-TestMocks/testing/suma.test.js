import suma from "../suma.js";

let totalTest = 0;
let successfullTest = 0;

console.log("1. Devolver null si algún parámetro no es numérico.");
totalTest++;
const result = suma(1, "2");
if (result === null) {
  console.log("     Test 1 existoso");
  successfullTest++;
} else console.log("    Test 1 fallado");

console.log("2. Devolver 0 si no se pasó ningún parámetro");
totalTest++;
const result1 = suma();
if (result1 === 0) {
  console.log("     Test 2 exitoso");
  successfullTest++;
} else console.log("Test 2 fallado");

console.log("3. Devolver la suma correctamente. ");
totalTest++;
const result2 = suma(10, 10);
if (result2 === 20) {
  console.log("     Test 3 exitoso");
  successfullTest++;
} else console.log("Test 3 fallado");

console.log(
  "4. Devolver la suma correctamente con cualquier cantidad de números. "
);
totalTest++;
const result3 = suma(10, 10, 5, 5, 3, 7);
if (result3 === 40) {
  console.log("     Test 4 exitoso");
  successfullTest++;
} else console.log("Test 4 fallado");

console.log("=================================================");
console.log(`Test pasados ${successfullTest} de ${totalTest} pruebas`);
console.log("=================================================");
