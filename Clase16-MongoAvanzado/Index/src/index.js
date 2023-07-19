import userModel from "./models/user.model.js";
import mongoose, { mongo } from "mongoose";

//PODEMOS OBTENER INFORMACION SOBRE LA CONSULTA REALIZADA A LA BASE DE DATOS:
//nReturned --> cantidad de registros retornados
//executionTimeMillis --> tiempo de demora en milisegundos.
const enviroment = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(
    "mongodb+srv://fgutierrez:35750989@bdclasebackend.7lgy2hh.mongodb.net/?retryWrites=true&w=majority",
    { dbName: "test" }
  );
  let result = await userModel.find().explain("executionStats");
  console.log(result);

  //si en el modelo, designamos el campo first_name como index: true, la busqueda es mas rápida.
  let result1 = await userModel
    .find({ first_name: "Celia" })
    .explain("executionStats");
  console.log(result1);
};
enviroment();
