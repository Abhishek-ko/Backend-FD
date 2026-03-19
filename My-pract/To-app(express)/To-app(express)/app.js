const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

module.exports = app;