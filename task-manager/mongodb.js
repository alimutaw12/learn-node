// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser:true }, (error, client) => {
		if (error) {
				return console.log("Unable to connect to database")
		}

		const db = client.db(databaseName)

		// const updatePromise = db.collection('users').updateOne({
		// 		name:"ali"
		// }, {
		// 		$set: {
		// 				name: "aliya"
		// 		}
		// })
		//
		// updatePromise.then((result) => {
		// 		console.log(result)
		// }).catch((error) => {
		// 		console.log(error)
		// })

		db.collection('users').deleteMany({
				age: 19
		}).then((result) => {
				console.log(result)
		}).catch((error) => {
				console.log(error)
		})
})
