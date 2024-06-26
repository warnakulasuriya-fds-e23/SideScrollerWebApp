const validator = require("validator");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  UserName: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    requried: true,
  },
});
UserSchema.statics.signup = async function (Email, UserName, Password) {
  //validation handling
  if (!Email || !UserName || !Password) {
    if (!Email) {
      throw Error("No empty fields allowed, please fill in Email");
    }
    if (!UserName) {
      throw Error("No empty fields allowed, please fill in UserName");
    }
    if (!Password) {
      throw Error("No empty fields allowed, please fill in Password");
    }
  }
  if (!validator.isEmail(Email)) {
    throw Error("Please enter a valid Email address");
  }
  if (!validator.isStrongPassword(Password)) {
    throw Error("Please enter a stronger Password");
  }

  const existingEmail = await this.findOne({ Email });
  if (existingEmail) throw Error("This Email address has already been used");

  const existingUserName = await this.findOne({ UserName });
  if (existingUserName) throw Error("This UserName has already been used");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(Password, salt);

  const createdUser = this.create({
    Email: Email,
    UserName: UserName,
    Password: hash,
  });
  return createdUser;
};

UserSchema.statics.login = async function (Email, Password) {
  if (!Email || !Password) {
    if (!Email) {
      throw Error("No empty fields allowed, please fill in Email");
    }
    if (!Password) {
      throw Error("No empty fields allowed, please fill in Password");
    }
  }

  const returnedUser = await this.findOne({ Email: Email });
  if (!returnedUser) throw Error("Incorrect Email Adress.");

  const matching = await bcrypt.compare(Password, returnedUser.Password);
  if (!matching) throw Error("Incorrect Password");

  return returnedUser;
};

UserSchema.statics.confirmPassword = async function (userId, Password) {
  const returnedUser = await this.findById(userId);
  const matching = await bcrypt.compare(Password, returnedUser.Password);

  return matching;
};

UserSchema.statics.changePassword = async function (
  userId,
  RepeatedNewPassword
) {
  const returnedUser = await this.findOne({ _id: userId });
  if (!returnedUser) throw Error("Incorrect UserId check user token.");

  const matching = await bcrypt.compare(
    RepeatedNewPassword,
    returnedUser.Password
  );
  if (matching)
    throw Error(
      "No changes made ! Entered Password is the same as current Password."
    );

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(RepeatedNewPassword, salt);

  const options = { returnDocument: "after" };
  const updatedUser = await this.findByIdAndUpdate(
    userId,
    { Password: hash },
    options
  );

  return updatedUser;
};
module.exports = mongoose.model("User", UserSchema);
