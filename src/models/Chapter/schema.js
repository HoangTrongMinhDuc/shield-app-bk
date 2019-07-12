const Schema = require("mongoose").Schema;

var bookSchema = new Schema(
  {
    shortId: {type: String, required: true, unique: true},
    title: { type: String, required: true },
    servers: {type: Schema.Types.Map},
    created_at: { type: Schema.Types.Date, default: Date.now },
    available: { type: Schema.Types.Boolean, default: true },
    timerAvailable: { type: Schema.Types.Date },
    downloadFolder: { type: String }
  },
  { versionKey: false, timestamps: { updatedAt: "updated_at" } }
);

module.exports = bookSchema;
