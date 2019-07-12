const Schema = require("mongoose").Schema;

var categorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String }
  },
  { versionKey: false }
);

module.exports = categorySchema;
