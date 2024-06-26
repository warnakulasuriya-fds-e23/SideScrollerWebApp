const express = require("express");
const router = express.Router();
const { RequireAuth } = require("../middleware/RequireAuth");
const {
  getGameSettings,
  getAllGameSettings,
  addGameSetting,
  updateGameSetting,
  restoreDefaultGameSettings,
  deleteGameSetting,
} = require("../controllers/GameSettingsController");
//RequireAuth checks for a valid token, if its valid then the functions below it will run. (API route protection)
router.use(RequireAuth);

router.get("/", getGameSettings);

router.get("/allGameSettings", getAllGameSettings);

router.post("/", addGameSetting);

router.patch("/", updateGameSetting);

router.patch("/restoreDefault", restoreDefaultGameSettings);

router.delete("/", deleteGameSetting);

module.exports = router;
