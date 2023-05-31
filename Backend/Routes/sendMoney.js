// import modules
import express from "express";
import { sendMoney } from "../Controllers/sendMoney.controller";

// export send money router
export const sendMoneyRouter = express.Router();

// send money request
sendMoneyRouter.post("/send/:phone", sendMoney);
