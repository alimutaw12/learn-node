const request = require('supertest')
const app = require('../src/app')
const { taskOneId, taskOne, taskTwoId, taskTwo, userOneId, userOne, setupDatabase } = require('./fixtures/db')
const Task = require('../src/models/task')

beforeEach(async () => {
		await setupDatabase()
})

test('Should create task for a user', async () => {
		const response = await request(app).post('/tasks')
				.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
				.send({
						description:'Coding'
				})
				.expect(201)

		const task = await Task.findById(response.body._id)
		expect(task).not.toBeNull()

		expect(task.completed).toBe(false)
})

test('Should fetch user tasks', async () => {
		const response = await request(app).get('/tasks')
				.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
				.expect(200)

		expect(response.body.length).toEqual(2)
})

test('Should delete task not success', async () => {
		const response = await request(app).delete(`/tasks/${taskTwoId}`)
				.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
				.expect(404)

		const task = await Task.findById(taskTwoId)
		expect(task).not.toBeNull()
})
