import express from "express";

const app = express();

app.get("/saludo", (req, res) => {
  res.send("Hola estamos probando express");
});

app.get("/bienvenida", (req, res) => {
  res.send(`<h1 style="color:blue;"> Aqui tenemos una bienvenida</h1>`);
});

app.get("/usuario", (req, res) => {
  res.send({
    nombre: "Andrea",
    apellido: "Gonzalez",
  });
});

//Request con Parametros --> req.params
app.get("/usuario/:nombre/:apellido", (req, res) => {
  console.log(req.params.nombre);

  res.send({
    nombre: req.params.nombre,
    apellido: req.params.apellido,
  });
});

//Request con Query --> req.query
app.use(express.urlencoded({ extended: true }));
app.get("/rutaQuery", (req, res) => {
  //? --> arranca la query
  //& --> agregamos el parametro
  //   http://localhost:8080/rutaQuery?nombre=Fernando&apellido=Gutierrez
  let consultas = req.query;
  let { nombre, apellido } = req.query;

  res.send(consultas);
});

app.listen(8080, () => console.log("Servidor arriba"));
