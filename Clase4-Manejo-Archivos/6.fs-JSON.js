//fs usando JSON
const fs = require("fs");

const trabajarJson = async () => {
  //Leemos el archivo JSON
  const archivo = await fs.promises.readFile("./package.json", "utf-8");
  //Convertimos el archivo Json a Objeto
  const objeto = JSON.parse(archivo);

  const archivoCompleto = {
    archivo,
    objeto,
  };

  console.log(archivoCompleto);

  //Escribimos un archivo JSON desde un Objeto.
  await fs.promises.writeFile(
    "./Clase4-Manejo-Archivos/informacion.json",
    JSON.stringify(archivoCompleto, null, "\t")
  );
};

//pasamos un objeto a JSON con stingify
trabajarJson();
