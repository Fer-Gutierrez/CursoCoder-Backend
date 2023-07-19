//para usar el import debemos agregar en el package.json el type: "module"
import fs from "fs";
const pathInfo = "./Clase4-Manejo-Archivos/6.Ejercicio/Usr.json";

export default class ManagerUsuarios {
  consultarUsuarios = async () => {
    if (fs.existsSync(pathInfo)) {
      const datos = await fs.promises.readFile(pathInfo, "utf-8");
      const usuarios = JSON.parse(datos);
      return usuarios;
    } else {
      return [];
    }
  };

  crearUsuario = async (usuario) => {
    const usuarios = await this.consultarUsuarios();

    //Definimos el id
    if (usuarios.length === 0) {
      usuario.id = 1;
    } else {
      usuario.id = usuarios[usuarios.length - 1].id + 1;
    }

    usuarios.push(usuario);

    await fs.promises.writeFile(
      pathInfo,
      JSON.stringify(usuarios, null, "\t")
    );
    
  };
}
