import { Router } from "express";
import { ContractController } from "../../controllers/contacts.controller.js";

const router = Router();

router.get("/", ContractController.getAllContracts);
router.post("/", ContractController.saveContact);

export default router;
