const app = require('express').Router();

// All Required Methods From  Controller For Route
const settingSelect = require('./settings_select');
const settingsInsert = require('./settings_insert');
const settingsUpdate = require('./settings_update');
const settingsDelete = require('./settings_delete');

// All Routes for API
app.get('/getsettings', settingSelect.getSettings);
app.get('/singlesettings/:sid', settingSelect.singleSettings);
app.post('/addsettings', settingsInsert.addSettings);
app.put('/putsettings/:sid', settingsUpdate.putSettings);
app.delete('/delsettings/:sid', settingsDelete.delSettings);

module.exports = app;
