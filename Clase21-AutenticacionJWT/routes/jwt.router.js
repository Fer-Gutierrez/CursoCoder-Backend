import { Router } from "express";
import { generateToken } from "../utils";

const router = Router();

const users = [];

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
//   if (exist)
//     return res.status(400).send({ status: "error", error: "usuario errado" });
//   const user = {
//     name,
//     email,
//     password,
//   };
  users.push(user);
  const acceso = generateToken(user);
  res.send({ status: "success", acceso });
});

router.get("/current", (req, res) =>{
    res.send({status: "success", payload: req.user})
})

export default router;
