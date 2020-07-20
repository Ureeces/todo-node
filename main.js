// Importing functions
const fs = require('fs');
const loadToDos = require('./loadToDos.js');
const displayToDoList = require('./displayToDos.js');

// Load toDo List
const strToDo = fs.readFileSync('./todos.csv', 'utf-8');
const tableToDo = loadToDos(strToDo);

displayToDoList(tableToDo);