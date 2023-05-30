// imports
import { ContactList } from "../Models/contactListModel.js";
import { verifyNewContact } from "../utils/verifyContactFormat.js";

// get all contacts of current User
export const getAllContacts = async (req, res) => {
  try {
    const user = req.body;
    const contactList = await ContactList.findOne({
      userPhone: user.phone,
    });
    if (!contactList) {
      const contactList = new ContactList({
        userPhone: user.phone,
        contacts: [
          {
            userId: "6475700fbb713a7e456c84b0",
            name: "Sufiyan Malek",
            email: "sufiyanmalek.geek@gmail.com",
            phone: "9978578666",
          },
        ],
      });
      await contactList.save();
      res.status(200).json({
        message: "There was no contact list for this user so created a new one",
        contactList: contactList,
      });
    } else {
      res.status(200).json({
        messsage: "Contact List Already Exists",
        contactList,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// add contact to contact List of current user and create a new contact List if doesnt exist
export const addContact = async (req, res) => {
  try {
    const user = JSON.parse(req.headers.user);

    const contactList = await ContactList.findOne({
      userPhone: user.phone,
    });
    if (!contactList) {
      const validator = await verifyNewContact(req.body);
      if (!validator.isValid) {
        res.status(400).json({
          error: "Validation error",
          message: validator.message,
        });
      } else {
        const contactList = new ContactList({
          userPhone: user.phone,
          contacts: [
            {
              userId: "6475700fbb713a7e456c84b0",
              name: "Sufiyan Malek",
              email: "sufiyanmalek.geek@gmail.com",
              phone: "9978578666",
            },
            {
              ...req.body,
            },
          ],
        });
        await contactList.save();
        res.status(200).json({
          message:
            "There was no contact list for this user so created a new one",
          contactList: contactList,
        });
      }
    } else {
      const newContact = contactList.contacts.find((e) => {
        return e.phone == req.body.phone;
      });
      if (newContact) {
        const validator = await verifyNewContact(req.body);
        if (!validator.isValid) {
          res.status(400).json({
            error: "Validation error",
            message: validator.message,
          });
        } else {
          res.status(200).json({
            message: "This Contact already exists",
            contactList,
          });
        }
      } else {
        const validator = await verifyNewContact(req.body);
        if (!validator.isValid) {
          res.status(400).json({
            error: "Validation error",
            message: validator.message,
          });
        } else {
          contactList.contacts.push(req.body);
          const updatedContactList = await ContactList.findOneAndUpdate(
            { userPhone: user.phone },
            { ...contactList },
            { new: true }
          );
          res.status(200).json({
            messsage: "Contact List Already Exists",
            updatedContactList,
          });
        }
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
