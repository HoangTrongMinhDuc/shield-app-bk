const { Schema } = require('mongoose');

const authorSchema = new Schema(
  {
    name: { type: String, required: true },
    oname: { type: String },
    gender: { type: Schema.Types.Number, default: 1 },
    socials: { type: Map, default: {} },
    description: { type: String, default: 'None' },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  },
);

module.exports = authorSchema;
