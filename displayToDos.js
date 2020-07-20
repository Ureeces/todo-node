// This function takes in 2D array that should represent
// the to do List, and print it out in a nice
// and formatted manner
const displayToDoList = function(toDoList) {
    for(const row of toDoList) {
        console.log(`- ${row[0]} - ${row[1]}`);
    }
}

module.exports = displayToDoList;