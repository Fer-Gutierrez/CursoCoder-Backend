import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import FileStore from "session-file-store";

//Cuando utilizamos fileStore de Sessions guardamos la session en una carpeta.
//Ventaja la sesion no se pierde
//Desventaja: si la session finaliza, entonces se crea una nueva session, pero los  archivos viejos no se elimina
//Por ello es que esto no se recomienda en su totalidad.

//Para poder administrar correctamente la sessiones utilizariamos el guardado directamente ne la BD.
//Con mongoAtlas podemos  tener una gestion mas limpia y contar con una autoeliminacion de sessiones expiradas

const filestorage = FileStore(session);
const app = express();
app.use(cookieParser());
app.use(
  session({
    store: new filestorage({ path: "./sessions", ttl: 100, retries: 0 }),
    secret: "palabraSecreta",
    resave: false,
    saveUninitialized: false,
  })
);

const server = app.listen(8080, console.log("Servidor arriba"));

app.get("/", (req, res) => {
  req.session.counter = 1;
  res.send("Bienvenido");
});
