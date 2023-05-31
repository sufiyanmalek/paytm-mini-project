// imports
import express from "express";
import { getWallet } from "../Controllers/userWallet.js";

//export wallet router
export const wallet = express.Router();

// get wallet
wallet.get("/wallet", getWallet);

// send money from wallet
wallet.post("/wallet/send/:phone");
