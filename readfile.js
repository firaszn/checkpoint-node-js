const fs = require('fs');

fs.readFile('welcome.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error ' + err.message);
    return;
  }

  console.log('Content of "welcome.txt":', data);
});
