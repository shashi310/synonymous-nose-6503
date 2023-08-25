const { BlacklistModel } = require("../models/blacklist.model");

async function BlacklistAuth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  const { userID } = req.body;

  const blacklist = await BlacklistModel.findOne({ userID });

  if (!blacklist) {
    next();
  } else {
    if (blacklist.tokens.includes(token)) {
      res.json({ msg: "Your token has been blacklisted please login again!!" });
    } else {
      next();
    }
  }
}

module.exports = { BlacklistAuth };
