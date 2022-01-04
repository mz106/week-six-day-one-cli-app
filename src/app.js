
const fs = require("fs");
const { addMovie } = require("./utils/index");

const app = () => {
    if (process.argv[2] === 'title' && process.argv[4] === 'actor') {
        addMovie(process.argv[3], process.argv[5]);
    } else {
        console.log("I don't understand!!!!!")
    }
};

app();




