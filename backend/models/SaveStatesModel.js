const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SaveStatesSchema = new Schema(
  {
    UserId: {
      type: String,
      required: true,
    },
    SaveSlot_A: {
      type: Object,
    },
    SaveSlot_B: {
      type: Object,
    },
    SaveSlot_C: {
      type: Object,
    },
  },
  { timestamps: true }
);

SaveStatesSchema.statics.createDefaultSaveStatesDoc = function (UserId) {
  this.create({
    UserId,
    SaveSlot_A: "Clear",
    SaveSlot_B: "Clear",
    SaveSlot_C: "Clear",
  });
};

module.exports = mongoose.model("SaveStates", SaveStatesSchema);
