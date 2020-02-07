const { Schema } = require('mongoose');

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    displayName: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    hash_password: {
      type: String,
      required: true,
    },
    salt_password: {
      type: String,
      required: true,
    },
    status: { type: Boolean, default: true },
    access: { type: Schema.Types.Map, default: {} },
    join_date: { type: Date, default: Date.now },
  },
  { versionKey: false },
);

module.exports = userSchema;
