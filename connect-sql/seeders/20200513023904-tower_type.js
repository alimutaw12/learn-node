'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const data = [
          { tower_type:"AA", status: 1, createdAt: new Date(), updatedAt: new Date() },
          { tower_type:"BB", status: 1, createdAt: new Date(), updatedAt: new Date() },
          { tower_type:"CC", status: 1, createdAt: new Date(), updatedAt: new Date() },
          { tower_type:"DD", status: 1, createdAt: new Date(), updatedAt: new Date() },
          { tower_type:"EE", status: 1, createdAt: new Date(), updatedAt: new Date() },
          { tower_type:"FF", status: 1, createdAt: new Date(), updatedAt: new Date() },
          { tower_type:"GG", status: 1, createdAt: new Date(), updatedAt: new Date() },
      ]

      return queryInterface.bulkInsert('tower_type', data)
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('tower_type', null, {})
  }
};
