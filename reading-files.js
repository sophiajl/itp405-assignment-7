var fs = require('fs');

console.log('1');
fs.readFile('files/file1.txt', 'utf8', function(error, contents) {
  console.log('file 1 read');
  console.log(contents);
});

console.log('2');
