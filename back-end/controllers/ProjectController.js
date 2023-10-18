const Responses = require("../helpers/responses");
const { Project } = require("../models/project");

class ProjectController {
  static async create(req, res) {
    const { label, description, starting_date, ending_date, status } = req.body;
    try {
      const $project = await Project.create({
        label,
        description,
        starting_date,
        ending_date,
        status,
      });
      res.send(
        Responses.create(true, "Project has been updated", "", $project)
      );
    } catch (e) {
      console.error(e.message);
      return res.status(404).send(Responses.serverError());
    }
  }
  static async update(req, res) {
    const { label, description, starting_date, ending_date, status } = req.body;
    try {
      const $project = await Project.replaceOne(
        {
          _id: req.params.id,
        },
        {
          label,
          description,
          starting_date,
          ending_date,
          status,
        }
      );
      res.send(
        Responses.create(true, "Project has been created", "", {
          label,
          description,
          starting_date,
          ending_date,
          status,
        })
      );
    } catch (e) {
      console.error(e.message);
      return res.status(404).send(Responses.serverError());
    }
  }

  static async delete(req, res) {
    try {
      const $project = await Project.findOneAndDelete({
        _id: req.params.id,
      });
      if (!$project)
        return res
          .status(400)
          .send(Responses.create(false, "Project doesn't exist"));
      res.send(Responses.create(true, "Project has been deleted"));
    } catch (e) {
      console.error(e.message);
      return res.status(404).send(Responses.serverError());
    }
  }
}

module.exports = ProjectController;
