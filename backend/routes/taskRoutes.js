const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const Task = require("../models/Task");

// GET method: retrieves the tasks for the logged on user
router.get("/", protect, async (req, res) => {
  // only return tasks that belong to this account
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// POST method: creates new task
router.post("/", protect, async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required." });
  }

  const task = await Task.create({
    title,
    description,
    user: req.user.id,
  });

  res.status(201).json(task);
});

//PUT method: update a task
router.put("/:id", protect, async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found." });
  }

  // makes sure the task belongs to the logged on account
  if (task.user.toString() !== req.user.id) {
    return res.status(401).json({ message: "Not authorized." });
  }

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.completed = req.body.completed ?? task.completed;

  const updated = await task.save();
  res.json(updated);
});

// DELETE method: deletes a task
router.delete("/:id", protect, async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found." });
  }

  // makes sure the task belongs to the logged on user
  if (task.user.toString() !== req.user.id) {
    return res.status(401).json({ message: "Not authorized." });
  }

  await task.deleteOne();
  res.json({ message: "Task deleted successfully." });
});

module.exports = router;
