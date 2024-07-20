const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BackgroundSchema = new Schema(
  {
    BackgroundName: {
      type: String,
      required: true,
      unique: true,
    },
    Layer1: {
      type: Object,
      required: true,
    },
    Layer2: {
      type: Object,
      requried: true,
    },
    Layer3: {
      type: Object,
      required: true,
    },
    Layer4: {
      type: Object,
      required: true,
    },
    Layer5: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Backgrounds", BackgroundSchema);
