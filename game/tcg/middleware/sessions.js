const verifySession = (req, res, next) => {
  // Check if session exists
  if (req.session && req.session.userName) {
    // If session exists, proceed to the next middleware or route handler
    next();
  } else {
    // If session doesn't exist, redirect to login page
    res.redirect("/login");
  }
};

module.exports = {
  verifySession,
};
