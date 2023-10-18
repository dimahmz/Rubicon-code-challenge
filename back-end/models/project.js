const mongoose = require("mongoose");
const { Schema } = mongoose;
const Joi = require("joi");

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

    ending_date: {
      type: Date,
    },

    starting_date: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

function validate(project) {
  const schema = Joi.object({
    label: Joi.string().max(255).required().label("label"),
    description: Joi.string().required().label("label"),
    ending_date: Joi.date().required().label("ending date"),
    starting_date: Joi.date().required().label("starting date"),
  });
  return schema.validate(project);
}

module.exports = { Project, ProjectSchema, validate };
