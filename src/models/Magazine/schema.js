const Schema = require("mongoose").Schema;

const magazineSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "None" }
  },
  { versionKey: false, timestamps: { updatedAt: "updated_at" } }
);

module.exports = magazineSchema;
