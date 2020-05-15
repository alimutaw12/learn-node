'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const data = [
          { voltage_conductor:"150 kV 2X250", status: 1, createdAt: new Date(), updatedAt: new Date() },
          { voltage_conductor:"150 kV 2X450", status: 1, createdAt: new Date(), updatedAt: new Date() },
          { voltage_conductor:"150 kV 4X450", status: 1, createdAt: new Date(), updatedAt: new Date() },
          { voltage_conductor:"275 kV 2X450", status: 1, createdAt: new Date(), updatedAt: new Date() },
          { voltage_conductor:"275 kV 4X450", status: 1, createdAt: new Date(), updatedAt: new Date() },
          { voltage_conductor:"500 kV 4X450", status: 1, createdAt: new Date(), updatedAt: new Date() },
      ]

      return queryInterface.bulkInsert('voltage_rating_conductor', data)
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('voltage_rating_conductor', null, {})
  }
};
