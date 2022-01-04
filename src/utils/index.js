const fs = require("fs");

const addMovie = (title, actor) => {
    try {
        const stringyObj = JSON.stringify({title: title, actor: actor});
        fs.writeFileSync('./storage.json', stringyObj);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addMovie
};

