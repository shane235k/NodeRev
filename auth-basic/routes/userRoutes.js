const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;  
  
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.send("User already exists");
    }   
    const user = new User({ name, email, password });
    await user.save();

    res.send("User Registered Successfully");
  } catch (err) {
    res.send(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.send("User not found");
    }

    if (user.password === password) {
      res.send("Login Successful");
    } else {
      res.send("Invalid Password");
    }
  } catch (err) {
    res.send(err);
  }
});

// GET ALL USERS (extra for testing)
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

module.exports = router;