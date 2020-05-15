'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('data_input', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tower_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      circuit_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'circuit',
          key: 'id'
        },
        allowNull: false
      },
      voltage_rating_conductor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'voltage_rating_conductor',
          key: 'id'
        },
        allowNull: false
      },
      tower_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tower_type',
          key: 'id'
        },
        allowNull: false
      },
      body_extension_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'body_extension',
          key: 'id'
        },
        allowNull: false
      },
      excel_data_sondir: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      excel_harga_dasar: {
        type: Sequelize.TEXT('long'),
        allowNull: true,
      },
      session_id: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('data_input');
  }
};
