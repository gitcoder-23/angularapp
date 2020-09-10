const path = require('path');

const express = require('express');

const app = express();

// view eangin setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/doc'));

// expose to show static files
app.use(express.static('Doc_Interface/public'));

const process = require('./processing/loading_process');

app.use(process);

module.exports = app;
