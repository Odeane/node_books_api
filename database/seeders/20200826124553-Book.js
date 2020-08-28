'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {})
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'Learn NodeJS with Craft Academy - in test',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Learn Sequelize with Adi - in test',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {})
  }
};
