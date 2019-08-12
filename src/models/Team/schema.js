const Schema = require("mongoose").Schema;

const teamSchema = new Schema(
  {
    logo: { type: String, default: "" },
    name: { type: String, required: true },
    description: { type: String, default: "None" },
    leader: { type: Schema.Types.ObjectId, required: true },
    members: [{ type: Schema.Types.ObjectId }]
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createdDate", updatedAt: "updatedDate" }
  }
);

module.exports = teamSchema;
