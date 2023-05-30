import express from "express";
import { connectToDB } from "./config/connectDB.js";
import { register } from "./Routes/registerUser.js";
import { login } from "./Routes/loginUser.js";
import { contactList } from "./Routes/contactList.js";

// express app
const app = express();

// database connection
connectToDB();

// JSON middleware
app.use(express.json());

// Register User
app.use(register);

// Login User
app.use(login);

// Contacts
app.use(contactList);

app.listen(3000, () => {
  console.log("server up and running on port 3000");
});
