const request = require('request')

const forecast = (longitude, latitude, callback) => {
		const url = 'http://api.weatherstack.com/current?access_key=e4c17b7da77e853c4df6db20e40e14ef&query='+ latitude +','+ longitude +''
		request({ url, json:true }, (error, response) => {
				if (error) {
						callback("Unable to connect weather app", undefined)
				} else if (response.body.error) {
						callback("Unable to find location", undefined)
				} else {
						callback(undefined, {
							temperature:response.body.current.temperature,
							precip:response.body.current.precip,
						})
				}
		})
}

module.exports = forecast
