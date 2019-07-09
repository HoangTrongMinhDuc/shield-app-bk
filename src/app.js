const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
const config = require("./config");
const Logger = require("./middleware/Logger");
const db = mongoose.connection;

//Global middleware
app.use(cors());
app.use(Logger);

//Database connect
mongoose.connect(config.DB_URL, { useNewUrlParser: true });
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("database connected in " + config.MODE);
});

//Route configure
//Default index route
app.get("/", (req, res) => {
  res.send("hello world");
});

//Set route
app.use("/api", routes);

module.exports = app;
