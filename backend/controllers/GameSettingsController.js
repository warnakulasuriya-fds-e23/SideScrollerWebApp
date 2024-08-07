const GameSettings = require("../models/GameSettingsModel");

const getGameSettings = async (req, res) => {
  try {
    const userId = req.userFromMiddleWare._id;
    const retrievedGameSettings = await GameSettings.find({ UserId: userId });
    res.status(200).json(retrievedGameSettings[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllGameSettings = async (req, res) => {
  try {
    const retrievedGameSettings = await GameSettings.find({});
    res.status(200).json(retrievedGameSettings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const addGameSetting = async (req, res) => {
  try {
    const UserId = req.userFromMiddleWare._id;
    const {
      BackgroundType,
      CharacterType,
      MuteBackgroundMusic,
      MuteEffects,
      DebugKey,
      PauseKey,
      RollKey,
      CrouchKey,
      JumpKey,
      BackwardKey,
      ForwardKey,
    } = req.body;

    const emptyFields = [];
    if (!UserId) {
      emptyFields.push("UserId");
    }
    if (!BackgroundType) {
      emptyFields.push("BackgroundType");
    }
    if (!CharacterType) {
      emptyFields.push("CharacterType");
    }
    if (!MuteBackgroundMusic) {
      emptyFields.push("MuteBackgroundMusic");
    }
    if (!MuteEffects) {
      emptyFields.push("MuteEffects");
    }
    if (!DebugKey) {
      emptyFields.push("DebugKey");
    }
    if (!PauseKey) {
      emptyFields.push("PauseKey");
    }
    if (!RollKey) {
      emptyFields.push("RollKey");
    }
    if (!CrouchKey) {
      emptyFields.push("CrouchKey");
    }
    if (!JumpKey) {
      emptyFields.push("JumpKey");
    }
    if (!BackwardKey) {
      emptyFields.push("BackwardKey");
    }
    if (!ForwardKey) {
      emptyFields.push("ForwardKey");
    }

    if (emptyFields.length > 0) {
      throw Error(
        "Following settings were recived as empty : " + emptyFields.toString()
      );
    }

    const alreadyCreatedByUser = await GameSettings.findOne({ UserId });
    if (alreadyCreatedByUser) {
      throw Error("This user already has existing game settings");
    }
    const addedGameSetting = await GameSettings.create({
      UserId,
      BackgroundType,
      CharacterType,
      MuteBackgroundMusic,
      MuteEffects,
      DebugKey,
      PauseKey,
      RollKey,
      CrouchKey,
      JumpKey,
      BackwardKey,
      ForwardKey,
    });
    res.status(200).json(addedGameSetting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateGameSetting = async (req, res) => {
  try {
    const UserId = req.userFromMiddleWare._id;
    const options = { returnDocument: "after" };
    const updatedGameSetting_After = await GameSettings.findOneAndUpdate(
      { UserId },
      req.body,
      options
    );
    if (!updatedGameSetting_After) {
      throw Error("Game Setting was not found for this user");
    }
    res.status(200).json(updatedGameSetting_After);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const restoreDefaultGameSettings = async (req, res) => {
  try {
    const UserId = req.userFromMiddleWare._id;
    const restoredGameSettings = await GameSettings.setDefaultGameSettings(
      UserId
    );
    res.status(200).json(restoredGameSettings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteGameSetting = async (req, res) => {
  try {
    const UserId = req.userFromMiddleWare._id;
    const deletedGamesetting = await GameSettings.findOneAndDelete({ UserId });
    if (!deletedGamesetting) {
      throw Error("This user doesnt have a Game Setting to delete");
    }
    res.status(200).json(deletedGamesetting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getGameSettings,
  getAllGameSettings,
  addGameSetting,
  updateGameSetting,
  restoreDefaultGameSettings,
  deleteGameSetting,
};
