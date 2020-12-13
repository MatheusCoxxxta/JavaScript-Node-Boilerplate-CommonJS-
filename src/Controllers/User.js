const connection = require("../Database/connection");
const User = require("../Models/User");

module.exports = {
  async index(req, res) {
    try {
      const users = await User.query().select("*");

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  async show(req, res) {
    const { id } = req.params;
    try {
      const user = await User.query().where("id", id).first();

      return res.status(200).send(user);
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  async store(req, res) {
    const data = req.body;
    try {
      const user = await User.query().insert(data);

      return res.send(user);
    } catch (error) {
      return res.send(error);
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const user_id = await User.query().where("id", id).update(data);

      return res.status(200).send({
        id: user_id,
        ...data,
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      const user = await User.query().where("id", id).del();
      if (user !== 0) return res.status(200).send({ message: "Success" });
      else return res.status(404).send({ message: "User not exists" });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
