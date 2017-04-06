// Mongoose Schema and Models goes here
const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: [5, '5 characters minimum for the name'],
    require: true
  },
  description: String,
  completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
