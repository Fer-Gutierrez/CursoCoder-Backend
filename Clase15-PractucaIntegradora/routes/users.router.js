import { Router } from "express";
import Users from "../dao/dbManagers/users.js";

const userManager = new Users();
const router = Router();

router.get("/", async (req, res) => {
  let users = await userManager.getAll();
  if (!users)
    return res
      .status(500)
      .send({ status: "error", error: "No se pudieron obtener los datos" });
  res.send({ statud: "Success", payload: users });
});

router.post("/", async (req, res) => {
  const { first_name, last_name, email, birthDate, gender, courses, dni } =
    req.body;
  let result = await userManager.saveUser({
    first_name,
    last_name,
    email,
    birthDate,
    courses,
    gender,
    dni,
  });
  if (Object.keys(result).some((k) => (k = "errors")))
    return res.status(400).send({ status: "error", error: result });
  res.send({ status: "Success", payload: result });
});

export default router;
