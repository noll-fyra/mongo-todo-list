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
  if (!params.name) {
    console.log('Please enter a name')
    return
  }

  if (params.name.length < 5) {
    console.log('Name too short (5 or more characters required)')
    return
  }

  mongoose.connect(dbURI)
  Todo.findById(id, function (err, data) {
    if (err) console.log('No document with that id exists')
    var newParams = params
    var changesMade = false
    if (!params.description) {
      newParams.description = ''
    }
    if (params.name === data.name) {
      delete newParams.name
      changesMade = true
    }
    if (params.description === data.description) {
      delete newParams.description
      changesMade = true
    }
    if (params.completed === data.completed) {
      delete newParams.completed
      changesMade = true
    }

    if (changesMade) {
      console.log('No changes were made')
      mongoose.disconnect()
      return
    }
    Todo.update({'_id': id}, newParams, function (err, data) {
      if (err) console.log('There was a problem updating the document')
      console.log('Document successfully updated')
      mongoose.disconnect()
    })
  })
}

function destroy (id) {
  // find the TODO with this id and destroy it. console log success/failure.
  mongoose.connect(dbURI)
  Todo.deleteOne({'_id': id}, function (err, data) {
    if (err) console.log('There was a problem destroying the selected document')
    console.log('Document with id ' + id + ' successfully destroyed')
    mongoose.disconnect()
  })
}

function destroyAll () {
  mongoose.connect(dbURI)
  Todo.remove({}, function (err, data) {
    if (err) console.log('There was a problem destroying all documents')
    console.log('All documents successfully destroyed')
    mongoose.disconnect()
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
