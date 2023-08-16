import express from "express";
import userRouter from "./routers/users.router.js";
import toyRouter from "./routers/toy.router.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mongoose.connect(
  "mongodb+srv://fgutierrez:35750989@bdclasebackend.7lgy2hh.mongodb.net/?retryWrites=true&w=majority",
  {
    dbName: "Arquitectura-Jugueteria",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/api/users", userRouter.getRouter());
app.use("/api/toys", toyRouter);

const server = app.listen(8080, () => {
  console.log("ServerArriba ");
});
