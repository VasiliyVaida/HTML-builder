const fsPromises = require('fs/promises');
const path = require('path');

async function copyFolder(currentFolder, targetFolder) {
  await fsPromises.rm(targetFolder, { recursive: true, force: true });
  await fsPromises.mkdir(targetFolder, { recursive: true });
  let folderFiles = await fsPromises.readdir(currentFolder);
  for (let item of folderFiles) {
    let from = path.join(currentFolder, item);
    let target = path.join(targetFolder, item);
    await fsPromises.copyFile(from, target);
  }
}

copyFolder(path.join(__dirname, 'files'), path.join(__dirname, 'files-copy'));
