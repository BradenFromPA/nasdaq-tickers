// Here we extract the data we need from
// the text file, and assemble a usable object.
const fs = require('fs');



const screener = (callback) => {
  var unfinishedBuffer = [];
  var completedBuffer = [];

  var file = fs.readFileSync('src/fileGenerator/nasdaq_screener_1.txt', 'utf-8');
    var stringFile = file.toString();
    var splitFile = stringFile.split(/\n/)
    
    for(i=0; i<splitFile.length; ++i) {
      var buffer = splitFile[i].split(',');
      unfinishedBuffer.push(buffer);
    }
    for(i=0; i<unfinishedBuffer.length; ++i) {
      var ticker = unfinishedBuffer[i][0];
      var name = unfinishedBuffer[i][1];

      var object = {
        ticker,
        name
      };

      completedBuffer.push(object);
    }
  
  callback(completedBuffer);
};


const writeToFile = (data) => {
  var writableData = JSON.stringify(data);

  fs.writeFile('src/fileGenerator/nasdaq_screener_1_json.txt', writableData, (err) => {
    if (err) throw err;
  })
};



module.exports = {
  screener,
  writeToFile
};