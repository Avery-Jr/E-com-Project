import mongoose from "mongoose";


// TODO: Create a user schema with the following fields:
const userModel = new mongoose.Schema({
 userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
 //items: {type: Array, of:},
 productId: {type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
 quantity: {type: Number, default: 1, min: 1},
 name: {type: String},
 price: {type: Number},
 image: {type: String},
 totalPrice: {type: Number, default: 0}
});
// TODO: Create and export the User model
export const User = mongoose.model("user", userModel);