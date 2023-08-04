import { fileURLToPath } from "url";
import { dirname } from "path";
import bcrypt, { genSalt, genSaltSync } from "bcrypt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;
