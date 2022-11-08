const fs = require('fs');
const path = require('path');
const secretPath = path.join(__dirname, 'secret-folder');
fs.readdir(secretPath, { withFileTypes: true }, (error, dirList) => {
  if (!error) {
    dirList.forEach((item) => {
      const itemPath = path.join(secretPath, item.name);
      if (item.isFile()) {
        let newNameArr = [];
        let nameArr = item.name.split('');
        for (let i = 0; i < nameArr.length; i++) {
          if (nameArr[i] === '.') {
            break;
          }
          newNameArr.push(nameArr[i]);
        }
        let stats = fs.statSync(itemPath);
        let size = stats.size / 1024;
        console.log(`${newNameArr.join('')} - ${path.extname(item.name).slice(1)} - ${size} KB `);
      }
    });
  }
});
