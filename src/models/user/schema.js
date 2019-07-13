const Schema = require("mongoose").Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    displayName: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    hash_password: {
      type: String,
      required: true
    },
    salt_password: {
      type: String,
      required: true
    },
    status: {type: Boolean, default: true},
    join_date: { type: Date, default: Date.now }
  },
  { versionKey: false }
);

module.exports = userSchema;