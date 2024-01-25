'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('courses', 'duration', {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: 'description',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('courses', 'duration');
  }
};
