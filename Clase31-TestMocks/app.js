import express from "express";
import userRouter from "./Mock/routers/user.router.js";

const port = 8080;
const app = express();

app.use("/users", userRouter);

app.listen(port, () => console.log("Server arriba"));
