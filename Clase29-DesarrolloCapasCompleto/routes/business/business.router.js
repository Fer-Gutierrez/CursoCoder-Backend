import { Router } from "express";
import { BusinessController } from "../../controllers/businesses.controller.js";

const router = Router();

router.get("/", BusinessController.getBusinesses)
router.get("/:bid", BusinessController.getBusinessesById)
router.post("/", BusinessController.createBusinesses)
router.post("/:bid/products", BusinessController.addProductsBusinesses)

export  default router;