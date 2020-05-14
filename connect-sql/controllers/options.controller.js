const db = require("../models")
const TowerType = db.tower_type
const BodyExtension = db.body_extension
const VoltageRatingConductor = db.voltage_rating_conductor
const Circuit = db.circuit
const Katalog = db.katalog
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

optionFilter = async () => {
    var options = {}
    var pondation = await Katalog.findAll({ attributes:['pondation'], group: ['pondation'] })
    options.pondation = []
    pondation.forEach((item, i) => {
        options.pondation.push(item.pondation)
    });

    var book = await Katalog.findAll({ attributes:['book'], group: ['book'] })
    options.book = []
    book.forEach((item, i) => {
        options.book.push(item.book)
    });

    var voltage_rating = await Katalog.findAll({ attributes:['voltage_rating'], group: ['voltage_rating'] })
    options.voltage_rating = []
    voltage_rating.forEach((item, i) => {
        options.voltage_rating.push(item.voltage_rating)
    });

    var tower_type = await Katalog.findAll({ attributes:['tower_type'], group: ['tower_type'] })
    options.tower_type = []
    tower_type.forEach((item, i) => {
        options.tower_type.push(item.tower_type)
    });

    var body_ext = await Katalog.findAll({ attributes:['body_ext'], group: ['body_ext'] })
    options.body_ext = []
    body_ext.forEach((item, i) => {
        options.body_ext.push(item.body_ext)
    });

    var pondation_class = await Katalog.findAll({ attributes:['pondation_class'], group: ['pondation_class'] })
    options.pondation_class = []
    pondation_class.forEach((item, i) => {
        options.pondation_class.push(item.pondation_class)
    });

    return options
}

exports.optionDataInput = optionDataInput
exports.optionFilter = optionFilter
