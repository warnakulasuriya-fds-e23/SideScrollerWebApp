const User = require("../models/UserModel");
const GameSettings = require("../models/GameSettingsModel");
const validator = require("validator");
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

const updateUserName = async (req, res) => {
  const { UserName } = req.body;
  try {
    if (!UserName) throw Error("Please enter a new UserName");

    const alreadTaken = await User.findOne({ UserName });
    if (alreadTaken) throw Error("This UserName is already taken");

    const UserId = req.userFromMiddleWare._id;
    const options = { returnDocument: "after" };
    const updatedUser = await User.findByIdAndUpdate(
      UserId,
      { UserName },
      options
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateEmail = async (req, res) => {
  const { Email } = req.body;
  try {
    if (!Email) {
      throw Error("Please enter a new Email");
    }
    if (!validator.isEmail(Email)) {
      throw Error("Please enter a valid Email address");
    }

    const alreadTaken = await User.findOne({ Email });
    if (alreadTaken) throw Error("This Email is already taken");

    const UserId = req.userFromMiddleWare._id;
    const options = { returnDocument: "after" };
    const updatedUser = await User.findByIdAndUpdate(
      UserId,
      { Email },
      options
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  const { Password } = req.body;
  try {
    if (!Password) throw Error("Please Enter your password for confirmation");

    const UserId = req.userFromMiddleWare._id;
    const confirmation = await User.confirmPassword(UserId, Password);
    if (!confirmation) throw Error("Password is incorrect");

    const deletedGameSetting = await GameSettings.findOneAndDelete({ UserId });
    const deletedUser = await User.findByIdAndDelete(UserId);

    res.status(200).json({
      message: "Successfully deleted User",
      deletedUser,
      deletedGameSetting,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { login, signup, updateEmail, updateUserName, deleteUser };
