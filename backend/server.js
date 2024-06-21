require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const SideScrollerWebApp = express();

SideScrollerWebApp.use(express.json());
SideScrollerWebApp.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

SideScrollerWebApp.listen(4000, () => {
  console.log("Listening on port 4000");
});
