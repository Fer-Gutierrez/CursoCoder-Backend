import { coursesService } from "../repository/services.js";

const getCourses = async (req, res) => {
  let courses = await coursesService.getAllCourses();
  res.send({ status: "success", payload: courses });
};

const createCouse = async (req, res) => {
  const { title, description } = req.body;
  let newCourse = {
    title,
    description,
    users: [],
    teacher: "Sin Asignar",
  };

  let result = await coursesService.createCourse();
  res.send({ status: "success", payload: result });
};

export default { getCourses, createCouse };
