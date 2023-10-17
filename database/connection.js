const mongoose = require("mongoose");
const TaskSchema = require("../models/task");
const ProjectSchema = require("../models/project");

const db_uri = `mongodb+srv://${process.env.db_user_name}:${process.env.db_password}@cluster0.lpaitdv.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = function connectionFactory() {
  try {
    const conn = mongoose.createConnection(db_uri, connectionParams);
    console.log("Connected to the database");
    // create the models
    conn.model("Project", TaskSchema);
    conn.model("Task", ProjectSchema);
  } catch (e) {
    console.error(`error ${e.message}`);
  }
};
