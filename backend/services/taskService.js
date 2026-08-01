let students = require("../Data/taskData");

const getAllStudents = () => students;

const getStudentById = (id) => students.find((s) => s.id == id);

const addStudent = (title, completed, priority) => {
  const newStudent = {
    id: students.length + 1,
    title,
    completed,
    priority,
  };

  students.push(newStudent);
  return newStudent;
};

const deleteStudent = (id) => {
  const initialLength = students.length;

  students = students.filter((s) => s.id !== id);

  return students.length < initialLength;
};
const updateStudent = (id, updatedData) => {
  const student = students.find((s) => s.id === id);

  if (!student) return null;

  Object.assign(student, updatedData);

  return student;
};
module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  deleteStudent,
  updateStudent,
};
