// src/authRoutes.js
const express = require("express");
const router = express.Router();
const userServices = require("../services/users");
const authServices = require("../services/auth");
const sessionsServices = require("../services/sessions");

// Define auth routes
router.post("/login", (req, res) => {
  const { userName, passWord } = req.body;
  const result = userServices.logInUser(userName, passWord);

  if (result.user) {
    const status = sessionsServices.addSession(result.user, result.sessionID);

    if (!status) {
      res
        .status(400)
        .json({ message: "User is already logged in!", user: null });
    } else {
      res.json({
        message: "Login successful",
        user: result.user.userName,
        sessionID: result.sessionID,
      });
    }
  } else {
    res.status(401).json({ message: "Invalid credentials", user: null });
  }
});

router.post("/logout", (req, res) => {
  const { sessionID } = req.body;
  const result = sessionsServices.delSession(sessionID);
  if (result) {
    res
      .status(200)
      .json({ message: "Logout successfull!", processStatus: true });
  } else {
    res
      .status(400)
      .json({ message: "Invalid session ID!", processStatus: false });
  }
});

router.post("/authorize", (req, res) => {
  const { userName, sessionID } = req.body;
  const result = authServices.authorizeUser(userName, sessionID);

  if (result) {
    res.status(200).json({ message: "Authorized!", sessObj: result });
  } else {
    res.status(400).json({ message: "Unauthorized!", sessObj: null });
  }
});

router.post("/register", (req, res) => {
  // Registration logic
  const { userName, passWord } = req.body;
  const result = userServices.registerUser(userName, passWord);

  if (result.status === 200) {
    res.status(200).json(result.message);
  } else if (result.status === 400) {
    res.status(400).json(result.message);
  }
});

// Export the router
module.exports = router;
