// TODO. import TODO Model ;-)
const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost/todos'
const Todo = require('../models/todo')
mongoose.Promise = global.Promise

function save (todo) {
  mongoose.connect(dbURI)
  todo.save(function (err) {
    if (err) console.error(err)
    mongoose.disconnect()
  })
}

function create (params) {
  // create a new TODO and console log the response
  if (!params.name) {
    console.log('Please enter a name')
    return
  }

  if (params.name.length < 5) {
    console.log('Name too short (5 or more characters required)')
    return
  }
  var newTodo = new Todo()

  newTodo.name = params.name
  newTodo.description = params.description
  newTodo.completed = params.completed

  if (!params.description) {
    newTodo.description = ''
  }

  if (!params.completed) {
    newTodo.completed = false
  }

  console.log(newTodo)
  save(newTodo)
}

function list () {
  // console log the list of all TODOs
  mongoose.connect(dbURI)
  Todo.find().exec(function (err, data) {
    if (err) console.log('There was a problem retrieving the todos')
    console.log(data)
    mongoose.disconnect()
  })
}

function show (id) {
  // find the TODO with this id and console log it
  mongoose.connect(dbURI)
  Todo.findById(id, function (err, data) {
    if (err) console.log('No document with that id exists')
    console.log(data)
    mongoose.disconnect()
  })
}

function update (id, params) {
  // find the TODO with this id and update it's params. console log the result.
  var newParams = params

  if (!params.name) {
    console.log('Please enter a name')
    return
  }

  if (params.name.length < 5) {
    console.log('Name too short (5 or more characters required)')
    return
  }

  if (!params.description) {
    newParams.description = ''
  }

  Todo.update({'_id': id}, newParams, function (err, data) {
    if (err) console.log('No document with that id exists')
    console.log('Document successfully updated')
  })
}

function destroy (id) {
  // find the TODO with this id and destroy it. console log success/failure.
  Todo.deleteOne({'_id': id}, function (err, data) {
    if (err) console.log('There was a problem destroying the selected document')
    console.log('Document with id ' + id + ' successfully destroyed')
  })
}

function destroyAll () {
  Todo.remove({}, function (err, data) {
    if (err) console.log('There was a problem destroying all documents')
    console.log('All documents successfully destroyed')
  })
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  destroyAll
}
