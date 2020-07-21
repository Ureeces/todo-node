const fs = require('fs');

const saveToDos = function(toDos) {
    const strArray = [];
    for(const row of toDos) {
        strArray.push(row[0] + "," + row[1]);
    }

    str = strArray.join("\n");

    fs.writeFileSync('./todos.csv', str);

}

module.exports = saveToDos;

// Original Set Here:

// make todo app,uncomplete
// finish the emoji movie project,complete
// catch up on netflix,uncomplete
// learn what a callback is,complete
// internalize what a callback is,uncomplete