const taskService = require("../services/taskService");

const getAll = (req, res) => {
  const result = taskService.getAllTask();
  res.json(result);
};

const getOne = (req, res) => {
  const id = parseInt(req.params.id);

  const task = taskService.getTaskById(id);

  if (!task) {
    return res.status(404).json({ message: "Task is not found" });
  }

  res.json(task);
};

const create = (req, res) => {
  const { title, priority } = req.body;

  if (!title || !priority) {
    return res.status(400).json({ message: "Missing Task" });
  }

  const newTask = taskService.addTask(title, priority);

  res.status(201).json(newTask);
};

const remove = (req, res) => {
  const id = parseInt(req.params.id);

  const deleted = taskService.deleteTask(id);

  if (!deleted) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({ message: "Task deleted" });
};

const update = (req, res) => {
  const id = parseInt(req.params.id);

  const updatedTask = taskService.updateTask(id, req.body);

  if (!updatedTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(updatedTask);
};

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};
