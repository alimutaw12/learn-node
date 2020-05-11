module.exports = (sequelize, Sequelize) => {
		const Sopir = sequelize.define('sopir', {
				karyawanNo: {
						type: Sequelize.INTEGER,
						primaryKey: true
				},
				noSIM: Sequelize.STRING(50),
				kedaluwarsaSIM: Sequelize.DATEONLY,
		}, {
				freezeTableName: false,
				tableName: 'sopir',
				timestamps: false
		})

		return Sopir
}
