import { Router } from "express";
import userModel from "../models/user.model.js";

const router = Router();

router.get("/users", async (req, res) => {
  const { page = 1 } = req.query;
  const { docs, hasPrevPage, hasNextPage, nextPage, prevPage } =
    await userModel.paginate({}, { limit: 10, page, lean: true });

  const users = docs;

  res.render("users", {
    users,
    title: "users-paginate",
    hasPrevPage,
    hasNextPage,
    nextPage,
    prevPage,
  });
});

export default router;
