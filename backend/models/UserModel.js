const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    requried: true,
  },
  UserName: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
