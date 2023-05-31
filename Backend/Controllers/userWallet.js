import { Wallet } from "../Models/walletModel.js";

// create or get wallet details
export const getWallet = async (req, res) => {
  try {
    const user = req.body;
    const wallet = await Wallet.findOne({ userPhone: user.phone });
    if (wallet) {
      res.status(200).send(wallet);
    } else {
      const wallet = new Wallet({
        user: user._id.$oid,
        userPhone: user.phone,
        transactionHistory: [],
      });
      await wallet.save();
      res.status(200).send(wallet);
    }
    res.send(wallet);
  } catch (error) {
    res.status(500).send(error);
  }
};

// send money from wallet
