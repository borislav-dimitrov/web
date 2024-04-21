if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const flash = require("express-flash");
const session = require("express-session");
const cors = require("cors");
const app = express();
const login = require("./routes/login");
const logout = require("./routes/logout");
const home = require("./routes/home");
const { verifySession } = require("./middleware/sessions");
const port = 3000;

global.usersDbFile = "./DataBase/usersDB.json";
global.usersDbObj = require(usersDbFile);

app.set("view-engine", "ejs");

// Middleware
app.use(flash());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.static(__dirname + "/static"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
// allow using the form parameters in the request
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", home);
app.use("/", login);
app.use("/", logout);

app.listen(port, () =>
  console.log(
    `Example app listening on port ${port}!\nhttp://localhost:${port}/login`
  )
);

process.stdin.resume(); // so the program will not close instantly

function exitHandler(options, exitCode) {
  if (options.cleanup) console.log("clean");
  if (exitCode || exitCode === 0) console.log(exitCode);
  if (options.exit) {
    process.exit();
  }
}

// do something when app is closing
process.on("exit", exitHandler.bind(null, { cleanup: true }));

// catches ctrl+c event
process.on("SIGINT", exitHandler.bind(null, { exit: true }));

// catches "kill pid" (for example: nodemon restart)
process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));

// catches uncaught exceptions
process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
