import { Router } from "express";
import { OrderController } from "../../controllers/orders.controller.js";

const router = Router();

router.get("/", OrderController.getOrders)
router.get("/:oid", OrderController.getOrdersById)
router.post("/", OrderController.createOrders)
router.post("/:oid", OrderController.resolveOrders)

export  default router;