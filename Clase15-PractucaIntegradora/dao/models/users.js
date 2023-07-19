import mongoose from "mongoose";

const userCollection = "users";
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["M", "F"],
  },
  courses: {
    type: Array,
    default: [],
  },
  dni: Number,
});

const userModel = mongoose.model(userCollection, userSchema);
export default userModel;
