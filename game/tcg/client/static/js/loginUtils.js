import cookieModule from "./cookies.js";
import reqModule from "./requests.js";
import localStorageModule from "./localStorageMgr.js";

async function logIn() {
  const output = document.getElementById("output");
  const userName = document.getElementById("username").value;
  const passWord = document.getElementById("password").value;
  const result = await reqModule.logInRequest(userName, passWord);

  if (!result.user) {
    output.innerHTML = result.message;
  } else {
    output.innerHTML = `${result.message}<br>user: ${result.user}`;
    cookieModule.createCookie(cookieModule.USERCOOKIE, result.user);
    cookieModule.createCookie(cookieModule.SESSIDCOOKIE, result.sessionID);

    setTimeout(function () {
      location.replace("town.html");
    }, 1000);
    localStorageModule.delMsg(localStorageModule.REDIRECTMSG);
  }
}

function register() {
  console.log("Register");
}

export default {
  logIn,
  register,
};
