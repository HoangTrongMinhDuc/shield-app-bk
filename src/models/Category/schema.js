const Schema = require("mongoose").Schema;

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String }
  },
  { versionKey: false, timestamps: { updatedAt: "updated_at" } }
);

module.exports = categorySchema;
