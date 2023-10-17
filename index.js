const Express = require("express");
const app = Express();
require("dotenv").config();
const connectToDataBase = require("./database/connection");
const projectRoutes = require("./routes/project");
const notFound = require("./routes/notFound");

// middlewares
app.use(Express.json());

// not found route
app.use(notFound);

// starting the app
app.listen(process.env.app_port, () => {
  console.log(`listening on port : ${process.env.app_port}`);
  connectToDataBase();
});
