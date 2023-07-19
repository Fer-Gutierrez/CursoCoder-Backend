import express from "express";

const app = express();

const usuarios = [
  {
    id: 1,
    nombre: "Fernando",
    genero: "M",
  },
  {
    id: 2,
    nombre: "Fabricio",
    genero: "M",
  },
  {
    id: 3,
    nombre: "Maria",
    genero: "F",
  },
];

app.get("/", (req, res) => {
  res.send(usuarios);
});

app.get("/:idUsuario", (req, res) => {
  let id = req.params.idUsuario;

  let usuarioFiltrado = usuarios?.find((u) => u.id === +id);
  !usuarioFiltrado
    ? res.send({ error: "usuario no encontrado" })
    : res.send(usuarioFiltrado);
});

app.listen(8080, console.log("Servidor Arriba"));
