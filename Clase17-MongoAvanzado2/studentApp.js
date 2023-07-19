import mongoose from "mongoose";
import studentModel from "./models/student.model.js";

const enviroment = async () => {
  await mongoose.connect(
    "mongodb+srv://fgutierrez:35750989@bdclasebackend.7lgy2hh.mongodb.net/?retryWrites=true&w=majority",
    { dbName: "test" }
  );
};
enviroment();

const agrupadoPorCalificacion = async () => {
  let result = await studentModel.aggregate([
    { $group: { _id: "$grade", students: { $push: "$$ROOT" } } },
    { $sort: { _id: -1 } },
    //Merge:
    { $merge: { into: "agrupadoPorCalificacion" } },
  ]);

  console.log(result);
};
agrupadoPorCalificacion();

const agruparProGrupo = async () => {
  let result = await studentModel.aggregate([
    { $group: { _id: "$group", students: { $push: "$$ROOT" } } },
    //Merge:
    { $merge: { into: "agrupadoPorGrupo" } },
  ]);
  console.log(result);
};
agruparProGrupo();

const promedioDeEstudiantes1B = async () => {
  let result = await studentModel.aggregate([
    { $match: { group: "1B" } },
    { $group: { _id: "1B", promedio: { $avg: "$grade" } } },
  ]);

  console.log(result);
};
promedioDeEstudiantes1B();

const promedioDeEstudiantes1A = async () => {
  let result = await studentModel.aggregate([
    { $match: { group: "1A" } },
    { $group: { _id: "1A", promedio: { $avg: "$grade" } } },
  ]);

  console.log(result);
};
promedioDeEstudiantes1A();

const promedioGeneral = async () => {
  let result = await studentModel.aggregate([
    { $group: { _id: "students", promedio: { $avg: "$grade" } } },
  ]);
  console.log(result);
};
promedioGeneral();

const promedioHombres = async () => {
  let result = await studentModel.aggregate([
    { $match: { gender: "Male" } },
    { $group: { _id: "Male", promedio: { $avg: "$grade" } } },
  ]);
  console.log(result);
};
promedioHombres();

const promedioMujeres = async () => {
  let result = await studentModel.aggregate([
    { $match: { gender: "Female" } },
    { $group: { _id: "Mujeres", promedio: { $avg: "$grade" } } },
  ]);
  console.log(result);
};
promedioMujeres();
