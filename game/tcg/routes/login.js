const express = require("express");
const { authUser, registerUser } = require("../controllers/login");
const router = express.Router();

router.route("/login").get((req, res) => {
  const errMsg = req.session.error;

  if (errMsg) {
    res.render("login.ejs", { errorMsg: errMsg });
  } else if (req.session.userName) {
    req.session.error = "";
    res.redirect("/");
  } else {
    req.session.error = "";
    res.render("login.ejs");
  }
});

router.route("/login").post((req, res) => {
  authUser(req, res);
});

router.route("/register").get((req, res) => {
  res.render("register.ejs");
});

router.route("/register").post((req, res) => {
  registerUser(req, res);
});

module.exports = router;
