const studentService = require("../services/taskService");
const getAll = (req, res) => {
  const result = studentService.getAllStudents();
  res.json(result);
};
const getOne = (req, res) => {
  const id = parseInt(req.params.id);
  const student = studentService.getStudentById(id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  res;
};
const create = (req, res) => {
  const { title, completed, priority } = req.body;
  if (!title || completed === undefined || !priority)
    return res.status(400).json({ message: "Missing data" });
  const newStudent = studentService.addStudent(title, completed, priority);
  res.status(201).json(newStudent);
};
const remove = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = studentService.deleteStudent(id);
  if (!deleted) return res.status(404).json({ message: "Student not found" });
  res.json({ message: "Student deleted" });
};
const update = (req, res) => {
  const id = parseInt(req.params.id);

  const updatedStudent = studentService.updateStudent(id, req.body);

  if (!updatedStudent) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(updatedStudent);
};
module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};
