//fs-con Promise:
const fs = require("fs");
const opAsync = async () => {
  //Escribimos el archivo
  await fs.promises.writeFile(
    "./Clase4-Manejo-Archivos/archivo-con-promise.txt",
    "Hola estamos creado este archivo desde promesas"
  );

  //Leemos el archivo
  let resultado = await fs.promises.readFile(
    "./Clase4-Manejo-Archivos/archivo-con-promise.txt",
    "utf-8"
  );
  console.log(resultado);

  //Editamos el archivo
  await fs.promises.appendFile(
    "./Clase4-Manejo-Archivos/archivo-con-promise.txt",
    "Mas informacion en promesas"
  );

  //Leemos el archivo
  console.log(
    await fs.promises.readFile(
      "./Clase4-Manejo-Archivos/archivo-con-promise.txt",
      "utf-8"
    )
  );

  //Eliminamos el archivo
  await fs.promises.unlink("./Clase4-Manejo-Archivos/archivo-con-promise.txt");
};

opAsync();
