const app = require('express').Router();
const reding = require('./readFile');

app.get('/endpoints', (req, res) => {
  res.render('main', { mydata: reding });
  console.log(reding.loadFile);
});

module.exports = app;
