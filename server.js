if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import the necessary modules
const express = require("express");

// Impport routes
const taskRouter = require("./routes/tasks");

// Create an express app
const app = express();

// Configure the app
app.use(express.json());

// Set routes
app.use("/api/v1/tasks", taskRouter);

// Initialize server
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
