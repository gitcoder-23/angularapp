// eslint-disable-next-line new-cap
const app = require('express').Router();

// get all page
const tempcartSelect = require('./tempcart_select');
const tempcartInsert = require('./tempcart_insert');
const tempcartUpdate = require('./tempcart_update');
const tempcartDelete = require('./temapcart_delete');

// get all router

app.get('/gettempcart', tempcartSelect.TempCartSelect);
app.get('/tempcartsingale/:id', tempcartSelect.TempCartSelectSingale);
app.post('/tempcartinsert', tempcartInsert.TempCartInsert);
app.put('/tempcartupdate/:id', tempcartUpdate.TempCartUpdate);
app.delete('/tempcartdelete/:id', tempcartDelete.TempCartDelete);

module.exports = app;
