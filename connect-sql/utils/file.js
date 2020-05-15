const fs = require('fs')

const deleteFile = (path) => {
		fs.unlink(path, (error) => {
			if (error) {
				console.log(error)
				return
			}
		})
}

exports.deleteFile = deleteFile
