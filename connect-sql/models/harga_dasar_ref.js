'use strict';
module.exports = (sequelize, DataTypes) => {
  const harga_dasar_ref = sequelize.define('harga_dasar_ref', {
    item: DataTypes.STRING(500),
    unit: DataTypes.STRING(50),
    jurnal_price: DataTypes.FLOAT,
    tax_price: DataTypes.FLOAT,
    source: DataTypes.STRING,
    type: DataTypes.STRING(100)
  }, {
    tableName: 'harga_dasar_ref'
  });
  return harga_dasar_ref;
};
