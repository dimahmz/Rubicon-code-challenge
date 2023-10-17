const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema(
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
      default: "",
    },

    ending_date: {
      type: Date,
    },

    starting_date: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = ProjectSchema;
