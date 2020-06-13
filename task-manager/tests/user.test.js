const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')
const { userOneId, userOne, setupDatabase } = require('./fixtures/db')

beforeEach(async () => {
		await setupDatabase()
})

test('Signup a new user', async () => {
		const response = await request(app).post('/users').send({
				name: 'Ali',
				email: 'alimutaw123@gmail.com',
				password: 'MyPass777'
		}).expect(201)

		/*Assert that the database was changed correctly*/
		const user = await User.findById(response.body.user._id)
		expect(user).not.toBeNull()

		/*Assertion about the response*/
		expect(response.body).toMatchObject({
				user: {
						name: 'Ali',
						email: 'alimutaw123@gmail.com'
				},
				token: user.tokens[0].token
		})
		expect(user.password).not.toBe('MyPass777')
})

test('Login existing user', async () => {
		const response = await request(app).post('/users/login').send({
				email: userOne.email,
				password: userOne.password
		}).expect(200)

		const user = await User.findById(userOneId)
		expect(response.body.token).toBe(user.tokens[1].token)
})

test('Login nonexisting user', async () => {
		await request(app).post('/users/login').send({
				email: 'gajah@gmail.com',
				password: 'postGajah123!'
		}).expect(400)
})

test('Should get profile a user', async () => {
		await request(app).get('/users/me')
				.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
				.send()
				.expect(200)
})

test('Should not get profile a unauthorization user', async () => {
		await request(app).get('/users/me')
				.send()
				.expect(401)
})

test('Should delete account a user', async () => {
		await request(app).delete('/users/me')
				.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
				.send()
				.expect(200)

		const user = await User.findById(userOneId)
		expect(user).toBeNull()
})

test('Should not delete account a unauthorization user', async () => {
		await request(app).delete('/users/me')
				.send()
				.expect(401)
})

test('Should upload avatar image', async () => {
		await request(app).post('/users/me/avatar')
				.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
				.attach('avatar', 'tests/fixtures/avatar.jpg')
				.expect(200)

		const user = await User.findById(userOneId)
		expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user fields', async () => {
		await request(app).patch('/users/me')
				.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
				.send({ name:'Polic', age:2 })
				.expect(200)

		const user = await User.findById(userOneId)
		expect(user).toMatchObject({
				name: 'Polic',
				age: 2
		})
})

test('Should update invalid user fields', async () => {
		await request(app).patch('/users/me')
				.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
				.send({ location:'Cisitu Indah' })
				.expect(400)
})
