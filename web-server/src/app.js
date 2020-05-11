const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

/*setup handlebars engine and customizing view directory*/
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

/*setup static directory*/
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
		res.render("index", {
				title: "Weather App",
				name: "ali"
		})
})

app.get('/weather', (req, res) => {
		if (!req.query.address) {
				return res.send({
						error: "You must provide a address"
				})
		}

		geocode(req.query.address, (error, {longitude, latitude, location} = {}) => {
				if (error) {
						return res.send({
								error: error
						})
				} else {
						forecast(longitude, latitude, (error, {temperature, precip} = {}) => {
								if (error) {
										return res.send({
												error: error
										})
								} else {
										res.send({
												temperature,
												precip,
												location,
												address: req.query.address
										})
								}
						})
				}
		})
})

/*taruh dibawah karna pengecekan dari atas sampai ada yang match*/
app.get("*", (req, res) => {
		res.send("My 404 page")
})

app.listen(3000, () => {
		console.log("Server is up on port 3000")
})
