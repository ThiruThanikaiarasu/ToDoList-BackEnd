const express = require('express')
const { getAllToDoItems, createANewToDoItem, getAToDoItem, updateToDoItem, deleteToDoItem } = require('../controllers/todo_items')
const router  = express.Router()

// using mvc architecture 

router.route('/').get(getAllToDoItems).post(createANewToDoItem)

router.route('/:id').get(getAToDoItem).patch(updateToDoItem).delete(deleteToDoItem)

module.exports = router

// views
// controllers