const Express = require("express");
const app = Express();
require("dotenv").config();

app.use(Express.json());

// handlling express errors
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Something broke!");
});

// unavailable routes
app.use(notFound);

// connecting to the database
const mongoDbUri = `mongodb+srv://proFocusDB:${process.env.db_password}@atlascluster.t8zzfhk.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
  // useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(mongoDbUri, connectionParams)
  .then(() => console.log("Connected to the database"))
  .catch((e) => {
    console.log(`error ${e.message}`);
  });

app.listen(port, () => console.log(`network ${process.env.app_domain_name}`));
