import courseModel from "../models/courses.js";

export default class Courses {
  constructor() {
    console.log("Estamos trabajando con BDMongo");
  }

  getAll = async () => {
    let courses = await courseModel.find().lean();
    return courses;
  };

  saveCourse = async (course) => {
    try {
      let result = await courseModel.create(course);
      return result;
    } catch (error) {
      return error;
    }
  };
}
