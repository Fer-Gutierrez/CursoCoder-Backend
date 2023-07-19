import fs from "fs";
import crypto from "crypto";

const path = "./Clase5-Adm-paquetes-npm/2.Ejercicio/files/Usuarios.json";

export default class userManager {
  getUsuarios = async () => {
    if (fs.existsSync(path)) {
      const datos = await fs.promises.readFile(path, "utf-8");
      const usuarios = JSON.parse(datos);

      return usuarios;
    } else {
      return [];
    }
  };

  crearUsuario = async (usuario) => {
    const usuarios = await this.getUsuarios();

    const usuarioExistente = usuarios.some(
      (u) => u.nombre_usuario === usuario.nombre_usuario
    );

    if (usuarioExistente) {
      console.log("El usuario ya existe");
      return `Error: El nombre de usuario ya existe ${usuarioExistente.nombre_usuario}`;
    }

    usuario.id =
      usuarios.length === 0 ? 1 : usuarios[usuarios.length - 1].id + 1;

    usuario.salt = crypto.randomBytes(128).toString("base64");
    usuario.contrasena = crypto
      .createHmac("sha256", usuario.salt)
      .update(usuario.contrasena)
      .digest("hex");
    usuarios.push(usuario);
    await fs.promises.writeFile(path, JSON.stringify(usuarios, null, "\t"));
    return usuario;
  };

  validarUsuario = async (username, password) => {
    const usuarios = await this.getUsuarios();
    const usuarioEncontrado = usuarios.findIndex(
      (u) => u.nombre_usuario === username
    );
    if (usuarioEncontrado === -1) {
      console.error("Usuarios no encontrado");
      return;
    }

    const usuario = usuarios[usuarioEncontrado];
    const passwordUser = crypto
      .createHmac("sha256", usuario.salt)
      .update(password)
      .digest("hex");

    if (passwordUser === usuario.contrasena) {
      console.log("Usuario ingreso al sistema");
    } else {
      console.log("Contraseña invalida");
    }
  };
}
