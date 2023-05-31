import { Wallet } from "../Models/walletModel.js";
import bcrypt from "bcrypt";

// create or get wallet details
export const getWallet = async (req, res) => {
  try {
    const user = req.body;
    const wallet = await Wallet.findOne({ userPhone: user.phone });
    if (wallet) {
      res.status(200).send(wallet);
    } else {
      const wallet = new Wallet({
        userId: user._id.$oid,
        userPhone: user.phone,
        transactionHistory: [],
      });
      await wallet.save();
      res.status(200).send(wallet);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// add money to wallet
export const addMoneyToWallet = async (req, res) => {
  try {
    const amount = 500000;
    const pin = "5292";
    const user = req.body;

    const wallet = await Wallet.findOne({ userPhone: user.phone });
    const addMoney = await bcrypt.compare(pin, user.pin);
    if (addMoney) {
      wallet.balance = wallet.balance + amount;

      const updatedWallet = await Wallet.findOneAndUpdate(
        { userPhone: user.phone },
        wallet,
        { new: true }
      );
      res.json({
        message: "Money Added to wallet",
        updatedWallet,
      });
    } else {
      res.status(401).json("Your pin in Incorrect, please check");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
