const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema(
  {
    label: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "in Progress",
    },

    ending_date: {
      type: Date,
    },

    starting_date: {
      type: Date,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = TaskSchema;

// projects: [{ type: Schema.Types.objectId, ref: "Project" }],
