import sessModule from "./session.js";
import reqModule from "./requests.js";
import localStorageModule from "./localStorageMgr.js";

function verifyUserLocal() {
  const { userName, sessionID } = sessModule.getSessionInfo();

  if (!userName || !sessionID) {
    localStorageModule.createMsg(
      localStorageModule.REDIRECTMSG,
      "Invalid session!<br>Please Log in again!"
    );
    sessModule.clearSessionInfo();

    location.replace("login.html");
  }
}

async function authUserToServer() {
  const { userName, sessionID } = sessModule.getSessionInfo();
  const result = await reqModule.authUserRequest(userName, sessionID);

  if (result.sessObj === null) {
    sessModule.clearSessionInfo();

    localStorage.setItem(
      localStorageModule.REDIRECTMSG,
      "Session expired!<br>Please Log in again!"
    );
    window.location.reload();
  }
}

async function fullAuthentication() {
  verifyUserLocal();
  authUserToServer();
}

export default {
  authUserToServer,
  verifyUserLocal,
  fullAuthentication,
};
