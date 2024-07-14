require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes");
const gameSettingsRouter = require("./routes/GameSettingsRoutes");
const saveStatesRouter = require("./routes/SaveStatesRoutes");
const SideScrollerWebApp = express();

SideScrollerWebApp.use(express.json());
SideScrollerWebApp.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

SideScrollerWebApp.use("/api/users", userRouter);
SideScrollerWebApp.use("/api/gameSettings", gameSettingsRouter);
SideScrollerWebApp.use("/api/saveStates", saveStatesRouter);

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
