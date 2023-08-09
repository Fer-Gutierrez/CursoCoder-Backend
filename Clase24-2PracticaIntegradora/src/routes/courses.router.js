import { Router } from "express";
import Courses from "../dao/dbManagers/courses.js";
import Users from "../dao/dbManagers/users.js";

const router = Router();
const coursesManager = new Courses();
const usersManager = new Users();

router.get("/", async (req, res) => {
  let users = await usersManager.getAll();
  if (!users)
    return res
      .status(500)
      .send({
        status: "error",
        error: "Couldn't get users due to internal error",
      });
  res.send({ status: "success", payload: users });
});

router.post("/", async (req, res) => {
  let { first_name, last_name, dni, email, birthDate, gender } = req.body;
  if (!first_name || !last_name || !dni || !email || !birthDate)
    return res
      .status(400)
      .send({ status: "error", error: "Incomplete values" });
  let result = await usersManager.saveUser({
    first_name,
    last_name,
    email,
    dni,
    birthDate,
    gender,
  });
  if (!result)
    return res.status(500).send({ status: "success", payload: result });
  res.send({ status: "success", payload: result });
});

router.post("/:uid/courses/:cid", async (req, res) => {
  const { uid, cid } = req.params;
  const course = await coursesManager.getById(cid);
  if (!course)
    return res.status(404).send({ status: "error", error: "course not found" });
  const user = await usersManager.getBy({ _id: uid });
  if (!user)
    return res.status(404).send({ status: "error", error: "user not found" });

  let coursExits = user.courses.some((c) => c._id.toString() === cid);
  if (coursExits)
    return res
      .status(400)
      .send({ status: "error", error: "user is ready course register" });

  user.courses.push(course._id);
  course.students.push(user._id);

  await usersManager.updateUser(uid, user);
  await coursesManager.updateCourse(cid, course);
  res.send({ status: "sucess", message: "User add course" });
});

export default router;
