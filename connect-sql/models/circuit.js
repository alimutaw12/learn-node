'use strict';
module.exports = (sequelize, DataTypes) => {
  const circuit = sequelize.define('circuit', {
    circuit: DataTypes.INTEGER(1),
    status: DataTypes.BOOLEAN
  }, {
    tableName: 'circuit',
  });
  return circuit;
};
