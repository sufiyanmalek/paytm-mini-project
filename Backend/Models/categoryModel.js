import mongoose from "mongoose";

// Category Schema
const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

// Category Model
export const Category = mongoose.model("Category", CategorySchema);
