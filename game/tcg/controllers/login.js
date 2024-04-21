const bcrypt = require("bcrypt");
const fs = require("fs");

const registerUser = async (req, res, salt = 10) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.pwd, salt);
    const userId = Date.now().toString();

    global.usersDbObj["users"].push({
      userId: userId,
      userName: req.body.uname,
      email: req.body.email,
      password: hashedPassword,
    });
    fs.writeFileSync(
      global.usersDbFile,
      JSON.stringify(global.usersDbObj, null, 2)
    );
    res.redirect("/login");
  } catch (error) {
    res.redirect("/register");
    console.log(error);
  }
};

const authUser = async (req, res) => {
  const response = await validateUser(req.body.email, req.body.pwd);

  if (response.state === "Failed") {
    req.session.error = response.message;
    res.redirect("/login");
  }
  if (response.state === "Success") {
    req.session.userName = response.user.userName;
    res.redirect("/");
  }
};

async function validateUser(email, password) {
  let response = {
    state: "Failed",
    message: "",
    user: null,
  };

  const user = getUserByEmail(email);
  if (user == null) {
    response.message = "Invalid email!";
    return response;
  }

  const validPwd = await bcrypt.compare(password, user.password);
  if (validPwd == false) {
    response.message = "Invalid password!";
    return response;
  }

  response.state = "Success";
  response.message = "Logged in successfully!";
  response.user = user;
  return response;
}

function getUserByEmail(email) {
  return global.usersDbObj.users.find((user) => user.email === email);
}

module.exports = {
  authUser,
  registerUser,
};
