import { fileURLToPath } from "url";
import { dirname } from "path";
import bcrypt, { genSalt, genSaltSync } from "bcrypt";
import jwt from "jsonwebtoken";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Metodo para crear el HASH
export const createHash = (password) =>
  bcrypt.hashSync(password, genSaltSync(10));

//Metodo para validar el HASH
export const isValidPassword = (user, password) =>
  bcrypt.compareSync(password, user.password);

//JWT TOKEN
const KEY = "CoderTokenSecret";

//Generamos el Token
export const generateToken = (user) => {
  const token = jwt.sign({ user }, KEY, { expiresIn: "2h" });
  return token;
};

//Obtenemos el token del usuario
export const authToken = (req, res, next) => {
  const headerAuth = req.headers.authorization;

  if (!headerAuth)
    return res
      .status(401)
      .send({ status: "esrror", error: "No esta autorizado" });

  console.log(headerAuth);

  //Quitamos el Bearer
  const token = headerAuth.split(" ")[1];

  //Verificamos el token enviado por el usuario
  jwt.verify(token, KEY, (error, credentials) => {
    console.log(error);
    if (error)
      return res
        .status(401)
        .send({ status: "error", error: "No esta autorizado" });
    req.user = credentials.user;
    next();
  });
};

export default __dirname;
