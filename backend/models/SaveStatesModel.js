const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SaveStatesSchema = new Schema(
  {
    UserId: {
      type: String,
      required: true,
    },
    SaveSlot_A: {
      type: String,
    },
    SaveSlot_B: {
      type: String,
    },
    SaveSlot_C: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SaveStates", SaveStatesSchema);
