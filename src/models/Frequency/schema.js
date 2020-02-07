const { Schema } = require('mongoose');

const frequencySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  },
);

module.exports = frequencySchema;
