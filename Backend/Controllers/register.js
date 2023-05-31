// import modules
import { User } from "../Models/userModel.js";
import joi from "joi";
import bcrypt, { hash } from "bcrypt";

// register user controller
export const registerUser = async (req, res) => {
  try {
    const userSchema = joi.object({
      name: joi.string().required().min(3),
      email: joi.string().email().required(),
      phone: joi.string().required().length(10),
      password: joi.string().min(6).required(),
      pin: joi.string().length(4).required(),
      address: joi.string().required(),
    });

    const validate = await userSchema.validate(req.body);
    if (validate.error) {
      res.status(400).json({
        error: "Validation error",
        message: validate.error.details[0].message,
      });
    } else {
      const users = await User.find();
      const user = users.find((e) => e.phone == req.body.phone);
      if (user) {
        res.status(400).json({
          message:
            "Phone no already in Use, Login or Try with different number!",
        });
      } else {
        const password = await bcrypt.hash(req.body.password, 10);
        const pin = await bcrypt.hash(req.body.pin, 10);
        console.log(password);
        const newUser = new User({ ...req.body, password, pin });
        await newUser.save();
        res.status(200).send(newUser);
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
