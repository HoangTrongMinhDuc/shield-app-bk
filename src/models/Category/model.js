const mongoose = require('mongoose');
const schema = require('./schema');
const updateTimestamps = require('../midware/UpdateTimeStamps');

// Model middleware here
updateTimestamps(schema);

module.exports = mongoose.model('Category', schema);
