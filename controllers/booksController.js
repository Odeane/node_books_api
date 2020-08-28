const models = require('../models')

const booksController = {
  async index(request, response, next) {
    const booksIndex = await models.Book.findAll()
    response.json({books: booksIndex})
  },
  async show(request, response, next) {
    const { id } = request.params
    const book = await models.Book.findByPk(id)
    response.send({book:book})
  }
}
module.exports = booksController