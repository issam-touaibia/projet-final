const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = process.env.secret;

exports.register = async (req, res) => {
  const { fullName, email, password, userRole } = req.body;
  const existantUser = await User.findOne({ email });
  if (existantUser) res.status(409).json({ msg: "User already exists" });
  try {
    const newUser = new User({
      fullName,
      email,
      password,
      userRole,
    });
    let salt = await bcryptjs.genSalt(10);
    let hash = await bcryptjs.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    const payload = {
      id: newUser._id,
    };
    const token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        userRole: newUser.userRole,
      },
    });
    // res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "Bad credentials " });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: "Invalid credentials" });
    const payload = {
      id: user._id,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        userRole: user.userRole,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.auth = (req, res) => {
  res.send(req.user);
};
