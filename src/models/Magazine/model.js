const schema = require('./schema');
const mongoose = require("mongoose");
const updateTimestamps = require("../midware/UpdateTimeStamps");

//Model middleware here
updateTimestamps(schema);

module.exports = mongoose.model('Magazine', schema);