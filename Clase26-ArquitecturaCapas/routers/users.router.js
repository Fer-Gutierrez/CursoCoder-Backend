import { Router } from "express";
import userController from "../controllers/user.controller.js";

/*
const router = Router();
router.get("/", userController.getUsers)
router.post("/", userController.createUser)
router.get("/:referencia", userController.getUser)
export default router;
*/

class UserRouter {
  constructor() {
    this.inicioUser = Router();
    this.inicioUser.get("/", userController.getUsers);
    this.inicioUser.post("/", userController.createUser);
    this.inicioUser.get("/:referencia", userController.getUser);

    //Forma de acceder a los metodos de la clase:
    // this.getRouter = this.getRouter.bind(this)
  }
  getRouter() {
    return this.inicioUser;
  }
}

export default new UserRouter();
