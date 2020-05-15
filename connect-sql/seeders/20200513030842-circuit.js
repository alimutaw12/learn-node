'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const data = [
          { circuit:2, status: 1, createdAt: new Date(), updatedAt: new Date() },
          { circuit:4, status: 1, createdAt: new Date(), updatedAt: new Date() },
      ]

      return queryInterface.bulkInsert('circuit', data)
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('circuit', null, {})
  }
};
