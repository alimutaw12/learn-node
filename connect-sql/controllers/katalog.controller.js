const db = require("../models")
const Katalog = db.katalog

findAll = async () => {
		let result = await Katalog.findAll({})

		return result
}

exports.findAll = findAll
