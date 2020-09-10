// eslint-disable-next-line new-cap
const app = require('express').Router();

// Availing All Required Methods From  Controller For Route
const mail = require('../controller/mail');

app.post('/sendMail', mail.sendMail);

module.exports = app;
