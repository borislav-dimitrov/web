let active_sessions = [];

const addSession = (user, sessionID) => {
  const sessionExists = getUserSession(user.userName);
  if (sessionExists) {
    return false;
  }

  const sessObj = {
    user: user,
    sessionID: sessionID,
  };

  active_sessions.push(sessObj);
  return true;
};

const delSession = (sessionID) => {
  const sessionIdx = active_sessions.findIndex(
    (obj) => obj.sessionID === sessionID
  );
  if (sessionIdx !== -1) {
    active_sessions.splice(sessionIdx, 1);
    return true;
  }
  return false;
};

const getSessions = () => {
  return active_sessions;
};

const getUserSession = (userName) => {
  const sessionIdx = active_sessions.findIndex(
    (obj) => obj.user.userName.toLowerCase() === userName.toLowerCase()
  );

  if (sessionIdx !== -1) {
    return active_sessions[sessionIdx];
  } else {
    return null;
  }
};

const getSession = (userName, sessionID) => {
  const sessionIdx = active_sessions.findIndex(
    (obj) =>
      obj.sessionID === sessionID &&
      obj.user.userName.toLowerCase() === userName.toLowerCase()
  );

  if (sessionIdx !== -1) {
    return active_sessions[sessionIdx];
  } else {
    return null;
  }
};

module.exports = {
  addSession,
  delSession,
  getSessions,
  getSession,
};
