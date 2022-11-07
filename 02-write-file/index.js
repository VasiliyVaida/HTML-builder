const path = require('path');
const fs = require('fs');
const { stdin, stdout } = process;

const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
writeStream.on('error', (error) => console.error(error.message));

stdout.write('Введите текст\n');
stdin.on('data', (chunk) => {
  if (chunk.toString().trim() === 'exit') {
    process.exit();
  }
  writeStream.write(chunk);
});

process.on('exit', () => stdout.write('Good bye!'));
process.on('SIGINT', () => process.exit());
