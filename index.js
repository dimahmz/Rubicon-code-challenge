const Express = require("express");
const app = Express();
require("dotenv").config();
const connectToDataBase = require("./database/connection");

// middlewares
app.use(Express.json());

// starting the app
app.listen(process.env.app_port, () => {
  console.log(`listening on port : ${process.env.app_port}`);
  connectToDataBase();
});
