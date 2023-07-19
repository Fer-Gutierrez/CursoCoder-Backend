import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewRouter from "./routes/view.routes.js";
import mongoose from "mongoose";

const app = express();
const PORT = 8080;
const connection = mongoose.connect(
  "mongodb+srv://fgutierrez:35750989@bdclasebackend.7lgy2hh.mongodb.net/?retryWrites=true&w=majority",
  { dbName: "PaginationTest" }
);

app.use(express.static(`${__dirname}/public`)); //ruta estatica
app.use(express.json()); //utilizar json
app.use(express.urlencoded({ extended: true })); //encode extendido

//HANDLEBARS - Vistas
app.engine("handlebars", handlebars.engine()); //creamos motor de las vistas
app.set("views", `${__dirname}/views`); //seteamos la ruta donde estan las vistas
app.set("view engine", "handlebars"); // seteamos el motor creado

//ROUTES
app.use("/", viewRouter); //usamos el middleware que mostrará la vista

//LEVANTAMOS EL SERVER
const server = app.listen(PORT, () => console.log("Servidor arriba"));
