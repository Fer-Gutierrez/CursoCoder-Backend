import { Router } from "express";
import toyController from "../controllers/toy.controller.js";
/*
const router = Router();
router.get("/", toyController.getToys)
router.post("/", toyController.createToy)
router.get("/:referencia", toyController.getToy)
export default router;
*/

class ToyRouter {
  constructor() {
    this.inicioToy = Router();
    this.inicioToy.get("/", toyController.getToys);
    this.inicioToy.post("/", toyController.createToy);
    this.inicioToy.get("/:referencia", toyController.getToy);

    //Forma de acceder a los metodos de la clase:
    // this.getRouter = this.getRouter.bind(this)
  }
  getRouter() {
    return this.inicioToy;
  }
}

export default ToyRouter();
