const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER USER
// Creates a new user with hashed PIN for security
exports.register = async (req, res) => {
  try {
    const { name, email, pin, balance } = req.body;
    
    // Validate required fields
    if (!name || !email || !pin) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash PIN before storing
    const hashedPin = await bcrypt.hash(pin, 10);

    // Create new user
    await User.create({
      name,
      email,
      pin: hashedPin,
      balance: balance || 0
    });

    res.json({ msg: "User registered successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// LOGIN USER
// Authenticates user using email + PIN and returns JWT token
exports.login = async (req, res) => {
  try {
    const { email, pin } = req.body;

    // Validate input
    if (!email || !pin) {
      return res.status(400).json({ msg: "Email and PIN required" });
    }

    // Find user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Compare entered PIN with stored hashed PIN

    const isMatch = await bcrypt.compare(pin, user.pin);

    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid PIN" });
    }

    // Generate JWT token for session
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "10m"
    });

    res.json({ token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};