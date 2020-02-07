const { Schema } = require('mongoose');

const publisherSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: 'None' },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  },
);

module.exports = publisherSchema;
