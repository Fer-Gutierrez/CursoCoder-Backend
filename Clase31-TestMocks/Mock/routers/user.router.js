import { Router } from "express";
import { generateUsers } from "../utils/mocks.utils.js";

const router = Router();

router.get("/", (req, res) => {
  const total = +req.query.total || 500;
  const users = Array.from({ length: total }, () => generateUsers());
  res.json({ success: true, payload: users });
});

export default router;
