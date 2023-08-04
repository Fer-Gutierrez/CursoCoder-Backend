import { Router } from "express";
import jwt from "jsonwebtoken";

let user = {
  name: "",
  age: "",
  role: "",
};

export default class RuteoApp {
  constructor() {
    this.router = Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }

  init() {}

  // get(path, ...callbacks) {
  //   this.router.get(path, this.appyCallbacks(callbacks));
  // }

  // post(path, ...callbacks) {
  //   this.router.get(path, this.appyCallbacks(callbacks));
  // }

  // put(path, ...callbacks) {
  //   this.router.get(path, this.appyCallbacks(callbacks));
  // }

  appyCallbacks(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        callback.apply(this, params);
      } catch (error) {
        console.log(error);
        params[1].status(500).send(error);
      }
    });
  }

  generateCustomRespopnses = (req, res, next) => {
    console.log(req.header.authorization);
    res.sendSuccess = (payload, status = 200) =>
      res.status(status).send({ status: "success", payload });

    res.sendError = (error, status = 500) =>
      res.status(status).send({ status: "error", error });
    next();
  };

  validadorRoles = (roles) => {
    return async (req, res, next) => {
      if (roles[0] === "PUBLIC") {
        return next();
      }

      const validar = req.headers.authorization;

      if (!validar) {
        return res.sendError("No autorizado", 401);
      }

      const token = validar.split(" ")[1];
      const user = jwt.verify(token, "SecretWordTokenJWT");

      if (!roles.includes(user.role.toUpperCase())) {
        return res.sendError("Acceso Denegado", 403);
      }
      req.user = user;
      next();
    };
  };

  get(path, roles, ...callbacks) {
    this.router.get(
      path,
      this.generateCustomRespopnses,
      this.validadorRoles(roles),
      this.appyCallbacks(callbacks)
    );
  }

  put(path, roles, ...callbacks) {
    this.router.put(
      path,
      this.validadorRoles(roles),
      this.generateCustomRespopnses,
      this.appyCallbacks(callbacks)
    );
  }

  post(path, roles, ...callbacks) {
    this.router.post(
      path,
      this.validadorRoles(roles),
      this.generateCustomRespopnses,
      this.appyCallbacks(callbacks)
    );
  }
}
