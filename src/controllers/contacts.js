const Contact = require("../model/Contacts");

module.exports = {
  getContacts: async (req, res) => {
    try {
      const contact = await Contact.find({});
      res.json(contact);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  createContact: async (req, res) => {
    let { name, email, phone, type } = req.body;

    const contact = new Contact({
      name,
      email,
      phone,
      type,
    });

    try {
      const savedContact = await contact.save();
      res.send({ savedContact });
    } catch (err) {
      res.status(400).send(err);
    }
  },
  deleteContact: async (req, res) => {
    const { id } = req.body;

    try {
      const contactDeleted = await Link.deleteOne({ _id: id });
      res.send({ contactDeleted });
    } catch (err) {
      res.status(400).send(err);
    }
  },
  updateContact: async (req, res) => {
    const { id, name, email, phone, type } = req.body;

    try {
      const updatedLink = await Link.findOneAndUpdate({ name, email, phone, type }, { _id: id }, { useFindAndModify: false });
      res.send({ updatedLink });
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
