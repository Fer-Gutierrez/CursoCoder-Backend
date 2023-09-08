import express from "express";
import compression from "express-compression";

const PORT = 8080;
const app = express();

const suma = (cadena, tiempo) => {
  let result = "";
  while (tiempo > 1) {
    if (tiempo & 1) result += cadena;
    (tiempo >>= 1), (cadena += cadena);
  }
  return result + cadena;
};

//Sin compression.
app.get("/", (req, res) => {
  res.send(
    suma("Hola, estamos probando la compresion ridiculamente grande", "6e4")
  );
});

//En lineas generales se utiliza un compresor a nivel aplicacion
//app.use(compression());

//Utilizando GZIP
app.get("/gzip", compression(), (req, res) => {
  res.send(
    suma("Hola, estamos probando la compresion ridiculamente grande", "6e4")
  );
});

//UTILIZANDO BROTLI
app.get(
  "/brotli",
  compression({ brotli: { enabled: true, zlib: {} } }),
  (req, res) => {
    res.send(
      suma("Hola, estamos probando la compresion ridiculamente grande", "6e4")
    );
  }
);

const server = app.listen(PORT, () => console.log("Server Arriba"));
