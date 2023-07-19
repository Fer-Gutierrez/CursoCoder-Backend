import userModel from "../models/users.js";

export default class Users {
  constructor() {
    console.log("Trabajando con usuarios, DBMongo");
  }

  getAll = async () => {
    let users = await userModel.find().lean();
    return users;
  };

  saveUser = async (user) => {
    try {
      let result = await userModel.create(user);
      return result;
    } catch (error) {
      return error;
    }
  };
}
