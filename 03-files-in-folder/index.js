const fs = require('fs');
const path = require('path');
const secretPath = path.join(__dirname, 'secret-folder');
fs.readdir(secretPath, { withFileTypes: true }, (error, dirList) => {
  if (!error) {
    dirList.forEach((item) => {
      if (item.isFile()) {
        let newNameArr = [];
        let nameArr = item.name.split('');
        for (let i = 0; i < nameArr.length; i++) {
          if (nameArr[i] === '.') {
            break;
          }
          newNameArr.push(nameArr[i]);
        }
        i;
        console.log(`${newNameArr.join()} - ${path.extname(item.name).slice(1)} - `);
      }
    });
  }
});

// fs.readdirSync(secretPath).forEach((item) => console.log(item));
