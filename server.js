// 1h:11

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import the necessary modules
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Impport routes
const taskRouter = require("./routes/tasks");

// Create an express app
const app = express();

// Configure the app
app
  .use(express.json())
  .use(express.static(path.join(__dirname, "client", "build")));

// Set routes
app.use("/api/v1/tasks", taskRouter);

// Connect to the database
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

db.on("error", (err) => console.error(err));
db.once("open", () => {
  console.log("Connected to MongoDB");

  // Initialize server
  app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
