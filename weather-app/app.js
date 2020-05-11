const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const address = process.argv[2]

if (!address) {
		console.log("Please provide an address")
} else {
		/*ES6 syntax*/
		geocode(address, (error, {longitude, latitude, location} = {}) => {
				if (error) {
						console.log(error)
				} else {
						forecast(longitude, latitude, (error, {temperature, precip} = {}) => {
								if (error) {
										console.log(error)
								} else {
										console.log("temperature : " + temperature + " precip : " + precip + "%")
								}
						})
				}
		})
}
