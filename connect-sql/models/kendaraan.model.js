module.exports = (sequelize, Sequelize) => {
		const Kendaraan = sequelize.define('kendaraan', {
				nomorPlat: {
						type: Sequelize.STRING(10),
						primaryKey: true
				},
				nama: Sequelize.STRING(50),
				merk: Sequelize.STRING(50),
				karyawanNo: Sequelize.INTEGER,
		}, {
				freezeTableName: false,
				tableName: 'kendaraan',
				timestamps: false
		})

		return Kendaraan
}
