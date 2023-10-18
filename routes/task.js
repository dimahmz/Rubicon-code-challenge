const express = require("express");
const router = express.Router();
const Responses = require("../helpers/responses");
const { Task, validate } = require("../models/task");
const TaskController = require("../controllers/TaskController");
const { default: mongoose } = require("mongoose");

// get all the Tasks
router.get("/", async (req, res) => {
  try {
    const $tasks = await Task.find({}).populate("project");
    res.status(200).send(Responses.create(true, "", "", $tasks));
  } catch (e) {
    const response = Responses.serverError();
    console.error(e.message);
    res.status(500).send(response);
  }
});

// get one Task
router.get("/:id", async (req, res) => {
  try {
    const $task = await Task.findById(req.params.id).populate("project");
    if ($task)
      return res.status(200).send(Responses.create(true, "", "", $task));
    res.status(404).send(Responses.create(false, "Task doesn't exist"));
  } catch (e) {
    const response = Responses.serverError();
    console.error(e.message);
    res.status(500).send(response);
  }
});

// add a new Task
router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res
        .status(400)
        .send(Responses.create(false, error.details[0].message));
    }
    if (!mongoose.Types.ObjectId.isValid(req.body.project_id)) {
      return res
        .status(400)
        .send(Responses.create(false, "project id is invalid"));
    }

    TaskController.create(req, res);
  } catch (e) {
    console.error(e.message);
    return res.status(404).send(Responses.serverError());
  }
});

// update a Task
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
    TaskController.update(req, res);
  } catch (e) {
    console.error(e.message);
    res.status(404).send(Responses.serverError());
  }
});

// delete a Task
router.delete("/:id", async (req, res) => {
  try {
    TaskController.delete(req, res);
  } catch (e) {
    const response = Responses.serverError();
    console.error(e.message);
    res.status(404).send(response);
  }
});

module.exports = router;
