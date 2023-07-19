import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import viewChatRouter from "./routes/viewChat.router.js";
import { Server } from "socket.io";

const app = express();
const httpServer = app.listen(8080, () => console.log("Seervidor Arriba")); //servidor http

//EXPRESS STANDAR CONFIGURATION
app.use(express.static(`${__dirname}/public`)); //ruta estatica
app.use(express.json()); //utilizar json
app.use(express.urlencoded({ extended: true })); //encode extendido

//HANDLEBARS - Vistas
app.engine("handlebars", handlebars.engine()); //creamos motor de las vistas
app.set("views", `${__dirname}/views`); //seteamos la ruta donde estan las vistas
app.set("view engine", "handlebars"); // seteamos el motor creado

//ROUTES
app.use("/", viewChatRouter); //usamos el middleware que mostrará la vista

//SOCKET - SERVER
const socketServer = new Server(httpServer);
socketServer.on("connection", (socket) => {
  console.log("Un usuario conectado");
  //...socket.on(event, ()=>{})
  //...socket.emit(event, data)

  socket.on("chatMessage", (data) => {
    let message = {user: socket.id, body: data}
    socket.broadcast.emit("chatMessage", message);
  });

});
