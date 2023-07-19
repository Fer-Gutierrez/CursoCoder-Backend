//para usar el import debemos agregar en el package.json el type: "module"
import ManagerUsuarios from "./managerUsuarios.js";
const manager = new ManagerUsuarios();

const lectura = async () => {
  let consultaUsuarios = await manager.consultarUsuarios();
  console.log(consultaUsuarios);
};

lectura();

const escritura = async () => {
  let nuevousuario = { nombre: "Juan" };
  let escrituraUsuarios = await manager.crearUsuario(nuevousuario);
  console.log(escrituraUsuarios);
};

escritura();
