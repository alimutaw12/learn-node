'use strict';
module.exports = (sequelize, DataTypes) => {
  const body_extension = sequelize.define('body_extension', {
    body_extension: DataTypes.INTEGER(1),
    status: DataTypes.BOOLEAN
  }, {
    tableName: 'body_extension',
  })
  return body_extension;
};
