const express = require('express')
const { getAllToDoItems, createANewToDoItem } = require('../controllers/todo_items')
const router  = express.Router()

router.route('/').get(getAllToDoItems).post(createANewToDoItem)

module.exports = router

// views
// controllers