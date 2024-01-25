const { Course, Student } = require('../models');

const getStudents = async () => Student.findAll({ include: { model: Course, as: 'course' } });

/* Aqui não precisamos conferir se o "idCourse" existe
    a definição da foreign key no banco vai emitir um erro se não existir 
*/
const createStudent = async ({ name, email, birthday, active, idCourse }) => {
  /* cria estudante */
  const createdStudent = await Student.create({ name, email, birthday, active, idCourse });

  /* separa idCourse dos demais dados da estudante */
  const { idCourse: idCourseOfStudent, ...student } = createdStudent.toJSON();

  /* recupera o curso */
  const course = await Course.findByPk(idCourseOfStudent);

  /* retorna um objeto com estudante sem o campo idCourse, mas com o campo course */
  return { ...student, course };
};

module.exports = {
  getStudents,
  createStudent,
};
