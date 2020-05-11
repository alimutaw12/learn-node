const request = require('request')

const geocode = (address, callback) => {
		const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?limit=1&access_token=pk.eyJ1IjoiYWxpbXV0YXcxMiIsImEiOiJjazl6bXR2MWQwZGp2M2Vwank5amE3aDc2In0.B4w2G2DuorNyyr187tZ3BQ'
		request({ url, json:true }, (error, response) => {
				if (error) {
						callback("Unable to connect location service", undefined)
				} else if (response.body.features.length === 0) {
						callback("Unable to find location. Try another search", undefined)
				} else {
						callback(undefined, {
								longitude: response.body.features[0].center[0],
								latitude: response.body.features[0].center[1],
								location: response.body.features[0].place_name,
						})
				}
		})
}

module.exports = geocode
