const path = require('path');
const fs = require('fs');
const { stdin, stdout } = process;

const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
writeStream.on('error', (error) => console.error(error.message));

stdout.write('Введите данные\n');

stdin.on('data', (chunk) => {
  if (chunk.toString().trim() === 'exit') process.exit();
  writeStream.write(chunk);
});

process.on('exit', () => stdout.write('Процесс завершен, до свидания!'));
process.on('SIGINT', () => process.exit());
