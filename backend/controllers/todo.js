const Todo = require('../model/todo');
const mongoose = require('mongoose');



// ==> نمایش تمامی مدل های داخل دیتابیس بصورت فایل جیسون
// GET ALL TODOS 🎖
const getTodos = async (req , res) => {
    const todos = await Todo.find()

    res.status(200).json({todos})
}


// ===> ساخت یک مدل در دیتابیس 
// CREATE NEW TODO 🎖
const createTodo = async (req , res) => {
        const {title, des, load} = req.body;
    
        try {
            const TodoCreate = await Todo.create({title , des, load})
            res.status(201).json(TodoCreate)
        } catch (err) {
            console.log(err);
        }
}

// DELETE A TODO 🎖
const deleteTodo = async (req ,res) => {
    const { id } = req.params

    try {
        const deleteTodo = await Todo.deleteOne({_id: id})
        res.status(200).json({deleteTodo})

    } 
    catch (err) {
        console.log(err);
    }
}




module.exports = {
    createTodo,
    getTodos,
    deleteTodo,
}