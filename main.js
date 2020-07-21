// Importing functions
const fs = require('fs');
const readline = require('readline');
const loadToDos = require('./loadToDos.js');
const displayToDoList = require('./displayToDos.js');
const saveToDos = require('./saveToDos.js');
const { table } = require('console');
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

    saveToDos(tableToDo);
    interface.close();
}

// remove function - Removes a todo
const remove = function(todo) {
    let changeDetected = false;
    
    for(const row of tableToDo) {
        if(row[0] === todo) {
            let index = tableToDo.indexOf(row);
            tableToDo.splice(index, 1); 
            changeDetected = true;
        }
    }
    
    
    if(!changeDetected) {
        console.log("No task by the name of " + todo + "found.");
        interface.close();
    }
    
    console.log("\nNew List:");
    displayToDoList(tableToDo);
    saveToDos(tableToDo);
    interface.close();
}

// complete function - Changes the status of task to complete
const complete = function(todo) {
    for(const row of tableToDo) {
        if(row[0] === todo) {
            let index = tableToDo.indexOf(row);
            tableToDo.splice(index, 1, [row[0], 'complete']);
        }
    }

    displayToDoList(tableToDo);
    saveToDos(tableToDo);
    interface.close();
}

// uncomplete function - Changes the status of take to uncomplete

// Handle Menu function
const handleMenu = function(str) {
    switch(str) {
        case '1':
            const addQuest = 'What should go on your list?\n';
            interface.question(addQuest, add);
            
            break;

        case '2':
            const remQuest = 'What do you want to remove?\n';
            interface.question(remQuest, remove);

            break;

        case '3':
            const completeQuest = 'Which task did you complete?\n';
            interface.question(completeQuest, complete);
            break;

        default:
            console.log('Quitting!');
            interface.close();
            break;
        }
        
    }
    
    
    // Actual interface call
    interface.question(menu, handleMenu);