import express from "express";
import userRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import __dirname from "./utils.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/pets", petsRouter);

app.use(express.static(`${__dirname}/public`));
const server = app.listen(8080, () => console.log("Servidor Arriba"));
