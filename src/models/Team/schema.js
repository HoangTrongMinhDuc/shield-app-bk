const Schema = require("mongoose").Schema;

const teamSchema = new Schema(
  {
    logo: { type: String, default: "https://res.cloudinary.com/shieldmanga/image/upload/v1565883771/manga/logo.png" },
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
