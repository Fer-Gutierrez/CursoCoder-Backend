import studentModel from "./models/student.model.js";
import courseModel from "./models/course.model.js";
import mongoose, { mongo } from "mongoose";

const enviroment = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(
    "mongodb+srv://fgutierrez:35750989@bdclasebackend.7lgy2hh.mongodb.net/?retryWrites=true&w=majority",
    { dbName: "PopulateTest" }
  );

  // await studentModel.create({
  //   first_name: "Fernando",
  //   last_name: "Gutierrez",
  //   email: "fgutierrez@gmail.com",
  //   gender: "Female",
  // });

  // await courseModel.create({
  //   title: "Backend",
  //   description: "Logica de apps",
  //   difficulty: 5,
  //   topic: ["Middleware", "DataBase", "Motores", "Seguridad"],
  // });

  // 64ade80c7ec48b619e261eba --> Course
  // 64ade68808d893231d583fc8 --> Student

  let student = await studentModel.findOne({ _id: "64ade68808d893231d583fc8" });
  console.log(student);
  student.courses.push({ course: "64ade80c7ec48b619e261eba" });
  let result = await studentModel.updateOne(
    { _id: "64ade68808d893231d583fc8" },
    student
  );
  console.log(result);

  const stundentFernando = await studentModel
    .findOne({ _id: "64ade68808d893231d583fc8" })
    .populate("courses.course");
  console.log(JSON.stringify(stundentFernando, null, "\t"));
};

enviroment();
