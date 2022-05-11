// SET UP BASIC EXPRESS SERVER

// DEPENDENCIES
const express = require("express");
// const { append } = require('express/lib/response');

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
// console.log(PORT);

// ROUTES
append.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads");
});

// LISTEN
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});

