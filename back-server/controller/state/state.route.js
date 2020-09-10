// eslint-disable-next-line new-cap
const app = require('express').Router();

// Availing All Required Methods From  Controller For Route
const stateSelect = require('./state_select');
const stateInsert = require('./state_insert');
const stateUpdate = require('./state_update');
const stateDel = require('./state_delete');

// All Routes for API
app.get('/getstate', stateSelect.getState);
app.get('/singlestate/:id', stateSelect.singleState);
app.post('/addstate', stateInsert.addState);
app.put('/putstate/:sid', stateUpdate.putState);
app.delete('/delstate/:sid', stateDel.delState);

module.exports = app;
