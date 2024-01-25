const studentService = require('../services/student.service');

const getStudents = async (req, res) => {
  const students = await studentService.getStudents();

  return res.status(200).json(students);
};

module.exports = { getStudents };