const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TusDataStoreSchema = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    value: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TusDataStore", TusDataStoreSchema);
