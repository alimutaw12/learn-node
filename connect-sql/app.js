const express = require('express')
const bodyParser = require('body-parser');
const multer = require('multer')
const options = require("./controllers/options.controller.js")
const data_input = require("./controllers/data_input.controller.js")
const harga_dasar_ref = require("./controllers/harga_dasar_ref.controller.js")
const katalog = require("./controllers/katalog.controller.js")
const dataSondirUtil = require("./utils/data-sondir.js")
const hargaDasarUtil = require("./utils/harga-dasar.js")
const fileUtil = require("./utils/file.js")
const dataInputUtil = require("./utils/data-input.js")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'storage/excel/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) //Appending extension
  }
})

const upload = multer({ storage: storage })

const app = express()

app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
		console.log(req)
})

app.get('/katalog/all', (req, res) => {
    katalog.findAll().then((result) => {
        res.send(result)
    }).catch((error) => {
        res.send(error)
    })
})

app.get('/katalog/filter', (req, res) => {
		options.optionFilter().then((result) => {
        res.send(result)
    }).catch((error) => {
        res.send(error)
    })
})

app.post('/kalkulasi', upload.any(), (req, res) => {
		const files = req.files
		const dataSondir = files.filter((file) => file.fieldname == 'dataSondir')
		const hargaDasar = files.filter((file) => file.fieldname == 'hargaDasar')
    var dataSondirJson = dataSondirUtil.dataSondirJsonFromExcel(dataSondir[0].path)
    var hargaDasarJson = {}
		var hargaDasarIsExist = true
    if (hargaDasar[0] === undefined) {
        hargaDasarIsExist = false
    } else {
        hargaDasarJson = hargaDasarUtil.hargaDasarJsonFromExcel(hargaDasar[0].path)
    }

    harga_dasar_ref.findAll().then((hargaDasarRef) => {
        if (hargaDasarIsExist == false) {
            hargaDasarJson = hargaDasarRef
        } else {
            hargaDasarJson.material = dataInputUtil.fillDataHargaDasar(hargaDasarJson.material, hargaDasarRef.material)
            hargaDasarJson.upahTenagaKerja = dataInputUtil.fillDataHargaDasar(hargaDasarJson.upahTenagaKerja, hargaDasarRef.upahTenagaKerja)
            hargaDasarJson.sewaPeralatan = dataInputUtil.fillDataHargaDasar(hargaDasarJson.sewaPeralatan, hargaDasarRef.sewaPeralatan)
        }

        return data_input.create(req.body, dataSondirJson, hargaDasarJson)
    }).then((result) => {
        fileUtil.deleteFile(dataSondir[0].path)

        if (hargaDasar[0] !== undefined) {
          fileUtil.deleteFile(hargaDasar[0].path)
        }
        res.send(result)
    }).catch((error) => {
        res.send(error)
    })
})

app.post('/kalkulasi/update-harga-referensi', (req, res) => {
    Promise.all(harga_dasar_ref.updateMany(req.body)).then((result) => {
        res.send("success")
    }).catch((error) => {
        res.send(error)
    })
})

app.get('/kalkulasi/option', (req, res) => {
		options.optionDataInput().then((result) => {
        res.send(result)
    }).catch((error) => {
        res.send(error)
    })
})

app.get('/kalkulasi/download-referensi-data-sondir', (req, res) => {
		const path = './storage/excel/referensi/formatSondirEdit.xls'
    res.download(path)
})

app.get('/kalkulasi/download-referensi-harga-dasar', (req, res) => {
    const path = './storage/excel/referensi/hargaSatuanEdit.xls'
    res.download(path)
})

app.listen(3000, () => {
		console.log("Server is up on port 3000")
})
