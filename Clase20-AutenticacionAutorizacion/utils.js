import { fileURLToPath } from "url";
import { dirname } from "path";
import bcrypt, { genSalt, genSaltSync } from "bcrypt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Metodo para crear el HASH
export const createHash = (password) =>
  bcrypt.hashSync(password, genSaltSync(10));

//Metodo para validar el HASH
export const isValidPassword = (user, password) =>
  bcrypt.compareSync(password, user.password);

export default __dirname;
