//Ejecutar con: node ./patronSingleton.js

import mongoose from "mongoose";

export default class mongoSingleton {
  static #instance;

  constructor() {
    mongoose.connect(
      "mongodb+srv://fgutierrez:35750989@bdclasebackend.7lgy2hh.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "Arquitectura-Servidor",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Se conectó un puerto.");
  }

  static getInstance() {
    if (this.#instance) {
      console.log("ya existe una conexion establecida");
      return this.#instance;
    }
    this.#instance = new mongoSingleton();
    console.log("se creó una conexion");
    return this.#instance;
  }
}

console.log("con1");
const conexion1 = new mongoSingleton();
console.log("con2");
const conexion2 = new mongoSingleton();
console.log("con3");
const conexion3 = mongoSingleton.getInstance();
console.log("con4");
const conexion4 = mongoSingleton.getInstance();

console.log(conexion3 === conexion4);
