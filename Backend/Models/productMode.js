import mongoose from "mongoose";

// Product Schema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

// Product Model
export const Product = mongoose.model("Product", ProductSchema);
