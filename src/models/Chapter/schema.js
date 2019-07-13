const Schema = require("mongoose").Schema;

const chapterSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    servers: { type: Map },
    updated_by: { type: Schema.Types.ObjectId },
    created_at: { type: Schema.Types.Date, default: Date.now },
    available: { type: Schema.Types.Boolean, default: true },
    timerAvailable: { type: Schema.Types.Date },
    downloadFolder: { type: String }
  },
  { versionKey: false, timestamps: { updatedAt: "updated_at" } }
);

module.exports = chapterSchema;
