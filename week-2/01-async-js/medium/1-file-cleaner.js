const fs = require('fs');

const fileCleaner = (path) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data = data.replace(/\s+/g, ' ');
      fs.writeFile(path, data, (err) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log('Success!');
        }
      });
    }
  });
};

fileCleaner('./sample.txt');
