// eslint-disable-next-line new-cap
const app = require('express').Router();

// Availing All Required Methods From  Controller For Route

const userValSelect = require('./userval_select');
const userValInsert = require('./userval_insert');
const userValUpdate = require('./userval_update');
const userValDelete = require('./userval_delete');

// all route
app.get('/getuserval', userValSelect.UserValSelect);
app.get('/getuserval/:id', userValSelect.UserValSelectSingale);
app.post('/insertuserval', userValInsert.UserValInsert);
app.put('/uservalupdate/:id', userValUpdate.UserValUpdate);
app.delete('/uservaldelete/:id', userValDelete.UserValDelete);
app.get('/checkemail', userValSelect.checkEmail);

module.exports = app;
