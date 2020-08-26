const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController')


/* GET users listing. */
router.get('/', booksController.index);
router.get('/:id', booksController.show)
module.exports = router;
