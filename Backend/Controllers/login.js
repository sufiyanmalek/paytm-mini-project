// imports
import { userOtpModel } from "../Models/otpModel.js";
import { User } from "../Models/userModel.js";
// import { twilioOTP } from "../utils/otpVerification.js";

// login user controller
export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ phone: req.body.phone });
    if (user) {
      const otp = Math.floor(Math.random() * 1000000);
      // twilioOTP(otp, req.body.phone);
      const userOtp = new userOtpModel({
        phone: req.body.phone,
        otp: otp,
      });
      await userOtp.save();
      setTimeout(async () => {
        const deletOtp = await userOtpModel.findOneAndDelete({
          phone: req.body.phone,
        });
        console.log("otp expired");
      }, 30000);
      res.status(200).send("Otp has been sent to your mobile number !");
    } else {
      res.status(404).json({
        message: "No user with this phone number",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
