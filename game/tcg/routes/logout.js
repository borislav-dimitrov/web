const express = require("express");
const router = express.Router();

router.route("/logout").get((req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
