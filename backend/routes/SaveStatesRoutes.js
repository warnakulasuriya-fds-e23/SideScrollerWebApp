const express = require("express");
const router = express.Router();
const { RequireAuth } = require("../middleware/RequireAuth");
const {
  createSaveStates,
  updateSaveStates,
  deleteSaveStates,
  getSaveStateA,
  getSaveStateB,
  getSaveStateC,
} = require("../controllers/SaveStatesController");

router.use(RequireAuth);

router.post("/create", createSaveStates);

router.patch("/update", updateSaveStates);

router.get("/A", getSaveStateA);
router.get("/B", getSaveStateB);
router.get("/C", getSaveStateC);

module.exports = router;
