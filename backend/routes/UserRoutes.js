const { login, signup, deleteUser } = require("../controllers/UserController");
const { RequireAuth } = require("../middleware/RequireAuth");
const express = require("express");
const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.use(RequireAuth);

router.delete("/removeAccount", deleteUser);

module.exports = router;
