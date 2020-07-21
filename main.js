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


// Interface functions
// add function - Adds a todo
const add = function(todo) {
    const newTodo = [todo, 'uncomplete'];
    tableToDo.push(newTodo);
    displayToDoList(tableToDo);

    interface.close();
}

const remove = function(todo) {
    
}

// Handle Menu function
const handleMenu = function(str) {
    switch(str) {
        case '1':
            const addQuest = 'What should go on your list?\n';
            interface.question(addQuest, add);
            
            break;
        
        default:
            console.log('Quitting!');
            interface.close();
            break;
        }
        
    }
    
    
    // Actual interface call
    interface.question(menu, handleMenu);