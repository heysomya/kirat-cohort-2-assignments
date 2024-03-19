const fs = require('fs');

const writeToFile = (file, data) => {
  fs.writeFile(file, data, { flag: 'a' }, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const data = 'Hello Somya!\n';
writeToFile('./sample.txt', data);
