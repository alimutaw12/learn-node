'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('harga_dasar_ref', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      unit: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      jurnal_price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      tax_price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      source: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('harga_dasar_ref');
  }
};
