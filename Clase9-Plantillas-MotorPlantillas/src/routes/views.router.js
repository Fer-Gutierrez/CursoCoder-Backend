import express from "express";

const router = express.Router();

let food = [
  { name: "Pera", price: 1500 },
  { name: "Manzana", price: 2000 },
  { name: "Limon", price: 900 },
  { name: "Banana", price: 1800 },
];

router.get("/", (req, res) => {
  let usuario = {
    name: "Fernando",
    rol: "user", //cambiar user o admin.
  };
  res.render("index", {
    user: usuario,
    title: "Hola",
    style: 'index.css',
    isAdmin: usuario.rol === "admin",
    food,
  });
});

export default router;
