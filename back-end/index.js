require("dotenv").config();
const Express = require("express");
const app = Express();
const projectRoutes = require("./routes/project");
const taskRoutes = require("./routes/task");
const cors = require("cors");
const connectToDataBase = require("./database/connection");

const notFound = require("./routes/notFound");

// middlewares
app.use(Express.json());
app.use(cors());

// routes
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);

// not found routes
app.use(notFound);

// starting the app
app.listen(process.env.app_port, () => {
  console.log(`listening on port : ${process.env.app_port}`);
  connectToDataBase();
});
