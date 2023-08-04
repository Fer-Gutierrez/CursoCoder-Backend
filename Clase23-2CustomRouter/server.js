import express from "express";
import UserRouter from "./router/users/users.router.js";

const app = express();
app.use(express.json());

const userRouter = new UserRouter();
app.use("/users", userRouter.getRouter());

const server = app.listen(8080, () => {
  console.log("ServerArriva ", server.address().port);
});
