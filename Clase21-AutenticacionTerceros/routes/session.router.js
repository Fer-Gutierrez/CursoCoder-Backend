import { Router } from "express";
import userModel from "../models/user.model.js";
import { createHash, isValidPassword } from "../utils.js";
import passport from "passport";
const router = Router();

//ELIMINAMOS LA VALIDACION ANTERIOR PORQUE AHORA LO HACEMOS A TRAVES DE PASSPORT
/* 
 router.post("/register", async (req, res) => {
   const { first_name, last_name, email, password, age } = req.body;
   if (!first_name || !last_name || !email || !age)
   return res
   .status(400)
   .send({ stastus: "error", error: "Información incompleta." });
   
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
        password: createHash(password),
      };
      
      let result = await userModel.create(user);
      res.send({ status: "success", message: "User registered", payload: result });
      
      
    });
    */

//USAMOS LA VALIDACION CON PASSPORT:
router.post(
  "/register",
  passport.authenticate("register", { failureRedirect: "/failregister" }),
  async (req, res) => {
    res.send({ status: "success", message: "Usuario registrado" });
  }
);

router.get("/failregister", async (req, res) => {
  res.send({ error: "failed" });
});


//USANDO LA APP DE GITHUB
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
  async (req, res) => {}
);

router.get(
  "/githubcallback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  async (req, res) => {
    req.session.user = req.user;
    res.redirect("/");
  }
);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(404)
      .send({ status: "error", error: "Campos incompletos" });

  const user = await userModel.findOne(
    { email },
    { email: 1, first_name: 1, last_name: 1, password: 1 }
  );

  if (!user)
    return res
      .status(400)
      .send({ status: "error", error: "El email no existe." });

  let passwordValid = isValidPassword(user, password);

  if (!passwordValid)
    return res
      .status(403)
      .send({ status: "error", error: "La contraseña es incorrecta" });

  req.session.user = user;

  res.send({
    status: "success",
    payload: req.session.user,
    message: "El usuario se logueo con exito.",
  });
});

router.post("/restore", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(404)
      .send({ status: "error", error: "Campos incompletos" });

  const user = await userModel.findOne({ email });

  if (!user)
    return res
      .status(400)
      .send({ stastus: "error", error: "El email no existe." });

  const result = await userModel.updateOne(
    { _id: user._id },
    { $set: { password: createHash(password) } }
  );

  Object.keys(result).includes("errors")
    ? res
        .status(400)
        .send({ status: "Bad Request", error: Object.values(result)[0] })
    : res.send({
        status: "Ok",
        message: `Contraseña restaurada con exito`,
        data: result,
      });
});

export default router;
