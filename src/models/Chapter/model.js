const mongoose = require('mongoose');
const schema = require('./schema');

// Model middleware here

module.exports = mongoose.model('Chapter', schema);
