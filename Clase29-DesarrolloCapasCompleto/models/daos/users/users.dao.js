import userModel from "../../schemas/users.schema.js";

export class UserDAO {
  async getUsers() {
    const users = await userModel.find().lean();
    return users;
  }

  async getUserById(id) {
    const user = await userModel.findOne({ _id: id });
    return user;
  }

  async createUser(payload) {
    const user = await userModel.create(payload);
    return user;
  }

  async updateUser(id, newUser) {
    const user = await userModel.updateOne({ _id: id }, { $set: newUser });
    return user;
  }
}
