const express = require("express");
const router = express.Router();
const { RequireAuth } = require("../middleware/RequireAuth");
const {
  addBackground,
  deleteBackground,
  returnBackground,
} = require("../controllers/BackgroundController");

router.use(RequireAuth);

router.post("/add", addBackground);
router.delete("/del", deleteBackground);
router.post("/return", returnBackground);
module.exports = router;
