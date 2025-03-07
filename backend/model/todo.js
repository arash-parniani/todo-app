const mongoose = require('mongoose');

const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    load: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Todo', todoSchema)