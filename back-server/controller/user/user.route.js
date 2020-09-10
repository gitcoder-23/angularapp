// eslint-disable-next-line new-cap
const app = require('express').Router();

// Availing All Required Methods From  Controller For Route
const userSelect = require('./user_select');
const userInsert = require('./user_insert');
const userUpdate = require('./user_update');
const userDel = require('./user_delete');
const authGuard = require('./user_auth');

// All Routes for API user
app.get('/getuser', userSelect.getUser);
app.get('/singleuser/:uid', userSelect.singleUser);
app.post('/adduser', userInsert.addUser);
app.put('/putuser/:uid', userUpdate.putUser);
app.delete('/deluser/:uid', userDel.delUser);

// Routes for initiate authorization and authentication
app.get('/checkuser', authGuard.checkDuplicateUser);
app.post('/login', authGuard.login);
app.post('/logout', authGuard.logout);

// for generarte manual refresh to authorise token
app.post('/token', authGuard.getRefreshToken);

module.exports = app;
