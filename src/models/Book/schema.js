const Schema = require("mongoose").Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    otherNames: [{ type: String }],
    cover: { type: String, required: true },
    desciption: { type: String, default: "None" },
    author: { type: Schema.Types.ObjectId, required: true },
    teams: [{ type: Schema.Types.ObjectId }],
    status: { type: Schema.Types.ObjectId },
    categories: [{ type: Schema.Types.ObjectId }],
    bookType: { type: Schema.Types.ObjectId },
    year: Schema.Types.Number,
    publisher: { type: Schema.Types.ObjectId },
    magazine: { type: Schema.Types.ObjectId },
    frequency: { type: Schema.Types.ObjectId },
    chapters: [{ type: Schema.Types.ObjectId }],
    volumes: [{ type: Schema.Types.ObjectId }],
    updated_by: { type: Schema.Types.ObjectId },
    created_at: { type: Schema.Types.Date, default: Date.now },
    available: { type: Schema.Types.Boolean, default: true },
    timerAvailable: { type: Schema.Types.Date },
    download: { type: String }
  },
  { versionKey: false, timestamps: { updatedAt: "updated_at" } }
);

module.exports = bookSchema;
