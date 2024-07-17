const fs = require("fs");
const path = require("path");
const auth = require("../services/auth");

// Function to read JSON file
const loadUsersFromFile = () => {
  const filePath = path.join(__dirname, "..", "db", "users.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
};

const getUserByID = (userID) => {
  const users = loadUsersFromFile();
  const user = users.find((user) => user.id === userID);
  return user;
};

const getUserByName = (userName) => {
  const users = loadUsersFromFile();
  const user = users.find(
    (user) => user.userName.toLowerCase() === userName.toLowerCase()
  );
  return user;
};

const logInUser = (userName, passWord) => {
  let result = {
    user: null,
    sessionID: null,
  };
  const users = loadUsersFromFile();
  const user = users.find(
    (user) =>
      user.userName.toLowerCase() === userName.toLowerCase() &&
      user.passWord === passWord
  );
  result.user = user;
  result.sessionID = auth.getToken();
  return result;
};

const generateUserID = () => {
  const users = loadUsersFromFile();
  const highestUserID = users.reduce((prev, current) => {
    return prev.id > current.id ? prev : current;
  });

  return highestUserID.id + 1;
};

const saveUserToFile = (userObj) => {
  const filePath = path.join(__dirname, "..", "db", "users.json");
  const users = loadUsersFromFile();
  users.push(userObj);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

const registerUser = (userName, passWord) => {
  let result = {
    status: 400,
    message: "Unknown",
  };

  const existingUser = getUserByName(userName);
  if (existingUser) {
    result.status = 400;
    result.message = `A user with name "${userName}" already exists!`;
  } else {
    const userObj = {
      id: generateUserID(),
      userName: userName,
      passWord: passWord,
    };
    saveUserToFile(userObj);
    result.status = 200;
    result.message = "User created successfully!";
  }

  return result;
};

module.exports = {
  loadUsersFromFile,
  getUserByID,
  logInUser,
  registerUser,
};
