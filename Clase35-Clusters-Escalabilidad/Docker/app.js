import express from "express";

const app = express();
app.get("/operacionSencilla", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  res.send({
    status: "success",
    message: `El worjer con id: ${process.pid} obtuvo el resultado: ${sum}`,
  });
});

app.get("/operacionCompleja", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 2e9; i++) {
    sum += i;
  }
  res.send({
    status: "success",
    message: `El worjer con id: ${process.pid} obtuvo el resultado: ${sum}`,
  });
});
app.listen(8080, () => console.log("Server arriba"));

//CREAR UN CONTENEDOR EN DOCKER:
//Una vez configurado
