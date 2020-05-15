'use strict';
module.exports = (sequelize, DataTypes) => {
  const voltage_rating_conductor = sequelize.define('voltage_rating_conductor', {
    voltage_conductor: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    tableName: 'voltage_rating_conductor',
  })
  return voltage_rating_conductor;
};
