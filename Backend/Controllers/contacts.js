export const getAllContacts = async (req, res) => {
  try {
    res.send("contacts");
  } catch (error) {
    res.status(500).send(error);
  }
};
