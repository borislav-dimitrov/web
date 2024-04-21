const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  if (req.session.userName) {
    res.render("home.ejs", { userName: req.session.userName });
  } else {
    req.session.error = "Login first!";
    res.redirect("/login");
  }
});

module.exports = router;
