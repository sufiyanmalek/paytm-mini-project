import mongoose from "mongoose";

// Transaction Schema
const TransactionSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["debit", "credit"], required: true },
  timestamp: { type: Date, default: Date.now },
});

// Transaction Model
export const Transaction = mongoose.model("Transaction", TransactionSchema);
