const { Interface } = require("readline");
// Importing it does not seem to work at the moment

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

module.exports = handleMenu;