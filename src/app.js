const app = require("./server");
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env.dev",
});

app.listen(process.env.APP_PORT);

module.exports = app;
