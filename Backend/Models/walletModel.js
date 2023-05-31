import mongoose from "mongoose";

// Wallet Schema
const WalletSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userPhone: { type: String, required: true },
  balance: { type: Number, default: 0 },
  transactionHistory: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
  ],
});

// Wallet Model
export const Wallet = mongoose.model("Wallet", WalletSchema);
