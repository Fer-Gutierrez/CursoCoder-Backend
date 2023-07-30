import { Router } from "express";

const router = Router();

router.get("/register", (req, res) => {
  res.render("register", {
    title: "Resgister",
  });
});

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login",
  });
});

router.get("/", (req, res) => {
  res.render("profile", {
    title: "Home",
    user: req.session.user,
  });
});

router.get("/restore", (req, res) => {
  res.render("restore", {
    title: "Restore",
  });
});

export default router;
