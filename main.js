// Importing functions
const fs = require('fs');
const readline = require('readline');
const loadToDos = require('./loadToDos.js');
const displayToDoList = require('./displayToDos.js');
// const handleMenu = require('./handleMenu.js'); // - not working atm

// Load toDo List
const strToDo = fs.readFileSync('./todos.csv', 'utf-8');
const tableToDo = loadToDos(strToDo);

displayToDoList(tableToDo);

const interface = readline.createInterface({input: process.stdin, output: process.stdout});
const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Mark a todo completed.
4. Mark a todo uncompleted.
5. Quit.

`;

const handleMenu = function(str) {
    switch(str) {
        default:
            console.log('Quitting!');
            break;
        case '1':
            console.log(str);
            break;
    }

    interface.close();
}

interface.question(menu, handleMenu);