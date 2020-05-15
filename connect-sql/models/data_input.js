'use strict';
module.exports = (sequelize, DataTypes) => {
  const data_input = sequelize.define('data_input', {
    project_name: DataTypes.STRING,
    tower_name: DataTypes.STRING,
    circuit_id: DataTypes.INTEGER,
    voltage_rating_conductor_id: DataTypes.INTEGER,
    tower_type_id: DataTypes.INTEGER,
    body_extension_id: DataTypes.INTEGER,
    excel_data_sondir: DataTypes.TEXT('long'),
    excel_harga_dasar: DataTypes.TEXT('long'),
    session_id: DataTypes.INTEGER
  }, {
    tableName: 'data_input'
  })
  return data_input;
};
