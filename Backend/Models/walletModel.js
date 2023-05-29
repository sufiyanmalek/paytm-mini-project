import mongoose from "mongoose";

// Wallet Schema
const WalletSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  balance: { type: Number, default: 0 },
  transactionHistory: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
  ],
});

// Wallet Model
export const Wallet = mongoose.model("Wallet", WalletSchema);
