import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewRouter from "./routes/views.router.js";

const app = express();
//Expresamos el motor que va a utilizar para mostrar las vistas:
app.engine("handlebars", handlebars.engine());
//Indicamos la ruta donde estan las vistas:
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use("/", viewRouter);
app.use(express.static(`${__dirname}/public`));

//USUARIOS:
let users = [
  {
    name: "Fernando",
    apellido: "Gutierrez",
    edad: 15,
    correo: "fernandoezequiel333@gmail.com",
    telefono: 3492625268,
  },
  {
    name: "Juan",
    apellido: "Martinez",
    edad: 25,
    correo: "juanmartinez@gmail.com",
    telefono: 42345235,
  },
  {
    name: "Ernesto",
    apellido: "Guevara",
    edad: 55,
    correo: "elchecito@gmail.com",
    telefono: 4577321,
  },
  {
    name: "Jose",
    apellido: "SanMartin",
    edad: 85,
    correo: "ellibertador@gmail.com",
    telefono: 55637811,
  },
  {
    name: "Adolfo",
    apellido: "Hitler",
    edad: 15,
    correo: "eltarado@gmail.com",
    telefono: 346346772,
  },
];
app.get("/user", (req, res) => {
  let aleatorio = Math.floor(Math.random() * 4);
  let user = users[aleatorio];
  res.render("users", user);
});

const server = app.listen(8080, () => console.log("Server arriba"));
