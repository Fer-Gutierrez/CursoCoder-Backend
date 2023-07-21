import mongoose from "mongoose";

const userCollecttion = "users";
const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  age: Number,
  password: String,
});

const userModel = mongoose.model(userCollecttion, userSchema);
export default userModel;
