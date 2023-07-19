import mongoose from "mongoose";

const userCollection = "usuarios";
const userScheme = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

export const userModel = mongoose.model(userCollection, userScheme);
