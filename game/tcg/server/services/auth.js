const crypto = require("crypto");
const sessionServices = require("../services/sessions");

const getToken = () => {
  return crypto.randomBytes(128).toString("hex");
};

const authorizeUser = (userName, sessionID) => {
  const session = sessionServices.getSession(userName, sessionID);

  if (session) {
    return session;
  } else {
    return null;
  }
};

module.exports = { getToken, authorizeUser };
