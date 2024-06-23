const express = require("express");
const router = express.Router();
const {
  getGameSettings,
  addGameSetting,
} = require("../controllers/GameSettingsController");

router.get("/", getGameSettings);

router.post("/", addGameSetting);

module.exports = router;
