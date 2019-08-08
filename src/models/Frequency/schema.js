const Schema = require("mongoose").Schema;

const frequencySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String }
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createdDate", updatedAt: "updatedDate" }
  }
);

module.exports = frequencySchema;
