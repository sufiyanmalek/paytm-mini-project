// import modules
import express from "express";
import { registerUser } from "../Controllers/register.js";

//export router
export const register = express.Router();

// register user
register.post("/register", registerUser);
