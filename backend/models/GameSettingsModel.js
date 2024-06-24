const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const GameSettingsSchema = new Schema(
  {
    UserId: {
      type: String,
      required: true,
    },
    BackgroundType: {
      type: String,
      required: true,
    },
    CharacterType: {
      type: String,
      required: true,
    },
    MuteBackgroundMusic: {
      type: Boolean,
      required: true,
    },
    MuteEffects: {
      type: Boolean,
      required: true,
    },
    DebugKey: {
      type: String,
      required: true,
    },
    PauseKey: {
      type: String,
      required: true,
    },
    RollKey: {
      type: String,
      required: true,
    },
    CrouchKey: {
      type: String,
      required: true,
    },
    JumpKey: {
      type: String,
      required: true,
    },
    BackwardKey: {
      type: String,
      required: true,
    },
    ForwardKey: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

GameSettingsSchema.statics.addDefaultGameSettings = async function (userId) {
  const UserId = userId;
  const defaultGameSettings = {
    UserId: UserId,
    BackgroundType: "Default",
    CharacterType: "Default",
    MuteBackgroundMusic: "false",
    MuteEffects: "false",
    DebugKey: "d",
    PauseKey: "Escape",
    RollKey: "r",
    CrouchKey: "ArrowDown",
    JumpKey: "ArrowUp",
    BackwardKey: "ArrowLeft",
    ForwardKey: "ArrowRight",
  };
  const createdGameSetting = await this.create(defaultGameSettings);
  if (!createdGameSetting) throw Error("Couldn't set default Game Settings");
  console.log(createdGameSetting);
  return createdGameSetting;
};
module.exports = mongoose.model("GameSettings", GameSettingsSchema);
