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

module.exports = mongoose.model("GameSettings", GameSettingsSchema);
