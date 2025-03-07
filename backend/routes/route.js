const express = require('express');
const router = express.Router();

const {
    createTodo,
    getTodos,
    getSingleTodo,
    deleteTodo,
    updateTodo
} = require('../controllers/todo');

// GET ALL TODOS 🎖
router.get('/',getTodos)

// CREATE NEW TODO 🎖
router.post('/',createTodo)

// DELATE A TODO 🎖
router.delete('/:id', deleteTodo)




module.exports = router