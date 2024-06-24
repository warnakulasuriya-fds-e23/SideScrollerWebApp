const {
  login,
  signup,
  updateEmail,
  updateUserName,
  deleteUser,
} = require("../controllers/UserController");
const { RequireAuth } = require("../middleware/RequireAuth");
const express = require("express");
const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.use(RequireAuth);

router.patch("/updateEmail", updateEmail);

router.patch("/updateUserName", updateUserName);

router.delete("/removeAccount", deleteUser);

module.exports = router;
