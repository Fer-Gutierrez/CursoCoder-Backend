//fs SINCRONO:
/************************************/
const { error } = require("console");
const fs = require("fs");
//Crear un archivo
fs.writeFileSync(
  "./Clase4-Manejo-Archivos/primer-archivo-sinc.txt",
  "hola coder, este es mi primer archivo sincrono con file system"
);

//Validar este archivo
if (fs.existsSync("./Clase4-Manejo-Archivos/primer-archivo-sinc.txt")) {
  console.log("El archivo existe");
  //Editar el archivo:
  fs.appendFileSync(
    "./Clase4-Manejo-Archivos/primer-archivo-sinc.txt",
    "Nuevo contenido"
  );

  //Leer un archivo:
  let contenido = fs.readFileSync(
    "./Clase4-Manejo-Archivos/primer-archivo-sinc.txt",
    "utf-8"
  );
  console.log(`El contenido del archivo es: ${contenido}`);

  //Borrar el archivo
  fs.unlinkSync("./Clase4-Manejo-Archivos/primer-archivo-sinc.txt");
} else {
  console.log("El archivo no existe");
}

//fs con CALLBACKS:
/************************************/
//recibe un ultimo parametro que es un error --> podemos manejar el resultado si sale bien o no la lectura o escritura.
//readFile recibe dos parametros (errpr, resultado)
//cuidado con los callbackhell
fs.writeFile(
  "./Clase4-Manejo-Archivos/primer-archivo-callback.txt",
  "hola coder, este es mi primer archivo con callback con file system",
  (error) => {
    if (error) console.log("Error al escribir el archivo");

    //En caso que se haya creado sin errores, leemos el archivo
    fs.readFile(
      "./Clase4-Manejo-Archivos/primer-archivo-callback.txt",
      "utf-8",
      (error, resultado) => {
        if (error) console.log("Error al leer el archivo");
        console.log(resultado);

        fs.appendFile(
          "./Clase4-Manejo-Archivos/primer-archivo-callback.txt",
          "Mas contenido de callback",
          (error) => {
            error && console.log("error al actualizar");

            fs.readFile(
              "./Clase4-Manejo-Archivos/primer-archivo-callback.txt",
              "utf-8",
              (error, resultado2) => {
                if (error) console.log("Error al leer el archivo");
                console.log(resultado2);

                fs.unlink(
                  "./Clase4-Manejo-Archivos/primer-archivo-callback.txt",
                  (error) => {
                    error && console.log("Error al borrar");
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);


