import { Router } from "express";
import toyController from "../controllers/toy.controller.js"

const router = Router();
router.get("/", toyController.getToys)
router.post("/", toyController.createToy)
router.get("/:referencia", toyController.getToy)

export default router;