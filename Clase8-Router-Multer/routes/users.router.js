import { Router } from "express";
import { uploader } from "../utils.js";

const router = Router();
const users = [];

router.get("/", (req, res) => {
  res.send({ users });
});


router.post("/", (req, res) => {
  const userbody = req.body;
  users.push(userbody);
  res.send({ status: "Ok" });
});


//POST UTILIZANDO MULTER:
//La siguiente manera es cambiando el tipo de request que recibira el metodo
//from-data en POSTAMAN
//al pasarle el archivo(imagen) para guardarla por POSTMAN
// hay que poner la key con el nombre "file" y tiene que ser type=file
router.post("/multer", uploader.single("file"), (req, res) => {
  console.log(req.file);
  if (!req.file) {
    return res
      .status(400)
      .send({ status: "error", error: "No se guardó la imagen" });
  }
  let user = req.body;
  user.profile = req.file.path;
  users.push(user);
  res.send({ status: "Ok", message: "Usuario creado" });
});

export default router;
