const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
		_id: userOneId,
		name: 'Rudy',
		email: 'rudy@example.com',
		password: 'myPass112!!',
		tokens: [{
				token: jwt.sign({ _id:userOneId }, process.env.JWT_SECRET)
		}]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
		_id: userTwoId,
		name: 'Juent',
		email: 'juent@example.com',
		password: 'myPass112!!',
		tokens: [{
				token: jwt.sign({ _id:userTwoId }, process.env.JWT_SECRET)
		}]
}

const taskOneId = new mongoose.Types.ObjectId()
const taskOne = {
		_id: taskOneId,
		description: 'Coding',
		owner: userOneId
}

const taskTwoId = new mongoose.Types.ObjectId()
const taskTwo = {
		_id: taskTwoId,
		description: 'Coding',
		owner: userTwoId
}

const taskThreeId = new mongoose.Types.ObjectId()
const taskThree = {
		_id: taskThreeId,
		description: 'Coding',
		owner: userOneId
}

const setupDatabase = async () => {
		await User.deleteMany()
		await new User(userOne).save()
		await new User(userTwo).save()
		await Task.deleteMany()
		await new Task(taskOne).save()
		await new Task(taskTwo).save()
		await new Task(taskThree).save()
}

module.exports = {
		taskOneId,
		taskOne,
		taskTwoId,
		taskTwo,
		userOneId,
		userOne,
		setupDatabase
}
