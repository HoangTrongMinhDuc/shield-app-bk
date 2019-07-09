const Schema = require("mongoose").Schema;

var userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    displayName: { type: String },
    email: {
      type: String,
      required: true,
      unique: true
    },
    hash_password: {
      type: String,
      required: true
    },
    salt_password: {
      type: String,
      required: true
    },
    status: Boolean,
    role: Boolean,
    join_date: { type: Date, default: Date.now }
  },
  { versionKey: false }
);

module.exports = userSchema;