import mongoose, { Schema } from "mongoose";

const userCollection = "users";
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {type: String, required:true, unique: true},
  rol:{type: String},
  orders:{type: Schema.Types.ObjectId, ref:  "orders"}
});

const userModel = new mongoose.model(userCollection, userSchema)
export default userModel;