const express = require('express')
const { getAllToDoItems } = require('../controllers/todo_items')
const router  = express.Router()

router.route('/').get(getAllToDoItems)

module.exports = router

// views
// controllers