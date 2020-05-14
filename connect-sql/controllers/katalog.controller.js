const db = require("../models")
const Katalog = db.katalog

findAll = async () => {
		let result = await Katalog.findAll({})

		return result
}

getLinkDoc = async (id) => {
		let result = await Katalog.findByPk(id)

		return result.link_doc
}

exports.findAll = findAll
exports.getLinkDoc = getLinkDoc
