import { Router } from "express";
import userModel from "../models/user.model.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { first_name, last_name, email, password, age } = req.body;
  const exist = await userModel.findOne({ email });
  if (exist)
    return res
      .status(400)
      .send({ stastus: "error", error: "El email ya se ecuentra registrado." });

  const user = {
    first_name,
    last_name,
    email,
    age,
    password,
  };

  let result = await userModel.create(user);
  res.send({ status: "success", message: "USer registered", payload: result });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password });
  if (!user)
    return res
      .status(400)
      .send({ stastus: "error", error: "Datos incorrectos." });

  req.session.user = {
    name: `${user.first_name} ${user.last_name}`,
    email: user.email,
    age: user.age,
  };

  res.send({
    status: "success",
    payload: req.session.user,
    message: "El usuario se logueo con exito.",
  });
});

export default router;
