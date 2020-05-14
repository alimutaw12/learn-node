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

db.tower_type = require('./tower_type.js')(sequelize, Sequelize)
db.body_extension = require('./body_extension.js')(sequelize, Sequelize)
db.voltage_rating_conductor = require('./voltage_rating_conductor.js')(sequelize, Sequelize)
db.circuit = require('./circuit.js')(sequelize, Sequelize)
db.data_input = require('./data_input.js')(sequelize, Sequelize)
db.harga_dasar_ref = require('./harga_dasar_ref.js')(sequelize, Sequelize)
db.katalog = require('./katalog.js')(sequelize, Sequelize)

// db.kendaraan.belongsTo(db.sopir, { foreignKey: 'karyawanNo', as:'sopir' })

module.exports = db
