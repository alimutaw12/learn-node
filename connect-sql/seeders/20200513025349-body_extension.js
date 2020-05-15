'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const data = [
          { body_extension:6, status: 1, createdAt: new Date(), updatedAt: new Date() },
          { body_extension:9, status: 1, createdAt: new Date(), updatedAt: new Date() },
          { body_extension:15, status: 1, createdAt: new Date(), updatedAt: new Date() },
      ]

      return queryInterface.bulkInsert('body_extension', data)
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('body_extension', null, {})
  }
};
