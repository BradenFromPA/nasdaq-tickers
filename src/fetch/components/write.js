// ==========================
// === Write data to file ===
// ==========================

const fs = require('fs');


const dir = 'src/data/data.json';

const write = (data) => {
    fs.writeFile(dir, JSON.stringify(data), (err) => {
        if(err) return console.log(err);
    });
};

module.exports = write;