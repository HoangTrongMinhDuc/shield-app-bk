const Schema = require("mongoose").Schema;

const authorSchema = new Schema(
  {
    logo: {type: String},
    name: { type: String, required: true },
    description: { type: String },
    leader: { type: Schema.Types.ObjectId },
    members: [{ type: Schema.Types.ObjectId }]
  },
  { versionKey: false }
);

module.exports = authorSchema;
