// imports
import express from "express";
import { addMoneyToWallet, getWallet } from "../Controllers/userWallet.js";

//export wallet router
export const wallet = express.Router();

// get wallet
wallet.get("/wallet", getWallet);

// add money to wallet
wallet.put("/wallet/add", addMoneyToWallet);
