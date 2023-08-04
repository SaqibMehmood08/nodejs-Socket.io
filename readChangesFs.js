const fs = require('fs');

const filePath = 'big.txt';

// watch module
fs.watch(filePath, (eventType, filename) => {
   
    if (eventType === 'change') {
      console.log(`File ${filename} has been modified.`);
    } else if (eventType === 'rename') {
      console.log(`File ${filename} has been renamed.`);
    }
  });