const { Schema } = require('mongoose');

const magazineSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: 'None' },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
  },
);

module.exports = magazineSchema;
