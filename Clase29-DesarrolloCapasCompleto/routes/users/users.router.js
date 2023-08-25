import { Router } from "express";
import { UserController } from "../../controllers/users.controller.js";

const router = Router();

router.get("/", UserController.getUsers)
router.get("/:oid", UserController.getUsersById)
router.post("/", UserController.createUsers)


export  default router;