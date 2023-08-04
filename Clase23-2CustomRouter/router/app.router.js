import { Router } from "express";
import jwt from "jsonwebtoken";

const user = {
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

  get(path, ...callbacks) {
    this.router.get(path, this.appyCallbacks(callbacks));
  }

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

      const validar = req.header.authorization;
      if (!validar) {
        return res.sendError("No autorizado", 401);
      }

      const token = validar.split(" ")[1];
      const user = jwt.verify(token, SECRET_ID);

      if (!roles.includes(`${user.role}`.toUpperCase())) {
        return res.sendError("Accesso Denegado", 403);
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
    this.router.get(
      path,
      this.generateCustomRespopnses,
      this.validadorRoles(roles),
      this.appyCallbacks(callbacks)
    );
  }

  post(path, roles, ...callbacks) {
    this.router.get(
      path,
      this.generateCustomRespopnses,
      this.validadorRoles(roles),
      this.appyCallbacks(callbacks)
    );
  }
}
