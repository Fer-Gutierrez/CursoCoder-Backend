import mongoose, { Schema } from "mongoose";

const orderCollection = "orders";
const orderSchema = new mongoose.Schema({
  order_numbber: { type: String, required: true },
  business: { type: Schema.Types.ObjectId, ref: "bussinesses" },
  user: { type: Schema.Types.ObjectId, ref: "users" },
  status: {
    type: String,
    enum: ["pending", "rejected", "completed"],
    default: "penging",
  },
  products: [
    {
      reference: {
        type: Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
      quantity: { type: Number, required: true, default: 1 },
      price: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, default: 0 },
});

const orderModel = new mongoose.model(orderCollection, orderSchema);
export default orderModel;
