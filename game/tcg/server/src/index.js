// src/index.js
const express = require("express");
const userRoutes = require("../routes/usersRoutes");
const authRoutes = require("../routes/authRoutes");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use route modules
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
