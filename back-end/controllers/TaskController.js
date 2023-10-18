const Responses = require("../helpers/responses");
const { Task } = require("../models/task");

class TaskController {
  static async create(req, res) {
    const { label, description, starting_date, ending_date, project_id } =
      req.body;
    try {
      const $task = await Task.create({
        label,
        description,
        starting_date,
        ending_date,
        project: project_id,
      });
      res.send(Responses.create(true, "Task has been updated", "", $task));
    } catch (e) {
      console.error(e.message);
      return res.status(404).send(Responses.serverError());
    }
  }
  static async update(req, res) {
    const { label, description, starting_date, ending_date, project_id } =
      req.body;
    try {
      const $task = await Task.replaceOne(
        {
          _id: req.params.id,
        },
        {
          label,
          description,
          starting_date,
          ending_date,
          project_id,
        }
      );
      res.send(
        Responses.create(true, "Task has been created", "", {
          label,
          description,
          starting_date,
          ending_date,
          project_id,
        })
      );
    } catch (e) {
      console.error(e.message);
      return res.status(404).send(Responses.serverError());
    }
  }

  static async delete(req, res) {
    try {
      const $task = await Task.findOneAndDelete({
        _id: req.params.id,
      });
      if (!$task)
        return res
          .status(400)
          .send(Responses.create(false, "Task doesn't exist"));
      res.send(Responses.create(true, "Task has been deleted"));
    } catch (e) {
      console.error(e.message);
      return res.status(404).send(Responses.serverError());
    }
  }
}

module.exports = TaskController;
