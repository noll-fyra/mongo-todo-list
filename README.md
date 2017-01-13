# Mongo Todo List

This is Part 2 of a series of labs working towards building your first full stack web app. 

- [Part 1 - TDD todo list](https://github.com/wdi-sg/tdd-todo-list)
- Part 2 - Mongo todo list (this repo)
- [Part 3 - Express todo list](https://github.com/wdi-sg/express-todo-list-pt1)
- Part 4 - to come

We've learnt how to create CRUD actions and how to save them to a file. In this Lab, we'll instead save them to a Mongo Database database using [Mongoose](https://jeremiahalex.gitbooks.io/wdi-sg/content/05-express/express-mongoose/readme.html).

You can use the build in REPL to test your functionality.

## Getting Started

* Fork and clone this repository
* Run `npm install` to install dependencies
* `npm start` - run the REPL

##Requirements

Add a Mongoose schema and model to your `models/todo.js` file. Then fill in the CRUD actions in your `controllers/todo_controller.js` to interact with your Mongoose Todo Model.

__Warning__: Mongoose is Asynchronous, so we'll need to use callbacks to wait for data to save.

## Bonus

Use Mongoose Validations to ensure that only valid TODOs are saved.

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
