function VerifyUser() {
  const cookies = ParseCookies();
  console.log(cookies);

  location.replace("static/html/login.html");
}

function ParseCookies() {
  const cookies = document.cookie.split(";");
  const cookieObj = {};

  cookies.forEach((cookie) => {
    const [name, value] = cookie.split("=").map((c) => c.trim());
    cookieObj[name] = decodeURIComponent(value);
  });

  return cookieObj;
}

function LogIn() {
  alert(1);
}
