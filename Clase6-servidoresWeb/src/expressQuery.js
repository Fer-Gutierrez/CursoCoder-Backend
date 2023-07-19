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
  let genero = req.query.genero;
  if (!genero || (genero !== "M" && genero !== "F")) return res.send(usuarios);

  let usuariosFiltrados = usuarios.filter((u) => u.genero === genero);
  res.send(usuariosFiltrados);
});

app.listen(8080, console.log("Servidor Arriba"));
