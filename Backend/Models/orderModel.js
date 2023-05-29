import mongoose from "mongoose";

// Order Schema
const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  merchant: { type: mongoose.Schema.Types.ObjectId, ref: "Merchant" },
  details: { type: String },
  paymentStatus: { type: String },
  deliveryStatus: { type: String },
});

// Order Schema
export const Order = mongoose.model("Order", OrderSchema);
