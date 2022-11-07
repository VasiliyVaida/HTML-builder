const path = require("path");
const fs = require("fs")


const fileLDirLink = path.join(__dirname, 'text.txt')
const readableStream = fs.createReadStream(fileLDirLink, 'utf-8')
let data = ''
readableStream.on('data', chunk => data += chunk)
readableStream.on('end', () => console.log(data))

