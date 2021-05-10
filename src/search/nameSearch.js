// ====================================
// === Retrieve data by name lookup ===
// ====================================

const file = require('../data/data.json');
const data = file.rows;


const nameSearch = (word) => {
    for(var i = 0; i < data.length; i++) {
        const companyName = data[i].name;
        const searchWord = word;
        const searchPattern = new RegExp('(\\w*'+searchWord+'\\w*)', 'gi');

        var matches = companyName.match(searchPattern);

        if(matches != null) {
            return data[i];
        };
    };
};

module.exports = nameSearch;