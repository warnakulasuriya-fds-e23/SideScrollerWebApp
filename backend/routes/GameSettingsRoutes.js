const express = require("express");
const router = express.Router();
const { RequireAuth } = require("../middleware/RequireAuth");
const {
  getGameSettings,
  addGameSetting,
} = require("../controllers/GameSettingsController");
//RequireAuth checks for a valid token, if its valid then the functions below it will run. (API route protection)
router.use(RequireAuth);

router.get("/", getGameSettings);

router.post("/", addGameSetting);

module.exports = router;
