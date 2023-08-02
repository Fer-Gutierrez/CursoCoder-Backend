import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import initializedPassport from "./config/passport.config.js";

import viewRouter from "./routes/views.router.js";
import sessionRouter from "./routes/session.router.js";
import passport from "passport";

//CONEXION A LA BASE DEDATOS
const app = express();
const connection = mongoose.connect(
  "mongodb+srv://fgutierrez:35750989@bdclasebackend.7lgy2hh.mongodb.net/?retryWrites=true&w=majority",
  {
    dbName: "Autenticacion-Aut",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//CONFIGURACION GENERAL DE EXPRESS
const PORT = 8080;
app.use(express.static(`${__dirname}/public`)); //ruta estatica
app.use(express.json()); //utilizar json
app.use(express.urlencoded({ extended: true })); //encode extendido

//HANDLEBARS - Vistas
app.engine("handlebars", handlebars.engine()); //creamos motor de las vistas
app.set("views", `${__dirname}/views`); //seteamos la ruta donde estan las vistas
app.set("view engine", "handlebars"); // seteamos el motor creado

//SESSION:
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://fgutierrez:35750989@bdclasebackend.7lgy2hh.mongodb.net/?retryWrites=true&w=majority",
      dbName: "Autenticacion-Aut",
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 3000,
    }),
    secret: "palabraSecreta",
    resave: false,
    saveUninitialized: false,
  })
);

initializedPassport();
app.use(passport.initialize());
app.use(passport.session({ secret: "SecretCoders" }));

//ROUTES
app.use("/", viewRouter); //usamos el middleware que mostrará la vista
app.use("/api/session", sessionRouter);

//LEVANTAMOS EL SERVER
const server = app.listen(PORT, () => console.log("Servidor arriba"));
