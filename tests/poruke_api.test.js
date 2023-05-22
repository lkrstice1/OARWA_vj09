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

test('imamo dvije poruke', async () => {
    const odgovor = await api.get('/api/poruke')

    expect(odgovor.body).toHaveLength(2)
})

test('Prva poruka je o mongooseu', async () => {
    const odgovor = await api.get('/api/poruke')

    expect(odgovor.body[0].sadrzaj).toBe('Mongoose poruka')
})

afterAll(() => {
    mongoose.connection.close()
})