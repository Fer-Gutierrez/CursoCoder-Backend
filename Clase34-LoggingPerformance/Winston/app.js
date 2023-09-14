import express from "express";
import { addLogger } from "./utils/logger.js";

const app = express();

app.use(express.json());

app.use(addLogger);

app.get("/", (req, res) => {
  req.logger.warning("Alerta warning");
  res.send({ message: "Prueba de Logger con Winston" });
});

app.listen(8080, () => console.log("Server arriba"));
