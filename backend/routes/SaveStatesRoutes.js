const express = require("express");
const router = express.Router();
const { RequireAuth } = require("../middleware/RequireAuth");
const {
  createSaveStates,
  updateSaveStates,
  deleteSaveStates,
} = require("../controllers/SaveStatesController");

router.use(RequireAuth);

router.post("/create", createSaveStates);

router.patch("/update", updateSaveStates);

module.exports = router;
