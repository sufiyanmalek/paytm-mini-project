// import modules
import express from "express";
import { addContact, getAllContacts } from "../Controllers/contacts.js";

// export contactlist Router
export const contactList = express.Router();

// get all contacts
contactList.get("/contacts", getAllContacts);

// add contacts
contactList.post("/contacts", addContact);
