//Es una representacion de una entidad
//Representamos objetos
class Persona {
  //Constructor
  constructor(nombre, apellido, dni, altura, edad, colorCabello) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.edad = edad;
    this.altura = altura;
    this.colorCabello = colorCabello;
  }

  //Variables estáticas:
  static especie = "humano";

  //funciones o metodos:
  saludar = () => {
    console.log(
      `hola! me llamo ${this.nombre} soy ${Persona.especie} y tengo el cabello de color ${this.colorCabello}`
    );
  };

  getespecie = () => {
    return Persona.especie;
  };
}

let persona1 = new Persona("Rocky", "Balboa", 35750989, 1.8, 31, "negro");
persona1.saludar();
let especiaPersona1 = persona1.getespecie();
console.log(especiaPersona1);
