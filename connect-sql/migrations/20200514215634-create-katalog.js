'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('katalog', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      voltage_rating: {
        type: Sequelize.STRING(20)
      },
      pondation: {
        type: Sequelize.STRING(10)
      },
      book: {
        type: Sequelize.INTEGER
      },
      body_ext: {
        type: Sequelize.INTEGER
      },
      tower_type: {
        type: Sequelize.STRING(2)
      },
      pondation_class: {
        type: Sequelize.STRING(2)
      },
      link_doc: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('katalog');
  }
};
