require("dotenv").config();
const favicon = require("serve-favicon");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes");
const gameSettingsRouter = require("./routes/GameSettingsRoutes");
const saveStatesRouter = require("./routes/SaveStatesRoutes");
const backgroundRouter = require("./routes/BackgroundRoutes");
const { Server: TusServer } = require("@tus/server");
const { FileStore: TusFileStore } = require("@tus/file-store");
const tusServer = new TusServer({
  path: "/tus-upload/files",
  datastore: new TusFileStore({
    directory: __dirname + "/tus-upload/files",
  }),
  allowedCredentials: true,
  allowedOrigins: ["*"],
});

const SideScrollerWebApp = express();
SideScrollerWebApp.use(favicon(__dirname + "/favicon.ico"));
SideScrollerWebApp.get("/", (_, res) =>
  res.sendFile(__dirname + "/index.html")
);
SideScrollerWebApp.get("/favicon", (_, res) =>
  res.sendFile(__dirname + "/favicon.ico")
);
SideScrollerWebApp.use(express.json());
SideScrollerWebApp.use(cors());
SideScrollerWebApp.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
SideScrollerWebApp.use((req, res, next) => {
  const regexpression = /\/tus-upload\/files/;
  if (regexpression.test(req.path)) {
    tusServer.handle(req, res);
  } else {
    next();
  }
});

SideScrollerWebApp.use("/api/users", userRouter);
SideScrollerWebApp.use("/api/gameSettings", gameSettingsRouter);
SideScrollerWebApp.use("/api/saveStates", saveStatesRouter);
SideScrollerWebApp.use("/api/background", backgroundRouter);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    SideScrollerWebApp.listen(process.env.PORT, () => {
      console.log(
        `Connected to Database! Listening on port ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
