import moment from "moment";

const fechaActual = moment();
const fechaNacimiento = moment("12-06-1991", "DD-MM-YYYY");

if (fechaNacimiento.isValid()) {
  console.log(
    `Los años trancurridos son: = ${fechaActual.diff(fechaNacimiento, "years")}`
  );
  console.log(
    `Los dias trancurridos son: = ${fechaActual.diff(fechaNacimiento, "days")}`
  );
  console.log(
    `Las horas trancurridas son: = ${fechaActual.diff(fechaNacimiento, "hours")}`
  );
}
console.log(fechaActual);
