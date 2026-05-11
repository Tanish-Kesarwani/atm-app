// AUTH MIDDLEWARE
// Verifies JWT token and attaches user to request

const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ msg: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    req.user = user;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};