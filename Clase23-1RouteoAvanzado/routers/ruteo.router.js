import { Router } from "express";
const router = Router();

//APLICAR UN MIDDLEWARE PARA RECIBIR PARAMETROS CON DETERMINADA CONDICION.
const onlyLowerCase = (req, res, next) => {
  const { word } = req.params;
  if (/^[a-z]+$/.test(word)) {
    next();
  } else {
    res
      .status(400)
      .send("El parámetro 'word' solo debe contener letras minúsculas.");
  }
};

router.get("/middleware/:word", onlyLowerCase, async (req, res) => {
  res.send(req.params.word);
});

//PARA QUE ACEPTEN TILDES:
router.get(
  "/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)",
  async (req, res) => {
    res.send(req.params.word);
  }
);

//RECIBIR MAS DE UN PARAMETRO:
router.get(
  "/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)/:language([a-z]+)",
  async (req, res) => {
    res.send(`${req.params.word} con el lenguaje ${req.params.language}`);
  }
);

router.get("/:pob([a-zA-Z]+)", async (req, res) => {
  res.send(req.params.pob);
});

//ROUTER PARAM:
const palabras = ["Hola", "Chao", "Aloha"];
router.param("word", async (req, res, next, word) => {
  const buscadorPalabra = palabras.find((p) => p === req.params.word);
  if (!buscadorPalabra) return res.status(404).send("URL no valida");
  req.word = buscadorPalabra;
  next();
});

router.get(
  "/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)",
  async (req, res) => {
    res.send(req.word);
  }
);

//RESPUESTA POR DEFAULT, Si no puede entrar en gets anteriores, entre aen este que tiene el *
//Este router con el asterisco debe colocarse al final para que previamente valide entrar en los correctos.
router.get("*", async (req, res) => {
  res.status(404).send("URL no valida");
});

export default router;
