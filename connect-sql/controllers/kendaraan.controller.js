const db = require("../models")
const Kendaraan = db.kendaraan
const Sopir = db.sopir
const Op = db.Sequelize.Op
const path = require('path')

// Retrieve all Tutorials from the database.
const findAll = async (req) => {
    // const result = 123
    // return result
    limit = 10
    condition = {}
    if (req.query.nama !== undefined && req.query.nama !== '') {
        condition['nama'] = req.query.nama.split("-")
    }

    if (req.query.merk !== undefined && req.query.merk !== '') {
        condition.merk = req.query.merk.split("-")
    }
    condition['merk'].push("isNull")

    if (req.query.page === undefined || req.query.page === '') {
        page = 0
    } else {
        page = req.query.page-1
    }

    let kendaraan = await Kendaraan.findAll({ where:condition, limit:limit, offset:page*limit })

    return kendaraan
}

exports.findAll = findAll
