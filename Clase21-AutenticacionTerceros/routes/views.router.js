import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("home", {
    title: "Home"
  });
});

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login",
  });
});

router.get("/register", (req, res) => {
  res.render("register", {
    title: "Resgister",
  });
});

router.get("/restore", (req, res) => {
  res.render("restore", {
    title: "Restore",
  });
});

export default router;
