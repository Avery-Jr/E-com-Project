// TODO: Import express and your User model
import mongoose from "mongoose";
import express from "express";
import { Product } from "./product.js";
const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/products", async (req, res) => {
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { router as productRouter };

//curl -X POST http://localhost:3000/api/products \-H 'Content-Type: application/json' \-d '{"name": "ViGrace gloves", "description": "Very warm and well made", "price": 10.99, "image": "https://placehold.co/100"}'
