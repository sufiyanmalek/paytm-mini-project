import mongoose from "mongoose";

//connect to Database
export const connectToDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/paytmDB")
    .then(() => {
      console.log("connected to DB successfully...");
    })
    .catch((e) => {
      console.log(e);
    });
};
