const express = require("express");
const UserController = require("./Controllers/User");

const routes = express.Router();

routes.get("/", async (req, res) => {
  res.send({ message: "Server online" });
});

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

module.exports = routes;
