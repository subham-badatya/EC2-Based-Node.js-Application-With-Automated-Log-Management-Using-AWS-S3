const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// log file path
const logFilePath = path.join(__dirname, "app.log");

// middleware to log every request
app.use((req, res, next) => {
  const log = `${new Date().toISOString()} | ${req.method} | ${req.url}\n`;
  fs.appendFileSync(logFilePath, log);
  next();
});

// test route
app.get("/", (req, res) => {
  res.send("Node logging app is running 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
