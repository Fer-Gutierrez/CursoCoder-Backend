import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewRouter from "./routes/views.router.js";
import { Server } from "socket.io";

const app = express();
const httpServer = app.listen(8080, () => console.log("Server arriba"));

//Expresamos el motor que va a utilizar para mostrar las vistas:
app.engine("handlebars", handlebars.engine());
//Indicamos la ruta donde estan las vistas:
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use("/", viewRouter);
app.use(express.static(`${__dirname}/public`));

//CONFIGURAMOS EL SOCKETSERVER:
//Creamos el servidor Socket en base al servidor http:
//Creamos ala comunicacion entre el Socket y el servidor http, cada vez que levante el servidor, lo hara como un Socket Server
const socketServer = new Server(httpServer);

socketServer.on("connection", (socket) => {
  console.log("Nuevo cliente");
  //socket.on --> Activamos la escucha y la recepcion a traves de un evento
  //socket.emit --> Puedo hablar y enviar la informacion a traves de un evento

  socket.on("message", (data) => {
    console.log(data);
  });

  socket.emit("evento_para_socket", "mensaje para que lo reciba el cliente");
});

// socketServer.emit
