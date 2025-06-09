// TODO: Import required modules
// 1. Import express
import express from "express";
// 2. Import mongoose
import mongoose from "mongoose";
// 3. Import dotenv to load environment variables
import * as dotenv from "dotenv";
// TODO: Load environment variables
import { productRouter } from "./productsRoutes.js";
import {userRouter } from "./usersRoutes.js";
// Hint: Use dotenv.config()
dotenv.config();

// TODO: Initialize Express app
// Hint: const app = express();
const app = express();
const port = 3000;

// TODO: Set up middleware
// 1. Express JSON parser
// 2. Serve static files from the 'public' directory
app.use(express.json());
app.use("/api", productRouter);
app.use("/api", userRouter);
app.use(express.static("public"));
//app.use(express.static("public"));
//console.log("db", process.env.MONGODB_URI);

// TODO: Connect to MongoDB
// Hint: Use mongoose.connect with your MONGODB_URI
// Make sure to handle the connection promise with .then() and .catch()
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
  
// TODO: Define routes
// For now, just create a simple root route that responds with a welcome message


// TODO: Start the server
// Use the PORT from your environment variables or default to 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  console.log("Stopping server...");
  server.close(() => {
    console.log("Server stopped. Port released.");
    process.exit(0);
  });
});

