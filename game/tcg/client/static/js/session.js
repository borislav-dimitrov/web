import cookieModule from "./cookies.js";
import reqModule from "./requests.js";
import authModule from "./auth.js";

function getSessionInfo() {
  const userCookie = cookieModule.getCookie(cookieModule.USERCOOKIE);
  const sessCookie = cookieModule.getCookie(cookieModule.SESSIDCOOKIE);

  return { userName: userCookie, sessionID: sessCookie };
}

function clearSessionInfo() {
  cookieModule.removeSessionCookies();
}

async function logOut() {
  const { userName, sessionID } = getSessionInfo();
  if (userName && sessionID) {
    await reqModule.logOutRequest(sessionID);
    clearSessionInfo();
  }
  authModule.verifyUserLocal();
}

export default {
  logOut,
  getSessionInfo,
  clearSessionInfo,
};
