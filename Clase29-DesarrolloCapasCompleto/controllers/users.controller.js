export class UserController {
  constructor() {}

  static async getUsers(req, res, next) {
    try {
      res.send("OK");
    } catch (error) {
      next(error);
    }
  }

  static async getUsersById(req, res, next) {
    try {
      res.send("OK");
    } catch (error) {
      next(error);
    }
  }

  static async createUsers(req, res, next) {
    try {
      res.send("OK");
    } catch (error) {
      next(error);
    }
  }
}
