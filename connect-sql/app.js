const express = require('express')
const kendaraan = require("./controllers/kendaraan.controller.js")
const app = express()

// app.get('/', kendaraan.findAll)
app.get('/', (req, res) => {
		kendaraan.findAll(req).then((data) => {
				res.send(data)
		}).catch((e) => {
				res.send(e)
		})
})

app.listen(3000, () => {
		console.log("Server is up on port 3000")
})
