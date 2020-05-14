'use strict';
module.exports = (sequelize, DataTypes) => {
  const katalog = sequelize.define('katalog', {
    title: DataTypes.STRING,
    voltage_rating: DataTypes.STRING(20),
    pondation: DataTypes.STRING(10),
    book: DataTypes.INTEGER,
    body_ext: DataTypes.INTEGER,
    tower_type: DataTypes.STRING(2),
    pondation_class: DataTypes.STRING(2),
    link_doc: DataTypes.STRING
  }, {
    tableName:'katalog'
  });
  katalog.associate = function(models) {
    // associations can be defined here
  };
  return katalog;
};
