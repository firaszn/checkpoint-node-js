const fs = require('fs');

const fileContent = 'hello node';

fs.writeFileSync('welcome.txt', fileContent, 'utf-8');

console.log('File "welcome.txt" created with content: ' + fileContent);
