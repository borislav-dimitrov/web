const USERCOOKIE = "authorizedUser";
const SESSIDCOOKIE = "sessionID";

function parseCookies() {
  const cookies = document.cookie.split(";");
  const cookieObj = {};

  cookies.forEach((cookie) => {
    const [name, value] = cookie.split("=").map((c) => c.trim());
    cookieObj[name] = decodeURIComponent(value);
  });

  return cookieObj;
}

function createCookie(cookieName, cookieValue, cookieDaysToLive = 1) {
  let cookie = `${cookieName}=${encodeURIComponent(cookieValue)}`;

  if (cookieDaysToLive) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + cookieDaysToLive);
    cookie += `;path=/;expires=${expirationDate.toUTCString()}`;
  }

  document.cookie = cookie;
}

function delCookie(name) {
  createCookie(name, "", -1);
}

function getCookie(cookieName) {
  const cookies = parseCookies();
  return cookies[cookieName];
}

function removeSessionCookies() {
  delCookie(USERCOOKIE);
  delCookie(SESSIDCOOKIE);
}

export default {
  SESSIDCOOKIE,
  USERCOOKIE,
  parseCookies,
  createCookie,
  delCookie,
  getCookie,
  removeSessionCookies,
};
