// src/authRoutes.js
const express = require("express");
const router = express.Router();
const authServices = require("../services/users");

// Define auth routes
router.post("/login", (req, res) => {
  const { userName, passWord } = req.body;
  const user = authServices.authUser(userName, passWord);

  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

router.post("/register", (req, res) => {
  // Registration logic
  const { userName, passWord } = req.body;
  const result = authServices.registerUser(userName, passWord);

  if (result.status === 200) {
    res.status(200).json(result.message);
  } else if (result.status === 400) {
    res.status(400).json(result.message);
  }
});

// Export the router
module.exports = router;
