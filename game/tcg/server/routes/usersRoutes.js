// src/userRoutes.js
const express = require("express");
const router = express.Router();
const authServices = require("../services/users");

// Define user routes
router.get("/", (req, res) => {
  const users = authServices.loadUsersFromFile();
  res.send(users);
});

router.get("/:id", (req, res) => {
  const userID = parseInt(req.params.id);

  // Check if the ID is a valid number
  if (isNaN(userID) || userID < 0) {
    return res.status(400).json({ message: `Invalid ID: ${userID}!` });
  }

  // Find the user by ID
  const user = authServices.getUserByID(userID);

  // If user is found, send user data; otherwise, send error message
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Export the router
module.exports = router;
