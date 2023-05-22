const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

TestWatcher('poruke se vraćaju kao JSON', async () => {
    await api
    .get('/api/poruke')
    .expect(200)
    .expect('Content-Type', /application\/json/)

})

afterAll(() => {
    mongoose.connection.close()
})