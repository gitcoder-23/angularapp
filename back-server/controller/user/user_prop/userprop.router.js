// eslint-disable-next-line new-cap
const app = require('express').Router();

// Availing All Required Methods From  Controller For Route

const userPropSelect = require('./userprop_select');
const userPropInser = require('./userprop_insert');
const userPropUpdate = require('./userprop_update');
const userPropDelete = require('./userprop_delete');

// all route create
app.get('/getuserpropselect', userPropSelect.GetUserPropSelect);
app.get('/getuserpropselect/:id', userPropSelect.GetUserPropSelectSingale);
app.post('/insertuserprop', userPropInser.InsertUserProp);
app.put('/updateuserprop/:id', userPropUpdate.UpdateUserProp);
app.delete('/deleteuserprop/:id', userPropDelete.DleteUserProp);

module.exports = app;
