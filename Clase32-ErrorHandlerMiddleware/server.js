import express, { urlencoded } from "express";
import userRouter from "./router/user.js";
import errorMiddleware from "./middleware/indexControlError.js";

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use(errorMiddleware);
app.listen(8080, () => console.log("Server Arriba"));
