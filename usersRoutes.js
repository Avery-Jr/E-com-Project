// TODO: Import express and your User model
import mongoose from "mongoose";
import express from "express";
import { User } from "./user";
// TODO: Create an express router
const router = express.Router();
// TODO: Create POST route for user registration (/api/users/register)
router.post("/api/users/register", async (req, res) => {
  const user = new userModle(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// 1. Check if a user with the given email already exists
// 2. If not, create a new user with the request body data
// 3. Return the new user (without the password) with status 201

// TODO: Create POST route for user login (/api/users/login)
router.post("/api/users/login", async (req, res) => {
  const user = new userModle(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// 1. Find the user by email
// 2. Check if the password matches
// 3. If authentication successful, return user info (without password)
// 4. If authentication fails, return appropriate error message

// TODO: Export the router
module.exports = router;
