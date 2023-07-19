import express from "express";
import __dirname from "./utils.js";
import viewRouter from "./routes/views.router.js";
import courseRouter from "./routes/courses.router.js";
import userRouter from "./routes/users.router.js"
import handlebars from "express-handlebars";
import mongoose from "mongoose";

//CONFIGURACION ESTANDAR DE EXPRESS
const app = express();
const PORT = 8080;

//CONEXION DB:
const config = {
  mongoDB: {
    URL: "mongodb+srv://fgutierrez:35750989@bdclasebackend.7lgy2hh.mongodb.net/?retryWrites=true&w=majority",
  },
};
export const connectMongoDB = async () => {
  try {
    await mongoose.connect(config.mongoDB.URL);
    console.log("Connected to Mongo Atlas");
  } catch (error) {
    console.log("Error en la conexión con Mongo Atlas", error);
  }
};
connectMongoDB();

app.use(express.static(`${__dirname}/public`)); //ruta estatica
app.use(express.json()); //utilizar json
app.use(express.urlencoded({ extended: true })); //encode extendido

//HANDLEBARS - Vistas
app.engine("handlebars", handlebars.engine()); //creamos motor de las vistas
app.set("views", `${__dirname}/views`); //seteamos la ruta donde estan las vistas
app.set("view engine", "handlebars"); // seteamos el motor creado

//ROUTES
app.use("/", viewRouter); //usamos el middleware que mostrará la vista
app.use("/api/courses", courseRouter);
app.use("/api/users", userRouter);

//LEVANTAMOS EL SERVER
const server = app.listen(PORT, () => console.log("Servidor arriba"));
