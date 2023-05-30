// imports
import { userOtpModel } from "../Models/otpModel.js";

//verify otp controller
export const verifyOtp = async (req, res) => {
  try {
    const user = await userOtpModel.findOne({ phone: req.body.phone });
    if (user) {
      if (user.otp == req.body.otp) {
        setTimeout(async () => {
          await userOtpModel.findOneAndDelete({ phone: req.body.phone });
        }, 3000);
        res.status(200).send("login successfull");
      } else {
        res.status(400).send("invalid Otp, retry or generate new otp");
      }
    } else {
      res.status(404).json({
        message: "Opt has been expired!",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
