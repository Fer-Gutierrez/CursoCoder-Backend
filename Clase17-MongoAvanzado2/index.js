import mongoose from "mongoose";
import orderModel from "./models/order.model.js";

const enviroment = async () => {
  await mongoose.connect(
    "mongodb+srv://fgutierrez:35750989@bdclasebackend.7lgy2hh.mongodb.net/?retryWrites=true&w=majority",
    { dbName: "PizzeriaTest" }
  );
};
enviroment();

const agregadoInformacion = async () => {
  let result = await orderModel.insertMany([
    {
      name: "Rucula",
      size: "small",
      price: 1200,
      quantity: 1,
      date: new Date(),
    },
    {
      name: "Napolitana",
      size: "medium",
      price: 2200,
      quantity: 4,
      date: new Date(),
    },
    {
      name: "Especial",
      size: "medium",
      price: 3200,
      quantity: 21,
      date: new Date(),
    },
    {
      name: "Cuatro Quesos",
      size: "large",
      price: 1000,
      quantity: 15,
      date: new Date(),
    },
    {
      name: "Peperoni",
      size: "small",
      price: 1700,
      quantity: 8,
      date: new Date(),
    },
  ]);
  console.log(result);
};
// agregadoInformacion();

const tareaUno = async () => {
  let orders = await orderModel.aggregate([
    //filtrando por tamaño = medium
    { $match: { size: "medium" } },
    //Agrupar por sabores
    { $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } } },
  ]);
  console.log(orders);
};
tareaUno();

const tareaDos = async () => {
  let orders = await orderModel.aggregate([
    //filtrando por tamaño = medium
    { $match: { size: "medium" } },
    //Agrupar por sabores
    { $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } } },
    //Ordenar de mayor a menor
    { $sort: { quantity: -1 } },
    //Agrupacion con el nuevo documento
    { $group: { _id: 1, orders: { $push: "$$ROOT" } } },
    //Nuestro stage nuevo:
    { $project: { _id: 0, orders: "$orders" } },

    //Merge:
    { $merge: { into: "reports" } },
  ]);
  console.log(orders);
};
tareaDos();
