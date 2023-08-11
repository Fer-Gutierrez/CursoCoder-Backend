import express from "express";
import { fork } from "child_process";

const app = express();
const PORT = 8080;

app.get("/suma", (req, res) => {
  const child = fork("./operacionCompleja.js");
  child.send("start");
  child.on("message", (result) => {
    res.send(`El resultado de la operacion es: ${result}`);
  });
});

app.listen(PORT, () => console.log(`Servidor arriba ${PORT}`));
