import mongoose from "mongoose";

const userCollection = "users";
const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const userModel = new mongoose.model(userCollection, userSchema);
export default userModel;
