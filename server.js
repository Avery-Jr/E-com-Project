// TODO: Import required modules
// 1. Import express
const express = require("express");
express.static(root, [options])
// 2. Import mongoose
mongoose.connect("mongodb://127.0.0.1:27017/myapp");
// 3. Import dotenv to load environment variables

// TODO: Load environment variables
// Hint: Use dotenv.config()

// TODO: Initialize Express app
// Hint: const app = express();

// TODO: Set up middleware
// 1. Express JSON parser
// 2. Serve static files from the 'public' directory

// TODO: Connect to MongoDB
// Hint: Use mongoose.connect with your MONGODB_URI
// Make sure to handle the connection promise with .then() and .catch()

// TODO: Define routes
// For now, just create a simple root route that responds with a welcome message
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// TODO: Start the server
// Use the PORT from your environment variables or default to 3000
