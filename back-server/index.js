const express = require('express');

const app = express();

require('dotenv').config();

const consola = require('consola');

const bodyParser = require('body-parser');
// create application/json parser
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');

app.use(cors());

const fileUpload = require('express-fileupload');
const view = require('./Doc_Interface/initiate');

app.use(view);
app.use(fileUpload());

// for serving stic content
app.use(express.static('upload'));
app.use('/product', express.static('upload/products'));
app.use('/category', express.static('upload/categories'));

// test route
app.get('/', (req, res) => {
  res.json('hay im server :)');
});

// Import All Route's
const route = require('./route');

app.use(route);

async function start() {
  const port = process.env.PORT || 3000;
  const host = 'localhost';
  app.listen(port);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}

start();
