// src/index.js
const express = require("express");
const cors = require("cors");
const userRoutes = require("../routes/usersRoutes");
const authRoutes = require("../routes/authRoutes");
const statisticsRoutes = require("../routes/statistics");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Use route modules
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/statistics/", statisticsRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
