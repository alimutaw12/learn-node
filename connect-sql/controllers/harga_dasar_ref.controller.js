const db = require("../models")
const HargaDasarRef = db.harga_dasar_ref

findAll = async () => {
		var result = {}
		var attributes = ['item', 'unit', 'jurnal_price', 'type', 'tax_price', 'source']
		result.material = await HargaDasarRef.findAll({ where:{ type:"material" }, attributes:attributes })
		result.upahTenagaKerja = await HargaDasarRef.findAll({ where:{ type:"tenaga kerja" }, attributes:attributes })
		result.sewaPeralatan = await HargaDasarRef.findAll({ where:{ type:"peralatan" }, attributes:attributes })

		return result
}

update = async (id, jurnal_price) => {
		var data = await HargaDasarRef.update({ jurnal_price:jurnal_price, tax_price:jurnal_price+(10/100*jurnal_price) }, { where: {id:id} })

		return data
}

updateMany = (requestObject) => {
	const promises = requestObject.forEach((item, i) => {
			Promise.resolve().then(() => update(item.id, item.jurnal_price))
	});

	const message = "success"
  return message;
}

exports.findAll = findAll
exports.update = update
exports.updateMany = updateMany
