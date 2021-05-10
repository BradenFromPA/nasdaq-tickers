// ============================================
// === Requests data, and writes to data dir ===
// ============================================

const request = require('./components/request');
const write = require('./components/write');


const fetch = () => {
    request
        .then(data => {
            if(data) write(data);
        }).catch(err => {
            if(err) return console.log(err);
        });
};

module.exports = fetch;

fetch();