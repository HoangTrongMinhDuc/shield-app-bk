const Schema = require("mongoose").Schema;

const authorSchema = new Schema(
  {
    name: { type: String, required: true },
    originName: {type: String},
    gender: {type: Schema.Types.Boolean, default: true},
    socials: {type: Map},
    description: { type: String }
  },
  { versionKey: false }
);

module.exports = authorSchema;
