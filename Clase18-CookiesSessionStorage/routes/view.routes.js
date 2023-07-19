import { Router } from "express";
import cookieParser from "cookie-parser";

const router = Router();

//usamos el cookieParser como meddleware:
router.use(cookieParser("CoderS3cR3tC0D3"));
const nombreCookie = "MiPrimeraCookie";

router.get("/", async (req, res) => {
  res.send("Vamos a empezar a trabajar con Cookies");
});

router.get("/setCookie", async (req, res) => {
  res
    .cookie(nombreCookie, "Esta es una cookie muy poderosa", {
      maxAge: 20000,
      signed: true,
    })
    .send("Cookie");
});

router.get("/getCookies", async (req, res) => {
  res.send(req.signedCookies);
});

router.get("/getMiPrimeraCookie", async (req, res) => {
  // res.send(req.cookies);
  res.send(req.signedCookies.MiPrimeraCookie);
});

router.get("/clearCookie", async (req, res) => {
  req.clearCookie(nombreCookie);
  res.send(`Se eliminó la cookie MiPrimeraCookie`);
});

//INICIAMOS LA SESION
router.get("/session", async (req, res) => {
  console.log(req.session);
  //Si al conectarse la sesion ya existe, entonces aumentamos el contador
  if (req.session.counter) {
    req.session.counter++;
    res.send(`Se ah visitado el sitino ${req.session.counter} veces`);
  } else {
    req.session.counter = 1;
    res.send(`Bienvenido, es la primera vez que visita este sitio`);
  }
  //Si no existe lo inicializamos
});

//CERRAMOS LA SESION
router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (!err) res.send("Se cerró la sesion!");
    else
      res.send({
        status: "Logout-error",
        message: "No fue posible cerrar la sesion",
      });
  });
});

//LOGUIN
router.get("/login", async (req, res) => {
  const { username, password } = req.query;
  if (username !== "pepe" || password !== "pepepass") {
    return res.status(404).send("Login Failed");
  } else {
    req.session.user = username;
    req.session.admin = false;
    res.send("Login Successfull!");
  }
});

//Middelware para autenticacion:
function auth(req, res, next) {
  console.log(req.session.admin);
  if (req.session.user === "pepe" && req.session.admin) {
    return next();
  } else {
    return res
      .status(403)
      .send("Usuario no autorizado para ingresar a este curso");
  }
}

router.get("/private", async (req, res) => {
  //codigo
});

export default router;
