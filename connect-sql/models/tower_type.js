'use strict';
module.exports = (sequelize, DataTypes) => {
  const tower_type = sequelize.define('tower_type', {
    tower_type: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    tableName: 'tower_type',
  })
  return tower_type;
};
