// import modules
import express from "express";

// export contactlist Router
export const contactList = express.Router();

// get all contacts
contactList.get("/contacts");
