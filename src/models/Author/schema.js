const Schema = require("mongoose").Schema;

const authorSchema = new Schema(
  {
    name: { type: String, required: true },
    originName: {type: String},
    gender: {type: Schema.Types.Number, default: 1},
    socials: {type: Map},
    description: { type: String }
  },
  { versionKey: false, timestamps: { createdAt: 'createdDate',updatedAt: 'updatedDate' } }
);

module.exports = authorSchema;
