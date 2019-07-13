const Schema = require("mongoose").Schema;

const frequencySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String }
  },
  { versionKey: false }
);

module.exports = frequencySchema;
