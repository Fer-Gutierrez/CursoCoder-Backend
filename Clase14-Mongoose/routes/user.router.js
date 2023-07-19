import { Router } from "express";
import { userModel } from "../models/user.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let users = await userModel.find();
    res.send({
      result: "Succes",
      payload: users,
    });
  } catch (error) {
    console.log("No se pudieron obtener los datos de Mongo +" + error);
  }
});

router.post("/", async (req, res) => {
  let { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email)
    return res.send({ status: "error", error: "Valores incompletos." });

  try {
    let result = await userModel.create({ first_name, last_name, email });
    res.send({ status: "Success", payload: result });
  } catch (error) {
    return res.send({ status: "error", error });
  }
});

export default router;
