const db = require("../models")
const DataInput = db.data_input

create = async (req, dataSondirJson, hargaDasarJson) => {
		let result = await DataInput.create({
				project_name: req.projectName,
				tower_name: req.towerName,
				circuit_id : req.circuitId,
				voltage_rating_conductor_id : req.voltageRatingConductorId,
				tower_type_id : req.towerTypeId,
				body_extension_id : req.bodyExtensionId,
				excel_data_sondir: JSON.stringify(dataSondirJson),
				excel_harga_dasar: JSON.stringify(hargaDasarJson),
				session_id: 1
		})

		return result
}

findAll = async () => {
		let dataInput = await DataInput.findAll({})

		return dataInput
}

exports.findAll = findAll
exports.create = create
