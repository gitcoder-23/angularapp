// eslint-disable-next-line new-cap
const app = require('express').Router();

// get all page
const orderSelect = require('./order_select');
const orderInsert = require('./order_insert');
const orderUpdate = require('./order_update');
const orderDelete = require('./order_delete');

// get all route

app.get('/getorder', orderSelect.OrderSelect);
app.get('/getsingaleorder/:id', orderSelect.OrderSelectSingale);
app.post('/orderinsert', orderInsert.OrderInsert);
app.put('/orderupdate/:id', orderUpdate.OrderUpdate);
app.delete('/orderdelete/:id', orderDelete.OrderDelete);

module.exports = app;
