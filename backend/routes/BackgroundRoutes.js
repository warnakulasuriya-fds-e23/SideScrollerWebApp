const express = require("express");
const router = express.Router();
const { RequireAuth } = require("../middleware/RequireAuth");
const {
  addBackground,
  updateBackground,
  deleteBackground,
  returnBackground,
  checkBackgroundAvailability,
} = require("../controllers/BackgroundController");

router.use(RequireAuth);

router.post("/add", addBackground);
router.patch("/update", updateBackground);
router.delete("/del", deleteBackground);
router.post("/return", returnBackground);
router.post("/check-availability", checkBackgroundAvailability);
module.exports = router;
