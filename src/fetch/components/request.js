// =============================
// === Request data from API ===
// =============================

const axios = require('axios');


url = 'https://api.nasdaq.com/api/screener/stocks?tableonly=true&limit=25&offset=0&download=true';

const request = new Promise((resolve, reject) => {
    axios.get(url)
        .then((res) => {
            resolve(res.data.data);
        }).catch(err => {
            reject(err);
        });
});

module.exports = request;