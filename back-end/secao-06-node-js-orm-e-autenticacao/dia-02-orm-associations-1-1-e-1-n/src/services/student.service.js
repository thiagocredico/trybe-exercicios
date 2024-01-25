const { Op } = require('sequelize');
const { 
  Student,
  Course,
} = require('../models');

const getStudents = async () => Student.findAll(
  {
  include: { model: Course, as: 'course' },
  where: {
    [Op.or]: [
      { active: true },
    
    { [Op.and]: [
      { email: 'pessoa.estudante@betrybe.com' },
      { name: { [Op.like]: '%Pessoa Estudate%' } },
    ] },
    ],
  },
},
);

module.exports = { getStudents };
