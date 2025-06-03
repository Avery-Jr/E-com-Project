// TODO: Import express and your User model
import mongoose from "mongoose";
import express from "express";
import { Product } from "./product";

const router = express.Router();

router.post("/api/products", async (req, res) => {
  const user = new userModle(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
