const mongoose = require("mongoose");

const blacklistSchema = mongoose.Schema(
  {
    userID: { type: String, required: true },
    userName: { type: String, required: true },
    role:{ type: String, required: true},
    tokens: { type: Array, required: true },
  },
  { versionKey: false }
);

const BlacklistModel = mongoose.model("blacklist", blacklistSchema);

module.exports = { BlacklistModel };
