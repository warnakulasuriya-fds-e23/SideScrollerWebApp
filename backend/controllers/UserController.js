const User = require("../models/UserModel");
const GameSettings = require("../models/GameSettingsModel");
const jwt = require("jsonwebtoken");
const CreateWebToken = (_id) => {
  return jwt.sign({ _id }, process.env.TOKEN_CODE, { expiresIn: "3d" });
};

const login = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const detectedUser = await User.login(Email, Password);
    const createdToken = CreateWebToken(detectedUser._id);
    res.status(200).json({ Email, createdToken });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const signup = async (req, res) => {
  const { Email, UserName, Password } = req.body;
  try {
    const createdUser = await User.signup(Email, UserName, Password);
    const createdGameSetting = await GameSettings.createdDefaultGameSettings(
      createdUser._id
    );
    const createdToken = CreateWebToken(createdUser._id);
    res.status(200).json({ Email, createdToken, createdGameSetting });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { login, signup };
