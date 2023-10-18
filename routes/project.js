const express = require("express");
const router = express.Router();
const Responses = require("../helpers/responses");
const { Project, validate } = require("../models/project");
const ProjectController = require("../controllers/ProjectController");

// get all the projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).send(Responses.create(true, "", "", projects));
  } catch (e) {
    const response = Responses.serverError();
    console.error(e.message);
    res.status(500).send(response);
  }
});

// get one project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project)
      return res.status(200).send(Responses.create(true, "", "", project));
    res.status(404).send(Responses.create(false, "project doesn't exist"));
  } catch (e) {
    const response = Responses.serverError();
    console.error(e.message);
    res.status(500).send(response);
  }
});

// add a new project
router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res
        .status(400)
        .send(
          Responses.create(false, "invalid inputs", error.details[0].message)
        );
    }
    ProjectController.create(req, res);
  } catch (e) {
    console.error(e.message);
    return res.status(404).send(Responses.serverError());
  }
});

// update a project
router.put("/:id", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res
        .status(400)
        .send(
          Responses.create(false, "invalid inputs", error.details[0].message)
        );
    }
    ProjectController.update(req, res);
  } catch (e) {
    console.error(e.message);
    res.status(404).send(Responses.serverError());
  }
});

// delete a project
router.delete("/:id", async (req, res) => {
  try {
    ProjectController.delete(req, res);
  } catch (e) {
    const response = Responses.serverError();
    console.error(e.message);
    res.status(404).send(response);
  }
});

module.exports = router;
