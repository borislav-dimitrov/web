const sessions = require("../services/sessions");

const getActiveSessions = () => {
  return sessions.getSessions();
};

module.exports = { getActiveSessions };
