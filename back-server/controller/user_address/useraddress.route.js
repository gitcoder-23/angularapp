// eslint-disable-next-line new-cap
const app = require('express').Router();

// Availing All Required Methods From  Controller For Route
const userSelect = require('./useraddress_select');
const userInsert = require('./useraddress_insert');
const userUpdate = require('./useraddress_update');
const userDel = require('./useraddress_delete');

// All Routes for API
app.get('/getuser_address', userSelect.getUseraddress);
app.get('/singleuser_address/:id', userSelect.singale_user_address);
app.post('/adduser_address', userInsert.addUseraddress);
app.put('/putuser_address/:id', userUpdate.putuser_address);
app.delete('/deluser_addres/:id', userDel.delUser_address);

module.exports = app;
