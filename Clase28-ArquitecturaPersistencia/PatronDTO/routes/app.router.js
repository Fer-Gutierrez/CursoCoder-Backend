import { Router } from "express";
import contactRouter from "./contacts/contacts.router.js"

const router = Router();

router.use("/contacts", contactRouter);

export default router;
