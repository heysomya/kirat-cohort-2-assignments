const fs = require('fs');

const readFromFile = (file) => {
  fs.readFile(file, 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });

  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  console.log('finished sum: ' + sum);
};

readFromFile('./sample.txt');
