const { Course, Student, Module, sequelize } = require('../models');

const createCourse = async ({ 
  name, 
  description, 
  creationDate, 
  active, 
  duration, 
  modules, 
}) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const newCourse = await Course.create(
        { name, description, creationDate, active, duration, modules }, 
        { 
          transaction: t, 
          include: [
            { model: Module, as: 'modules' },
  
          ],
        },
      );
      return newCourse;
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCourses = async () => Course.findAll({ 
  include: [
    { model: Student, as: 'students', attributes: { exclude: 'idCourse' } },
    { model: Module,
      as: 'modules',
      through: {
        attributes: { exclude: ['idCourse', 'idModule'] } } },
  ], 
});

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

module.exports = {
  createCourse,
  getCourses,
  updateCourse,
  removeCourse,
};