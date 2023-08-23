import mongoose from "mongoose";
import CONFIG from "../../../config/config.js";

export class MongoManager {
  static #instance;
  constructor() {
    mongoose
      .connect(
        "mongodb+srv://fgutierrez:35750989@bdclasebackend.7lgy2hh.mongodb.net/?retryWrites=true&w=majority",
        {
          dbName: "Arquitectura-Persistencia",
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(console.log("BD Connected"))
      .catch(console.log("Error to connect BD"));
  }

  static start() {
    if (!this.#instance) {
      this.#instance = new MongoManager();
    }

    return this.#instance;
  }
}
