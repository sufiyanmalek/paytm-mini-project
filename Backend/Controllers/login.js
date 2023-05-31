// imports
import { userOtpModel } from "../Models/otpModel.js";
import { User } from "../Models/userModel.js";
// import { twilioOTP } from "../utils/twilioOTP.js";
import bcrypt from "bcrypt";

// login user controller
export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ phone: req.body.phone });
    if (user) {
      let password = req.body.password;
      password = await bcrypt.compare(password, user.password);
      if (password) {
        const otp = Math.floor(Math.random() * 1000000);
        // twilioOTP(otp, req.body.phone);
        console.log(otp);
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
        res.status(401).send("Incorrect Password Please try again");
      }
    } else {
      res.status(404).json({
        message: "No user with this phone number",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
