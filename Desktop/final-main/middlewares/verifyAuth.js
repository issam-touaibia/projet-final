const jwt = require("jsonwebtoken");

const User = require("../models/User");
const secret = process.env.secret;
const verifyAuth = async (req, res, next) => {
  let token = req.headers.authorization;

  try {
    const decoded = await jwt.verify(token, secret);
    if (!decoded) return res.status(400).json({ msg: "invalid token" });
    const user = await User.findById(decoded.id);
    if (!user) return res.status(400).json({ msg: "unauthorized" });
    else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};
module.exports = verifyAuth;
