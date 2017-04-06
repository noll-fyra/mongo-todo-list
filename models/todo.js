// Mongoose Schema and Models goes here
const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  name: String,
  description: String,
  completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
