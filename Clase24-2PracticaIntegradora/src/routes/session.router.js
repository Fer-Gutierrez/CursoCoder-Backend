import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = Router();
router.post(
  "/register",
  passport.authenticate("register", {
    passReqToCallback: true,
    session: false,
    failureRedirect: "/api/session/failedRegister",
    failureMessage: true,
  }),
  (req, res) => {
    res.send({
      status: "success",
      message: "user registered",
      payload: req.user._id,
    });
  }
);

router.post(
  "/login",
  passport.authenticate("login", {
    passReqToCallback: true,
    session: false,
    failureRedirect: "/api/session/failedLogin",
    failureMessage: true,
  }),
  (req, res) => {
    const serialUser = {
      id: req.user._id,
      name: `${req.user.first_name} ${req.user.last_name}`,
      role: req.user.role,
      email: req.user.email,
    };

    const token = jwt.sign(serialUser, "codigosecreto", { expiresIn: "1h" });

    res
      .cookie("cookie", token, { maxAge: 36000000 })
      .send({ status: "success", payload: serialUser });
  }
);

router.get("/failedLogin", (req, res) => {
  console.log(req.message);
  res.send({ status: "error", error: req.message });
});

router.get("/failedRegister", (req, res) => {
  console.log(req.message);
  res.send({ status: "error", error: req.message });
});

export default router;
