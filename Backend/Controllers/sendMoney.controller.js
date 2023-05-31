export const sendMoney = async (req, res) => {
  try {
    res.send("money sent");
  } catch (error) {
    res.status(500).send(error);
  }
};
