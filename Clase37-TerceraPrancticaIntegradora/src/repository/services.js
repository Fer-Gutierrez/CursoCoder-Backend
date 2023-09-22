import CoursesRepository from "./coursesRespository.js";
import UsersRepository from "./usersRepository.js";
import Users from "../dao/dbManagers/users.js";
import Courses from "../dao/dbManagers/courses.js";

const usersDao = new Users();
const coursesDao = new Courses();

export const usersService = new UsersRepository(usersDao);
export const coursesService = new CoursesRepository(coursesDao);
