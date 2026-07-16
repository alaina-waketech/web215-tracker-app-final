const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const signToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

//registration post mothod
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // checks that all fields have been filled out
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  //checks if email is registered
  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: "Email already registered." });
  }

  //use bcrypt to hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  //create a new user and adds it to mongodb
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  //token
  const token = signToken(user);

  //feedback that the user was successfully created
  res.status(201).json({
    message: "User created successfully.",
    user: { id: user._id, name: user.name, email: user.email },
    token,
  });
});

// post method for logging in
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Look up user by email
  const foundUser = await User.findOne({ email });
  //if email doesn't match, return 401 message
  const user = await User.findOne({ email });
  if (!foundUser) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  // Compare password against the stored password
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  const token = signToken(foundUser);

  res.json({
    message: "Login successful.",
    user: { id: user._id, name: user.name, email: user.email },
    token,
  });
});

module.exports = router;
