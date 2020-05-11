module.exports = (sequelize, Sequelize) => {
		const Wilayah = sequelize.define('wilayah', {
				idwilayah: {
					type: Sequelize.INTEGER,
					primaryKey: true
				},
				namawilayah: Sequelize.STRING
		}, {
				freezeTableName: false,
				tableName: 'wilayah',
				timestamps: false
		})

		return Wilayah
}
