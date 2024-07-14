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

module.exports = router;
