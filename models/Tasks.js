const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true,
  },
  Completed: {
    type: Boolean,
    default: false,
  },
  DueDate: {
    type: Date,
    default: () => new Date(),
  },
  Priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Low",
  },
  Notes: {
    type: String,
    minlength: 3,
    maxlength: 200,
    default: "",
  },
  Created: {
    type: Date,
    default: () => new Date(),
    imutable: true,
  },
  Modified: {
    type: Date,
    default: () => new Date(),
  },
});

module.exports = mongoose.model("Task", TaskSchema);
