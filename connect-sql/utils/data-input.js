const fillDataHargaDasar = (dataExcel, dataReferensi) => {
    dataExcel.forEach((item, i) => {
        if (item.jurnal_price === '[nilai default]') {
            referensi = dataReferensi.filter((ref) => item.item == ref.item)
            item.jurnal_price = referensi[0].dataValues.jurnal_price
            item.tax_price = referensi[0].dataValues.tax_price
            item.source = referensi[0].dataValues.source
        }
    });

    return dataExcel
}

exports.fillDataHargaDasar = fillDataHargaDasar
