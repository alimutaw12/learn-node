'use strict';
const excelToJson = require('convert-excel-to-json');

const hargaDasarJsonFromExcel = (path) => {
    const rok = excelToJson({ sourceFile: path, range: 'D7', columnToKey: { D: 'rok' } })
    var dataMaterial = excelToJson({
        sourceFile: path, header: { rows: 10 }, range: 'B11:D30',
    		columnToKey: { B: 'item', C: 'unit', D: 'jurnal_price' }
    })
    var dataUpahTenagaKerja = excelToJson({
        sourceFile: path, header: { rows: 33 }, range: 'B34:D43',
    		columnToKey: { B: 'item', C: 'unit', D: 'jurnal_price' }
    })
    var dataSewaPeralatan = excelToJson({
        sourceFile: path, header: { rows: 46 }, range: 'B47:D54',
    		columnToKey: { B: 'item', C: 'unit', D: 'jurnal_price' }
    })

    dataMaterial = fillData(dataMaterial['Harga Dasar'], rok['Harga Dasar'][0].rok, 'material')
    dataUpahTenagaKerja = fillData(dataUpahTenagaKerja['Harga Dasar'], rok['Harga Dasar'][0].rok, 'tenaga kerja')
    dataSewaPeralatan = fillData(dataSewaPeralatan['Harga Dasar'], rok['Harga Dasar'][0].rok, 'peralatan')

    var result = {}

    result.material = dataMaterial
    result.upahTenagaKerja = dataUpahTenagaKerja
    result.sewaPeralatan = dataSewaPeralatan

    return result
}

const fillData = (data, rok, type) => {
    data.forEach((item, i) => {
        if (item.jurnal_price !== '[nilai default]') {
            item.tax_price = item.jurnal_price + (rok/100)*item.jurnal_price
            item.source = 'excel'
        }
        item.type = type
    });

    return data
}

exports.hargaDasarJsonFromExcel = hargaDasarJsonFromExcel
