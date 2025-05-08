// TODO: Import mongoose
import mongoose from "mongoose";


// TODO: Create a user schema with the following fields:
const userModel = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true}
});
// TODO: Create and export the User model
export const User = mongoose.model("user", userModel);