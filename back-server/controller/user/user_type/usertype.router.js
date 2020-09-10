// eslint-disable-next-line new-cap
const app = require('express').Router();

// Availing All Required Methods From  Controller For Route

const userTypeSelect = require('./usertype_select');
const userTypeInseret = require('./usertype_insert');
const userTypeUpdate = require('./usertype_update.js');
const userTypeDelete = require('./usertype_delete');

// all route
app.get('/getusertype', userTypeSelect.GetUserType);
app.get('/getusertype/:id', userTypeSelect.GetSingaleUserType);
app.post('/usertypeinsert', userTypeInseret.UserTypeInsert);
app.put('/updateusertype/:id', userTypeUpdate.UpdateUserType);
app.delete('/deleteusertype/:id', userTypeDelete.DeleteUserType);

module.exports = app;
