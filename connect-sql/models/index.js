const path = require('path')
const dbConfigPath = require('../db-config.js')

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfigPath.database, dbConfigPath.user, dbConfigPath.password, {
		host: dbConfigPath.host,
		dialect: dbConfigPath.dialect,
		operatorsAliases: false
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.wilayah = require('./wilayah.model.js')(sequelize, Sequelize)
db.sopir = require('./sopir.model.js')(sequelize, Sequelize)
db.kendaraan = require('./kendaraan.model.js')(sequelize, Sequelize)
db.kendaraan.belongsTo(db.sopir, { foreignKey: 'karyawanNo', as:'sopir' })

module.exports = db
