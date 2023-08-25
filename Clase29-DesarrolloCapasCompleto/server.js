import express from "express";
import mongoose from "mongoose";
import CONFIG from "./config/config.js";
import appRouter from "./routes/app.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", appRouter);
mongoose
  .connect(CONFIG.MONGOURI)
  .then(() => {
    const server = app.listen(CONFIG.PORT, () =>
      console.log(`Conected to ${CONFIG.PORT}`)
    );
  })
  .catch((err) => {
    console.log("Error connect");
    throw err;
  });
