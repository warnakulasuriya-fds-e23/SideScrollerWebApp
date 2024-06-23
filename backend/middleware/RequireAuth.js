const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const RequireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(401)
      .json({ error: "Authorization token must be provided" });
  }

  const token = authorization.split(" ")[1];
  try {
    const { _id } = await jwt.verify(token, process.env.TOKEN_CODE);
    req.userFromMiddleWare = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { RequireAuth };
