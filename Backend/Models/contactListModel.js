import mongoose from "mongoose";

// ContactList Schema
const ContactListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userPhone: { type: String },
  contacts: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      name: { type: String },
      email: { type: String },
      phone: { type: String },
    },
  ],
});

// ContactList Model
export const ContactList = mongoose.model("ContactList", ContactListSchema);
