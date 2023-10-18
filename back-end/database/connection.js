const mongoose = require("mongoose");

const db_uri = `mongodb+srv://${process.env.user_name}:${process.env.db_password}@cluster0.ka7dbdj.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connectionFactory() {
  try {
    const conn = await mongoose.connect(db_uri, connectionParams);
    console.log("Connected to the database");
    return conn;
  } catch (e) {
    console.error(`error ${e.message}`, e);
  }
}

module.exports = connectionFactory;
