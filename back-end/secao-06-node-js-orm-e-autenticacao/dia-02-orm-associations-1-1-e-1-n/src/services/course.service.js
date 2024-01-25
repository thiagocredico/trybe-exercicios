const { Course } = require('../models');

const createCourse = async ({ name, description, creationDate, active, duration }) => 
  Course.create({ name, description, creationDate, active, duration });

const getCourses = async () => Course.findAll();

const updateCourse = async (id, { name, description, creationDate, active, duration }) => {
  const [qtdUpdated] = await Course.update(
    { name, description, creationDate, active, duration },
    { where: { id } },
  );

  return qtdUpdated > 0;
};

const removeCourse = async (id) => {
  const qtdRemoved = await Course.destroy({ where: { id } });

  return qtdRemoved > 0;
};

const getById = async (id, withStudent) => {
  const course = await Course.findByPk(id);

  if (withStudent) {
    const students = await course.getStudents();
    course.dataValues.students = students;
  }
  return course;
};

module.exports = {
  createCourse,
  getCourses,
  updateCourse,
  removeCourse,
  getById,
};