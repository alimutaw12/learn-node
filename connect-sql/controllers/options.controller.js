const db = require("../models")
const TowerType = db.tower_type
const BodyExtension = db.body_extension
const VoltageRatingConductor = db.voltage_rating_conductor
const Circuit = db.circuit
const Op = db.Sequelize.Op
const path = require('path')

optionDataInput = async () => {
    var options = {}
    let tower_type = await TowerType.findAll({})
    let body_extension = await BodyExtension.findAll({})
    let voltage_rating_conductor = await VoltageRatingConductor.findAll({})
    let circuit = await Circuit.findAll({})

    options.tower_type = tower_type
    options.body_extension = body_extension
    options.voltage_rating_conductor = voltage_rating_conductor
    options.circuit = circuit

    return options
}

exports.optionDataInput = optionDataInput
