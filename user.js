// TODO: Import mongoose
import mongoose from "mongoose";
const { Schema } = mongoose;
// TODO: Create a user schema with the following fields:
const userSchema = new Schema({
  // - firstName (String, required)
  firstName: { type: String },
  // - lastName (String, required)
  lastName: { type: String },
  // - email (String, required, unique)
  email: { type: String },
  // - password (String, required)
  password: { type: String },
  // - address:

  //   - street (String, required)
  street: { type: String },
  //   - apartment (String, optional)
  apartment: { type: String },
  //   - city (String, required)
  city: { type: String },
  //   - state (String, required)
  state: { type: String },
  //   - zipCode (String, required)
  zipCode: { type: String },
});
// TODO: Create and export the User model
