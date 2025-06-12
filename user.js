// TODO: Import mongoose
import mongoose from "mongoose";

// TODO: Create a user schema with the following fields:
const userModel = new mongoose.Schema({
  // - firstName (String, required)
  firstName: { type: String, required: true },
  // - lastName (String, required)
  lastName: { type: String, required: true },
  // - email (String, required, unique)
  email: { type: String, required: true, unique: true },
  // - password (String, required)
  password: { type: String, required: true },
  // - address:
  address: {
  street: { type: String, required: true },
  //   - apartment (String, optional)
  apartment: { type: String },
  //   - city (String, required)
  city: { type: String, required: true },
  //   - state (String, required)
  state: { type: String, required: true },
  //   - zipCode (String, required)
  zipCode: { type: String, required: true }
  }
});
// TODO: Create and export the User model
export const User = mongoose.model("User", userModel);

