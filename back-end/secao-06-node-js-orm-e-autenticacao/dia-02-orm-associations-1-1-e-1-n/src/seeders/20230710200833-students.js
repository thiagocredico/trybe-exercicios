'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students',
      [
        {
          name: 'Pessoa Estudante',
          email: 'pessoa.estudante@betrybe.com',
          birthday: '1983-10-21T07:00:00',
          active: true,
          id_course: 1,
        },
        {
          name: 'Pessoa Estudante 2',
          email: 'pessoa.estudante.2@betrybe.com',
          birthday: '1994-06-21T07:00:00',
          active: true,
          id_course: 1,
        },
        {
          name: 'Pessoa Estudante 3',
          email: 'pessoa.estudante.3@betrybe.com',
          birthday: '1996-06-21T07:00:00',
          active: false,
          id_course: 1,
        },
        {
          name: 'Pessoa Estudante 22',
          email: 'pessoa.estudante.22@betrybe.com',
          birthday: '1988-06-21T07:00:00',
          active: false,
          id_course: 1,
        },
      ],

		
      {}
    );
  },

  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});
  },
};