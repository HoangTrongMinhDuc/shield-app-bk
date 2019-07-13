const Schema = require("mongoose").Schema;

const statusSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String }
  },
  { versionKey: false }
);

module.exports = statusSchema;
