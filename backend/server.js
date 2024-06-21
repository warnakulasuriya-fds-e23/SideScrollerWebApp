require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const SideScrollerWebApp = express();

SideScrollerWebApp.use(express.json());
SideScrollerWebApp.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    SideScrollerWebApp.listen(4000, () => {
      console.log("Connected to Database! Listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
