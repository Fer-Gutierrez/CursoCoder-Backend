import mongoose from "mongoose";

const productCollection = "products";
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true, unique: true },
  stock: { type: Number, required: true },
});

const productModel = new mongoose.model(productCollection, productSchema);
export default productModel;
