const fs = require('fs');
const path = require('path');
const txtPath = path.join(__dirname, 'text.txt');
console.log(txtPath);
const readStream = fs.createReadStream(txtPath);
let data = '';
readStream.on('data', (chunk) => {
  data += chunk;
  console.log(data);
});
