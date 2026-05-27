const fs = require('fs');

const tempFiles = [
  'C:\\Users\\BLUEWAVE COMP\\.gemini\\antigravity\\brain\\71051363-75eb-4ceb-9201-a081e9878f8c\\media__1779899422519.jpg',
  'C:\\Users\\BLUEWAVE COMP\\.gemini\\antigravity\\brain\\71051363-75eb-4ceb-9201-a081e9878f8c\\media__1779899422520.jpg'
];

console.log('--- Temp Uploaded Files ---');
for (const file of tempFiles) {
  if (fs.existsSync(file)) {
    const stats = fs.statSync(file);
    let dimensions = 'Unknown';
    try {
      const buffer = fs.readFileSync(file);
      let i = 2;
      while (i < buffer.length - 8) {
        if (buffer[i] === 0xFF && (buffer[i+1] >= 0xC0 && buffer[i+1] <= 0xC3)) {
          const height = buffer.readUInt16BE(i + 5);
          const width = buffer.readUInt16BE(i + 7);
          dimensions = `${width} x ${height}`;
          break;
        }
        i++;
      }
    } catch (e) {
      dimensions = 'Error reading';
    }
    console.log(file, stats.size, 'bytes', dimensions);
  } else {
    console.log('File does not exist:', file);
  }
}
