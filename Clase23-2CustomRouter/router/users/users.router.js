import RuteoApp from "../app.router.js";

export default class UserRouter extends RuteoApp {
  init() {
    this.get("/", ["PUBLIC"], (req, res) => {
      res.sendSuccess("hola chicos!!!");
    });

    this.get("/admin", ["ADMIN", "USER"], (req, res) => {
      res.sendSuccess(req.user);
    });

    this.get("/admin_form", ["ADMIN"], (req, res) => {
      res.sendSuccess(req.user);
    });
  }
}
