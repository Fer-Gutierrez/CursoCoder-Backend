import RuteoApp from "../app.router.js";
import jwt from "jsonwebtoken";

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

    this.post("/login", ["PUBLIC"], (req, res) => {
      let user = {
        email: req.body.email,
        role: "USER",
      };
      let token = jwt.sign(user, "SecretWordTokenJWT");
      res.sendSuccess({ user, token });
    });
  }
}
