const express = require("express");
const router = express.Router();
const statistics = require("../services/statistics");

router.get("/sessions", (req, res) => {
  const activeSessions = statistics.getActiveSessions();
  res.send(activeSessions);
});

module.exports = router;
