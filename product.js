// TODO: Import mongoose
import mongoose from "mongoose";


// TODO: Create a user schema with the following fields:
const userModel = new mongoose.Schema({
 name: {type: String, required: true},
price: {type: Number, required: true},
 description: {type: String, required: true},
 image: {type: String, required: true}
});
// TODO: Create and export the User model
export const User = mongoose.model("user", userModel);
