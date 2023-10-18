const Joi = require("joi");
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
    starting_date: {
      type: Date,
      default: false,
    },
    ending_date: {
      type: Date,
    },

    project: { type: Schema.Types.ObjectId, ref: "Project" },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);

function validate(project) {
  const schema = Joi.object({
    label: Joi.string().max(255).required().label("label"),
    description: Joi.string().required().label("description"),
    ending_date: Joi.date().required().label("ending date"),
    starting_date: Joi.date().required().label("starting date"),
    project_id: Joi.string().required().label("project id"),
  });
  return schema.validate(project);
}

module.exports = { TaskSchema, Task, validate };
