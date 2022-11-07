const fsPromises = require('fs/promises');
const path = require('path');
const fs = require('fs');

async function mergeStyles(styleFolder, styleBundleFile) {
  const writeStream = fs.createWriteStream(styleBundleFile);
  const files = await fsPromises.readdir(styleFolder, { withFileTypes: true });
  for (let item of files) {
    let file = path.join(styleFolder, item.name);
    if (item.isFile() && path.extname(file) === '.css') {
      const readStream = fs.createReadStream(file, 'utf-8');
      readStream.pipe(writeStream);
    }
  }
}

mergeStyles(path.join(__dirname, 'styles'), path.join(__dirname, 'project-dist', 'bundle.css'));
