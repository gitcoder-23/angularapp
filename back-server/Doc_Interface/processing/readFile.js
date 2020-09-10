const fs = require('fs');

const data = '../data/data.json';

module.exports = {
  loadFile() {
    console.log(fs.readFileSync(data, 'utf8'));
    return fs.readFileSync(data, 'utf8');
  },
};
