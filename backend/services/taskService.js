const tasks = require("../Data/taskData");

const getAllTask = () => tasks;

const getTaskById = (id) => tasks.find((t) => t.id == id);

const addTask = (title, priority) => {
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
    priority,
  };

  tasks.push(newTask);
  return newTask;
};

const deleteTask = (id) => {
  const initialLength = tasks.length;

  const filteredTasks = tasks.filter((t) => t.id !== id);

  tasks.length = 0;
  tasks.push(...filteredTasks);

  return tasks.length < initialLength;
};

const updateTask = (id, updatedTask) => {
  const existingTask = tasks.find((t) => t.id === id);

  if (!existingTask) return null;

  Object.assign(existingTask, updatedTask);

  return existingTask;
};

module.exports = {
  getAllTask,
  getTaskById,
  addTask,
  deleteTask,
  updateTask,
};
