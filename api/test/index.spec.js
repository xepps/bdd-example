const test = require('tape')
const request = require('supertest')
const app = require('../app')

test('Check correct sum is returned', (t) => {
  const equation = encodeURIComponent('2+2')

  request(app)
    .get(`/calc/${equation}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No error')
      t.same(res.body.result, 4, 'Sum Calculated correctly')
      t.end()
    })
})

test('Check subtraction is returned correctly', t => {
  const equation = encodeURIComponent('2-2')

  request(app)
    .get(`/calc/${equation}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No error')
      t.same(res.body.result, 0, 'Subtraction calculated correctly')
      t.end()
    })
})

test('Check division is returned correctly', t => {
  const equation = encodeURIComponent('4/2')

  request(app)
    .get(`/calc/${equation}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No error')
      t.same(res.body.result, 2, 'Division calculated correctly')
      t.end()
    })
})

test('Complex sum is returned correctly', t => {
  const equation = encodeURIComponent('(13-5)/2')

  request(app)
    .get(`/calc/${equation}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No error')
      t.same(res.body.result, 4, 'Complex sum calculated correctly')
      t.end()
    })
})

;['13^2', '() => null', '13===13', 'letters'].forEach(eq => {
  test('It does not accept really complex sums', t => {
    const equation = encodeURIComponent(eq)

    request(app)
      .get(`/calc/${equation}`)
      .expect(400)
      .end((err, res) => {
        t.error(err, 'There should be no error')
        t.same(res.status, 400, 'The status code should be 400')
        t.same(res.body.error, 'Only simple expressions are allowed', 'Error message was not set')
        t.end()
      })
  })
})

test('It gives an error if the result is not calculable', t => {
  const equation = encodeURIComponent('13-/*34')

  request(app)
    .get(`/calc/${equation}`)
    .expect(400)
    .end((err, res) => {
      t.error(err, 'There should be no error')
      t.same(res.status, 400, 'The status code should be 400')
      t.same(res.body.error, 'The calculation needs to be calculable', 'Error message was not set')
      t.end()
    })
})
