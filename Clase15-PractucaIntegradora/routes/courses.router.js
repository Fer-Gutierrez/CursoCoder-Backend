import { Router } from "express";
import Courses from "../dao/dbManagers/courses.js";

const router = Router();
const courseManager = new Courses();

router.get("/", async (req, res) => {
  let courses = await courseManager.getAll();
  res.send({ status: "Success", payload: courses });
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  let newCourse = {
    title,
    description,
    teacher: "Sin asignar",
    students: [],
  };
  const result = await courseManager.saveCourse(newCourse);
  if (Object.keys(result).some((k) => (k = "errors")))
    return res.status(400).send({ status: "error", error: result });
  res.send({ status: "Success", payload: result });
});

export default router;
