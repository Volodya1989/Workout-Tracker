const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }, { useUnifiedTopology: true }));
app.use(express.json());

app.use(express.static("public"));
// Routes
const routes = require("./controllers/workoutController.js");
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});