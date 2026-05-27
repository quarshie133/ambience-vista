const fs = require('fs');

const file = 'c:\\Users\\BLUEWAVE COMP\\Documents\\projects\\ambience-vista\\client\\src\\assets\\4dd8bc2c-07e0-4e5e-bf29-9e96c1ad6230.jpg';
if (!fs.existsSync(file)) {
  console.log('File does not exist');
  process.exit(1);
}

const buffer = fs.readFileSync(file);
console.log('Reading first 2000 bytes for strings...');
const printable = [];
for (let i = 0; i < Math.min(buffer.length, 10000); i++) {
  const char = buffer[i];
  if (char >= 32 && char <= 126) {
    printable.push(String.fromCharCode(char));
  } else {
    printable.push(' ');
  }
}
const text = printable.join('');
// Find runs of text
const matches = text.match(/[A-Za-z0-9\s\-\/\:\.]{4,}/g);
if (matches) {
  console.log('Found metadata strings:');
  const filtered = matches.map(m => m.trim()).filter(m => m.length > 3);
  console.log(filtered.slice(0, 30));
} else {
  console.log('No metadata strings found');
}
