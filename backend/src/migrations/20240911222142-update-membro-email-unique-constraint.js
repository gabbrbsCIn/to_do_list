'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("Membros", {
      fields: ['email'],
      type:'unique',
      name: 'membro_email_unique_constraint'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Membros', 'membro_email_unique_constraint');
  }
};
