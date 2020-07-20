// This function takes in a string and converts it into a 
// 2D array. Each row is determined by a new line, and each element
// array is separated by commas. 
const loadToDos = function(str) {
    const rows =  [];
    const splitStr = str.split("\n");
    
    for(let row of splitStr) {
        rows.push(row.split(','));
    }

    return rows;
}


module.exports = loadToDos;