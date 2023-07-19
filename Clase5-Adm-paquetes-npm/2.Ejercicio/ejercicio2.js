import UserManager from "./manager/userManager.js";

const userManager = new UserManager();

const proceso = async () => {
  //Consultar usuarios:
  let usuarios = await userManager.getUsuarios();
  console.log(usuarios);

  //Crear usuario:
  let usuario = {
    nombre: "Fernando",
    apellido: "Gutierrez",
    nombre_usuario: "fgutierrez",
    contrasena: "fg35750989",
  };
  let consulta = await userManager.crearUsuario(usuario);
  console.log(consulta);

  //Validar ingreso de usuario:
  await userManager.validarUsuario("fgutierrez", "fg35750989");
};

proceso();
