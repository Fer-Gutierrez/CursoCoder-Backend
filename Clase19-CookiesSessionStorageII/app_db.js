import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";

const app = express();
app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://fgutierrez:35750989@bdclasebackend.7lgy2hh.mongodb.net/?retryWrites=true&w=majority",
      dbName: "PizzeriaTest",
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 15,
    }),
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
