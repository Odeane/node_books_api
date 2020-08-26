const app = require('../../app')
const supertest = require('supertest');
const expect = require('chai').expect

let server, request, response

before(done => {
  server = app.listen(done)
  request = supertest.agent(server)
});

after(done => {
  server.close(done)
})


describe('GET /api/v1/books', () => {

  before(async () => {
    response = await request.get('/api/v1/books')
  })

  it('is expected to respond with a status of 200', () => {
    expect(response.status).to.equal(200)
  })


  it('is expected to respond with a list of books', () => {
    expect(response.body['books'].length).to.equal(2)
  });
});


describe('GET /api/v1/books/:id', () => {
  it('is expected to respond with a single book', async () => {
    response = await request.get('/api/v1/books/2')
    expect(response.body.book.title).to.equal('Learn NodeJS with Craft Academy')
  });
})

