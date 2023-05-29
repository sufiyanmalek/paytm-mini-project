// User model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String },
});

const User = mongoose.model("User", UserSchema);

// ContactList model
const ContactListSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  contacts: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      name: { type: String },
      email: { type: String },
      phone: { type: String },
    },
  ],
});

const ContactList = mongoose.model("ContactList", ContactListSchema);

// Wallet model
const WalletSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  balance: { type: Number, default: 0 },
  transactionHistory: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
  ],
});

const Wallet = mongoose.model("Wallet", WalletSchema);

// Transaction model
const TransactionSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["debit", "credit"], required: true },
  timestamp: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

// Category model
const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const Category = mongoose.model("Category", CategorySchema);

// Product model
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const Product = mongoose.model("Product", ProductSchema);

// Order model
const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  merchant: { type: mongoose.Schema.Types.ObjectId, ref: "Merchant" },
  details: { type: String },
  paymentStatus: { type: String },
  deliveryStatus: { type: String },
});

const Order = mongoose.model("Order", OrderSchema);
